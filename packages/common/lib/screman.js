// @flow

const prefix: string = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_REDIRECT || ''
  : '';

type QueryMap = { [string]: string };

type Query = {
  name: string,
  value: string,
};

type Locals = {
  appId: string,
  rawQueries: QueryMap,
  inputQueries: QueryMap,
  caller: string,
  broadcastQueries: QueryMap,
  returnQueriesMap: QueryMap,
};

const locals: Locals = {
  appId: '',
  rawQueries: {},
  inputQueries: {},
  caller: '',

  // _toto=tata
  broadcastQueries: {},

  // ret-titi=titi
  returnQueriesMap: {},
};

function getQueriesStr(): string {
  const href = window.location.href;
  const queriesStr = href.substring(href.indexOf('?') + 1);
  return queriesStr === href ? '' : queriesStr;
}

function decode(query: string): Query {
  const parts = query.split('=');
  return {
    name: decodeURIComponent(parts[0]),
    value: decodeURIComponent(parts[1] || ''),
  };
}

function switchQueryType(acc: Locals, query: Query): Locals {
  acc.rawQueries[query.name] = query.value;

  if (query.name === 'redirect') {
    acc.caller = query.value;
  } else if (/^ret-/.test(query.name)) {
    acc.returnQueriesMap[query.name.substring(4)] = query.value;
  } else if (/^_/.test(query.name)) {
    acc.broadcastQueries[query.name] = query.value;
  } else {
    acc.inputQueries[query.name] = query.value;
  }

  return acc;
}

function parseQueries(): void {
  const queriesStr = getQueriesStr();
  if (queriesStr) {
    queriesStr
      .split('&')
      .map(decode)
      .filter(q => !!q.name)
      .reduce(switchQueryType, locals);
  }
}

function getCaller(): string {
  return locals.caller;
}

function getQueries(): QueryMap {
  return locals.inputQueries;
}

function getRawQueries(): QueryMap {
  return locals.rawQueries;
}

function init(appId: string): void {
  locals.appId = appId;
  parseQueries();
}

function transformKeys(obj, transform) {
  const reducer = (acc, k) => Object.assign(acc, { [transform(k)]: obj[k] });

  return Object.keys(obj).reduce(reducer, {});
}

function omit(obj, keys) {
  const reducer = (acc, k) => Object.assign(acc, { [k]: obj[k] });

  return Object.keys(obj).filter(k => !keys.includes(k)).reduce(reducer, {});
}

function queriesToString(queries) {
  const queriesStr = Object.keys(queries)
    .map(k => `${k}=${queries[k]}`)
    .join('&');

  return queriesStr ? `?${queriesStr}` : '';
}

type OpenLinkOptions = {
  appId: string,
  queries?: QueryMap,
};

function createOpenLink(options: OpenLinkOptions): string {
  const appUrl = `${prefix}/${options.appId}/`;
  const queriesStr = queriesToString(options.queries || {});

  return `${appUrl}${queriesStr}`;
}

type OpenLinkWithResultOptions = {
  appId: string,
  queries?: QueryMap,
  resultMap?: QueryMap,
};

function createOpenLinkWithResult(options: OpenLinkWithResultOptions): string {
  const appUrl = `${prefix}/${options.appId}/`;
  const queriesStr = queriesToString(
    Object.assign(
      { redirect: locals.appId },
      options.queries || {},
      transformKeys(options.resultMap || {}, k => `ret-${k}`),
      transformKeys(
        omit(locals.rawQueries, Object.values(options.resultMap || {})),
        k => `_${k}`,
      ),
    ),
  );

  return `${appUrl}${queriesStr}`;
}

type ReturnLinkOptions = {
  resultMap: QueryMap,
};

function createReturnLink(options: ReturnLinkOptions): string {
  const appUrl = `${prefix}/${locals.caller}/`;
  const queriesStr = queriesToString(
    Object.assign(
      transformKeys(locals.broadcastQueries, k => k.substring(1)),
      Object.keys(options.resultMap).reduce(
        (acc, k) =>
          Object.assign(acc, {
            [locals.returnQueriesMap[k]]: options.resultMap[k],
          }),
        {},
      ),
    ),
  );

  return `${appUrl}${queriesStr}`;
}

const appNavigation = {
  createOpenLink,
  createOpenLinkWithResult,
  createReturnLink,
  getCaller,
  getQueries,
  getRawQueries,
  init,
};

export default appNavigation;

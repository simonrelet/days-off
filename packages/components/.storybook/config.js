import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { host } from 'storybook-host';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import Layout from '../lib/Layout';

const contextStories = require.context('../lib/', true, /.stories.js$/);
const contextCSS = require.context('../lib/', true, /.css$/);

function loadStories() {
  contextStories.keys().forEach(contextStories);
  contextCSS.keys().forEach(contextCSS);
}

addDecorator(host({ align: 'center middle' }));
addDecorator(withKnobs);
configure(loadStories, module);

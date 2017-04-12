// @flow

import React from 'react';
import classnames from 'classnames';

type Props = {
  alignment?: 'start' | 'center' | 'end' | 'strech' | 'baseline',
  children?: mixed,
  className?: string,
  direction?: 'horizontal' | 'vertical',
  fillContent?: boolean,
  packing?: 'first' | 'middle' | 'last' | 'space-around' | 'space-between',
};

export default function Layout(
  {
    direction = 'horizontal',
    alignment = 'strech',
    packing = 'first',
    fillContent = false,
    className,
    children,
    ...props
  }: Props,
) {
  const classNames = classnames(
    'Layout',
    `Layout--direction-${direction}`,
    `Layout--alignment-${alignment}`,
    `Layout--packing-${packing}`,
    { 'Layout--fill-content': fillContent },
    className,
  );

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
}

Layout.displayName = 'Layout';

type ItemProps = {
  children?: mixed,
  weight?: number | 'fill',
};

export function LayoutItem({ weight, children }: ItemProps) {
  const style = { flexGrow: weight === 'fill' ? 1 : weight || 0 };
  return (
    <Layout fillContent style={style}>
      {children}
    </Layout>
  );
}

LayoutItem.displayName = 'LayoutItem';

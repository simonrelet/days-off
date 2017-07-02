// @flow
import React from 'react';
import './style.css';

type Props = {
  children: any,
  title: string,
};

export default function Box({ children, title }: Props) {
  return (
    <div className="Box">
      <div className="Box__title">
        {title}
      </div>
      <div className="Box__content">
        {children}
      </div>
    </div>
  );
}

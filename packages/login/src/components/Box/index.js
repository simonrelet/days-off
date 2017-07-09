import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@marv/components/Paper';
import './style.css';

export default function Box({ children, title }) {
  return (
    <Paper className="Box" zDepth={2}>
      <div className="Box__title">
        {title}
      </div>
      <div className="Box__content">
        {children}
      </div>
    </Paper>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Box({ children, title }) {
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

Box.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

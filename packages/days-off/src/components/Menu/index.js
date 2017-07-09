import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

function Credits({ title }) {
  return (
    <div className="Menu__item">
      <div className="Menu__item__title">
        {title}
      </div>
      <div className="Menu__item__line">
        <div className="Menu__item__line__label">Paid leaves</div>
        <div className="Menu__item__value">5.0</div>
        <div className="Menu__item__value-ref">/ 25.0</div>
      </div>
      <div className="Menu__item__line">
        <div className="Menu__item__line__label">RTT</div>
        <div className="Menu__item__value">2.0</div>
        <div className="Menu__item__value-ref">/ 10.0</div>
      </div>
      <div className="Menu__item__line Menu__item__line--total">
        <div className="Menu__item__line__label">Total</div>
        <div className="Menu__item__value">7.0</div>
        <div className="Menu__item__value-ref">/ 35.0</div>
      </div>
    </div>
  );
}

Credits.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Menu({ className }) {
  return (
    <div className={classnames('Menu', className)}>
      <Credits title="Credits" />
      <Credits title="Current selection" />
    </div>
  );
}

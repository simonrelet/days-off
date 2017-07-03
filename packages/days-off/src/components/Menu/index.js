// @flow
import React from 'react';
import './style.css';

function Credits({ title }: { title: string }) {
  return (
    <div className="Menu-item">
      <div className="Menu-title">
        {title}
      </div>
      <div className="Menu-item-line">
        <div className="Menu-item-line-label">Paid leaves</div>
        <div>
          <span className="Menu-item-value">5.0</span> / 25.0
        </div>
      </div>
      <div className="Menu-item-line">
        <div className="Menu-item-line-label">RTT</div>
        <div>
          <span className="Menu-item-value">2.0</span> / 10.0
        </div>
      </div>
      <div className="Menu-item-line-separator" />
      <div className="Menu-item-line">
        <div className="Menu-item-line-label">Total</div>
        <div>
          <span className="Menu-item-value">7.0</span> / 35.0
        </div>
      </div>
    </div>
  );
}

export default function() {
  return (
    <div className="Menu">
      <Credits title="Credits" />
      <Credits title="Current selection" />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

export default function MarvApp({ header, content, app }) {
  return (
    <div className="MarvApp">
      {header && <header className="MarvApp__header" />}
      {React.createElement(content, { className: 'MarvApp__content' })}
      <div className="MarvApp__footer">
        {app.name}@{app.version}
      </div>
    </div>
  );
}

MarvApp.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.node.isRequired,
  header: PropTypes.node,
};

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  app: {
    display: 'flex',
    flex: { direction: 'column' },
    height: '100%',
  },

  header: {
    flex: 'none',
  },

  content: {
    flex: 1,
    overflow: 'auto',
  },

  footer: {
    color: '#aaa',
    flex: 'none',
    fontSize: '1.2rem',
    padding: ['1rem', '1.6rem'],
    textAlign: 'center',
  },
};

function MarvApp({ header, content, app, classes }) {
  return (
    <div className={classes.app}>
      {header && React.createElement(header, { className: classes.header })}
      {React.createElement(content, { className: classes.content })}
      <div className={classes.footer}>
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
  content: PropTypes.func.isRequired,
  header: PropTypes.func,
};

export default injectSheet(styles)(MarvApp);

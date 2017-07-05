import React from 'react';
import PropTypes from 'prop-types';

export default function UserHeader({ firstname, lastname }) {
  return (
    <div>
      {firstname} {lastname}
    </div>
  );
}

UserHeader.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

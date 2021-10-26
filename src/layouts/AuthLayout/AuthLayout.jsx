import { PropTypes } from 'prop-types';
import React from 'react';

const AuthLayout = ({ children }) => (
  <div>
    {children}
  </div>
);
export default AuthLayout;
AuthLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
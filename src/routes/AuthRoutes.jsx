import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <AuthLayout>
        <br />
        <Component {...matchProps} />
      </AuthLayout>
    )}
  />
);

export default AuthRoute;

AuthRoute.propTypes = {
  children: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  rest: PropTypes.objectOf.isRequired,
};


import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <PrivateLayout>
        <Component {...matchProps} />
      </PrivateLayout>
    )}
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  rest: PropTypes.objectOf.isRequired,
};
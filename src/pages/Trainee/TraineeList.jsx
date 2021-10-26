/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const TraineeList = (props) => {
  const { trainees } = props;
  return (
    <div>
      {
        trainees.map((trainee) => (
          <Link to={`/trainee/${trainee.id}`}>
            <div>{trainee.name}</div>
          </Link>
        ))
      }
    </div>
  );
};

export default TraineeList;

TraineeList.propTypes = {
  trainees: PropTypes.objectOf.isRequired,
};
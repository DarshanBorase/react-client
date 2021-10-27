import React from 'react';
import { AddDialog } from './components';
import trainees from './data/trainee';
import TraineeList from './TraineeList'

const Trainee = () => (
  <>
  <AddDialog />
  <TraineeList trainees={trainees} />
  </>
  );

export default Trainee;
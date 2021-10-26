import React from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ChildrenDemo,
  InputDemo, Login, NoMatch, TextFieldDemo, Trainee,
} from './pages';
import AuthRoutes from './routes/AuthRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import TraineeDetail from './pages/Trainee/TraineeDetail'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AuthRoutes exact path="/login" component={Login} />
          <PrivateRoutes exact path="/inputdemo" component={InputDemo} />
          <PrivateRoutes exact path="/childrendemo" component={ChildrenDemo} />
          <PrivateRoutes exact path="/textfielddemo" component={TextFieldDemo} />
          <PrivateRoutes exact path="/trainee" component={Trainee} />
          <PrivateRoutes exact path="/" component={Trainee} />
          <PrivateRoutes exact path="/trainee/:id" component={TraineeDetail} />
          <PrivateRoutes component={NoMatch} />
        </Switch>
      </BrowserRouter>
      <CssBaseline />
    </div>
  );
}

export default App;
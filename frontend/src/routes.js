import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import List from './pages/List';
import Details from './pages/Details';
import AddForm from './pages/AddForm';
import Forgot from './pages/Forgot';

function Routes() {
    return (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/list" exact component={List} />
          <Route path="/list/addNewPerson" component={AddForm} />
          <Route path="/list/:person/details" component={Details} />
          <Route path="/forgot" component={Forgot} />
        </Switch>
    );
}
export default Routes;
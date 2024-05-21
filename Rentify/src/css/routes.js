import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/properties" component={PropertyList} />
            <Route path="/add-property" component={PropertyForm} />
        </Switch>
    );
};

export default Routes;

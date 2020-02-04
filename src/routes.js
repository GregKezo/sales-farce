import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Components/Auth'
import Client from './Components/Client'
import Task from './Components/Task'
import Dashboard from './Components/containers/Dashboard'
import About from './Components/About'
import Profile from './Components/Profile'
import NewClientForm from './Components/NewClientForm'


export default(
  <Switch>
    <Route component={Dashboard} exact path='/' />
    <Route component={Auth} path='/login'/>
    <Route component={Client} path='/client/:clientid' />
    <Route component={Profile} path='/profile' />
    <Route component={NewClientForm} path='/new' />
    <Route component={Task} path='/task' />
    <Route component={About} path='/about' />

  </Switch>
)
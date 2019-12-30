import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Auth from './Components/Auth'
import Chart from './Components/Chart'
import Client from './Components/Client'
import Portfolio from './Components/Portfolio'
import Task from './Components/Task'
import Dashboard from './Components/containers/Dashboard'


export default(
  <Switch>
    <Route component={Dashboard} exact path='/' />
    <Route component={Chart} path='/chart' />
    <Route component={Client} path='/client' />
    <Route component={Portfolio} path='/portfolio' />
    <Route component={Task} path='/task' />
    {/* <Route component={} path='/' /> */}
  </Switch>
)
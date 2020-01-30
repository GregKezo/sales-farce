import React from 'react';
import routes from './routes'
import './App.css';
import Header from './Components/Header'
import {withRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

function App(props) {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);

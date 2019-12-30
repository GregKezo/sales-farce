import React from 'react';
import routes from './routes'
import './App.css';
import Header from './Components/Header'
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);

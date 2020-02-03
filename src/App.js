import React from 'react';
import routes from './routes'
import './App.css';
import Header from './Components/Header'
import {withRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey, lightGreen } from '@material-ui/core/colors/'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lightGreen,
  },
});


function App(props) {
  return (
    <div className="App">
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          {routes}
        </ThemeProvider>
    </div>
  );
}

export default withRouter(App);

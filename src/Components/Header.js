import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { getUser, logoutUser, login } from '../redux/reducers/userReducer'
import { getClients, logoutClients } from '../redux/reducers/clientReducer'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Hidden} from '@material-ui/core';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));





const Header = (props) => {

  const classes = useStyles();

  const logout = e => {
      e.preventDefault()
      props.logoutUser()
      props.logoutClients()
      return props.history.push('/')
  }

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="secondary" 
              size="large"
              onClick={ e => props.history.push('/')}
              >
              <BusinessSharpIcon />
            </IconButton>
          <Hidden xsDown>
            <Typography variant="h6" className={classes.title}
              onClick={e=> props.history.push('/')}>
              Sales Farce
            </Typography>
          </Hidden> 
          <Button color="inherit" onClick={ e => props.history.push('/about')}>About</Button>
          <div>
          {props.user.user.id
            ?<>
              {/* <div><Link to='/profile'>Profile</Link></div> */}
              
              <div><Button color="inherit" onClick={e => logout(e)}>logout</Button></div>
            </>
        
            :<>
            
            </>}
        </div>
        </Toolbar>
      </AppBar>
    </div>




  )
}

const mapStateToProps = reduxState => {
  return reduxState
}


export default withRouter(connect(mapStateToProps, {getUser, logoutUser, getClients, logoutClients, login})(Header))


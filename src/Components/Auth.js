import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUser, login, signup } from '../redux/reducers/userReducer'
import { getClients } from '../redux/reducers/clientReducer'
import {TextField, Paper, Button, Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const Auth = (props) => {
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')
  
  const resetInputs = () => {
    setEmailInput('')
    setPassInput('')
  }


  const loginUser =  async (e) => {
    e.preventDefault()
    await props.login(emailInput, passInput)
    await props.getClients()
    resetInputs()
  }

  const register = async (e) => {
    e.preventDefault()
    await props.signup(emailInput, passInput)
    resetInputs()
  }

const { user } = props.user
if (user.loggedIn) return <Redirect to='/'/>
  return(
    <Grid container className='Auth'>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <Paper elevation={3} className='auth_container'>
          <Typography variant="h6" color="textPrimary" >
              Welcome to Sales Farce
          </Typography> 

          <div className="input-area">
            <TextField required 
              id="standard-required" 
              label="Email" 
              defaultValue="Email" 
              type='text'
              value={emailInput}
              onChange={ e => setEmailInput(e.target.value)} />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={passInput}
              maxLength="20"
              onChange={ e => setPassInput(e.target.value)} />
          </div>
          <div className="button-area">
              <Button variant="contained" color="secondary" onClick={e => loginUser(e)}>
                Login
              </Button>
              <Button variant="contained" color="secondary" onClick={e => register(e)}>
                Register
              </Button>
          </div>
        </Paper>  
      </Grid>
    </Grid>
  )
}
const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {getUser, signup, getClients, login})(Auth))
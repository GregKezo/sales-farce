import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { getUser } from '../redux/reducers/userReducer'

const Auth = (props) => {
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')
  
  const login = () => {
    axios
      .post('/auth/login', {email:emailInput, password: passInput})
      .then( res => {
        console.log(res.data)
        props.getUser(res.data)
      })
      .catch(err => console.log(err))
    
  }

  const register = () => {
    axios
      .post('/auth/register', {email: emailInput, password: passInput})
      .then( res => {
        console.log(res.data)
        props.getUser(res.data)
      })
      .catch( err => console.log(err))
  }

  return(
    <div className='auth-box'>
      <input
        type='text'
        placeholder='Email'
        value={emailInput}
        onChange={ e => setEmailInput(e.target.value)} />
      <input
        type='password'
        placeholder='Password'
        value={passInput}
        onChange={ e => setPassInput(e.target.value)} />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>

    </div>
  )
}

export default withRouter(connect(null, {getUser} )(Auth))
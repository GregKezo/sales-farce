import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getUser, login, signup } from '../redux/reducers/userReducer'
import { getClients } from '../redux/reducers/clientReducer'

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

//   const logout = e => {
//     e.preventDefault()
//     props.logoutUser()
//     props.logoutClients()
//     resetInputs()
// }

const { user } = props.user
if (user.loggedIn) return <Redirect to='/'/>
  return(
    <div className='auth-box'>
      <div className="input-fields">
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
      </div>
      <div className="button-area">
        <button onClick={e => loginUser(e)}>Login</button>
        <button onClick={e => register(e)}>Register</button>
      </div>
    </div>
  )
}
const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {getUser, signup, getClients, login})(Auth))
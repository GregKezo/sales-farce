import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import { getUser, logoutUser } from '../redux/reducers/userReducer'


const Header = (props) => {
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')
  
  const resetInputs = () => {
    setEmailInput('')
    setPassInput('')
  }

  const login = () => {
    axios
      .post('/auth/login', {email:emailInput, password: passInput})
      .then( res => {
        console.log(res.data)
        props.getUser(res.data)
      })
      .catch(err => console.log(err))
    // resetInputs()
  }

  const logout = () => {
    axios
      .post('auth/logout')
      .then( res => {
        console.log(res.data)
        props.logoutUser()
      })
      .catch( err => console.log(err) )
      resetInputs()
  }


  return(
    <section className="header">
      <div className="logo">
        logo
      </div>
      <div className="link-area">
        {props.user.id 
        ? <>
            clients 
            {/* tasks */}
            analytics
            profile
            about
          </> 
        : <>about</>}
      </div>
      <div>
        {props.user.id
          ?<>
            <p>{props.user.first_name} {props.user.last_name}</p>
            <button onClick={logout}>logout</button>
          </>
      
          :<>
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
          </>}
      </div>
    </section>
  )
}

const mapStateToProps = reduxState => {
  return reduxState
}


export default withRouter(connect(mapStateToProps, {getUser, logoutUser})(Header))


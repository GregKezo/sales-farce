import React, {useState} from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { getUser, logoutUser, login } from '../redux/reducers/userReducer'
import { getClients, logoutClients } from '../redux/reducers/clientReducer'


const Header = (props) => {
  // const [emailInput, setEmailInput] = useState('')
  // const [passInput, setPassInput] = useState('')
  
  // const resetInputs = () => {
  //   setEmailInput('')
  //   setPassInput('')
  // }

  // const loginUser =  async (e) => {
  //   e.preventDefault()
  //   await props.login(emailInput, passInput)
  //   await props.getClients()
  // }

  const logout = e => {
      e.preventDefault()
      props.logoutUser()
      props.logoutClients()
      // resetInputs()
      console.log(props)
      return props.history.push('/')
  }

  // if(!props.user.user) return props.user.user = {}

  return(
    <section className="header">
      <div className="logo">
        <Link to='/'>Sales Farce</Link>
      </div>
      <div className="link-area">
       <Link to='/about'>About</Link>
      </div>
      <div>
        {props.user.user.id
          ?<>
            <div><Link to='/profile'>Profile</Link></div>
            
            <div><button className="button" onClick={e => logout(e)}>logout</button></div>
          </>
      
          :<>
           
          </>}
      </div>
    </section>
  )
}

const mapStateToProps = reduxState => {
  return reduxState
}


export default withRouter(connect(mapStateToProps, {getUser, logoutUser, getClients, logoutClients, login})(Header))


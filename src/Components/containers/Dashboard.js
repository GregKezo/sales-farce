import React, {useState, useEffect} from 'react'
import Auth from '../Auth'
import {withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ClientCard from './ClientCard'
import { getUser } from '../../redux/reducers/userReducer'
import { getClients } from '../../redux/reducers/clientReducer'


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // user: {},
      // clients: []
    }
  }  

  componentDidMount() {
    // console.log(this.props)
    this.props.getUser()
    this.props.getClients()

  }
  
  render() {
    const { user, error, redirect } = this.props.user
    if (error || redirect) return <Redirect to='/login' />
    if (!Object.keys(user).length) return <div>Loading</div>
    
    let mappedClients = this.props.client.clients.map( (ele, i) => {
      return <ClientCard key={ele.id} ele={ele} />
    })

  return(
    
    <div className="dashboard">
      {mappedClients}
      {/* <Auth /> */}
    </div>
  )
  }
}



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {getUser, getClients})(Dashboard))
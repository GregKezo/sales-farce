import React, {useState, useEffect} from 'react'
import Auth from '../Auth'
import {withRouter, Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ClientCard from './ClientCard'
import { getUser } from '../../redux/reducers/userReducer'
import { getClients } from '../../redux/reducers/clientReducer'
import Grid from '@material-ui/core/Grid'

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
    
    let mappedClients = this.props.client.clients.map( (ele) => {
      return <ClientCard key={ele.id} ele={ele} />
    })

  return(
    
    <div className="dashboard">
      <Link to='/new'>Add New</Link>
        <Grid container spacing={1} xs={12} sm={8} md={6} lg={4} xl={4}>
          {mappedClients}
        </Grid>

    </div>
  )
  }
}



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {getUser, getClients})(Dashboard))
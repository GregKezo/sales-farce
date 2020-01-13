import React, {useState, useEffect} from 'react'
import Auth from '../Auth'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ClientCard from './ClientCard'


const Dashboard = (props) => {
  const { user } = props.user
  const { clients } = props.client 

  let mappedClients = clients.map( (ele, i) => {
    return <ClientCard key={i} ele={ele} />
  })

  return(
    
    <div className="dashboard">
      {mappedClients}
      {/* <Auth /> */}

    </div>
  )
}



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Dashboard))
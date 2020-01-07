import React, {useState, useEffect} from 'react'
import Auth from '../Auth'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


const Dashboard = (props) => {
  const { user } = props.user
  const { clients } = props.client 



  return(
    <div className="dashboard">
      <br/>
      <br/>
      <br/>
      Dashboard
      {/* <Auth /> */}

    </div>
  )
}



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Dashboard))
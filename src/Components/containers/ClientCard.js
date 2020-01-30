import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


const ClientCard = (props) => {

  return(
    <div className="client-card">



      <div className="client-name">
        <Link to={`/client/${props.ele.id}`} style={{textDecoration:'none'}}>
          {props.ele.first_name} {props.ele.last_name}
        </Link>
      </div>



      <div className="client-info">
          <div className="info">Email: {props.ele.email}</div>
          <div className="info">Phone: {props.ele.phone_number}</div>
      
      </div>
      
      <div className="more">
        <Link to={`/client/${props.ele.id}`} style={{textDecoration:'none'}}>
          More Info
        </Link>
      </div>
    </div>
  )

}


const mapStateToProps = reduxState => {
  return reduxState.client
}

export default withRouter(connect(mapStateToProps, {})(ClientCard))
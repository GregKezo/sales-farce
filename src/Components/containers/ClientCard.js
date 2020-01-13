import React, {useState} from 'react'
// import {Link, withRouter} from 'react'
// import {connect} from 'react-redux'


const ClientCard = (props) => {
  // let {ele} = props.ele
  return(
    <div className="client-card">
      <div className="client-name">{props.ele.first_name} {props.ele.last_name}</div>
      <div className="client-info">
          <div>{props.ele.email}</div>
          <div>{props.ele.phone_number}</div>
      </div>
      
      
    </div>
  )

}


// const mapStateToProps = reduxState => {
//   return reduxState
// }

export default ClientCard
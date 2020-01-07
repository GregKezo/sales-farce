import React, {useState} from 'react'
import {Link, withRouter} from 'react'
import {connect} from 'react-redux'


const ClientCard = (props) => {
  return(
    <div>
      
    </div>
  )

}


const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(ClientCard))
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Client = (props) => {
  console.log(props)
  const [correctClient] = props.client.clients.filter( ele => +ele.id === +props.match.params.clientid)
 
  return(
    <div className="auth-box">
      Client
      <p>{correctClient.first_name}</p>
      TODO: <br/>
        -display all client information in helpful form format <br/>
        -ToggleEdit to flip between display and form <br/>
        -bring in Formik(?) to handle input fields <br/>
        -update DB with all the values in the input fields <br/>
        -make it pretty
    </div>
  )
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Client))
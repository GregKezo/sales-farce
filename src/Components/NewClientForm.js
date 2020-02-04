import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import {Paper, TextField, Button} from '@material-ui/core/'

class NewClientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleInput = e => {
    let { name, value } = e.target
    this.setState({[name] : value})
  }
  


  handleSave = async (e) =>  {
    const body = this.state
    await axios.post(`/api/client/`, body)
      .then( res => {
        alert('Added contact!')
      })
      .catch( err => console.log(err))

      this.props.history.push('/')

  }



render() {
  return(
    <Paper className="auth-box">
     <div className="info-display edit">
     <Link to ='/'>
            <button className="button">
              Cancel
            </button>
          </Link>
      <div>
        <TextField
          label="First name"
          variant="filled"
          name="new_first_name" 
          required 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Last name"
          variant="filled"
          name="new_last_name" 
          required
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div> 
        <TextField 
          label="Client of"
          variant="filled"
          name="new_client_of" 
          required
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Phone number"
          variant="filled"
          name="new_phone_number" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Email"
          required
          variant="filled"
          name="new_email" 
          type="email"
          required
          onChange={ e => this.handleInput(e) } 
          />
      </div> 
      <div>
        <TextField 
          label="Notes"
          variant="filled"
          name="new_notes" 
          multiline
          rows="6"
          fullWidth
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Street address"
          variant="filled"
          name="new_street_address" 
          onChange={ e => this.handleInput(e) }  
          />
      </div> 
      <div>
        <TextField 
          label="City"
          variant="filled"
          name="new_city" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="State"
          variant="filled"
          name="new_state" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Zip code"
          variant="filled"
          name="new_zip_code" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Country"
          variant="filled"
          name="new_country" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Birth date"
          variant="filled"
          name="new_birthday" 
          type="date"
          onChange={ e => this.handleInput(e) } 
          />
      </div> 




          <button className="button" onClick={ e => this.handleSave(e)}>Save</button>
          
      </div>
    </Paper>
    ) 
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(NewClientForm))
import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
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
        // alert('Added contact!')
      })
      .catch( err => console.log(err))

      this.props.history.push('/')

  }



render() {
  return(
    <Paper className="auth-box">
     <div className="info-display edit">
     
     <Button 
        className="spacing"
        onClick={ e => this.props.history.push('/')} 
        variant="contained"
        color="secondary">
          Cancel
      </Button>
          
      <div>
        <TextField
          label="First name"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="first_name" 
          required 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Last name"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="last_name" 
          required
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div> 
        <TextField 
          label="Client of"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="client_of" 
          required
          onChange={ e => this.handleInput(e) } 
          />
      </div> 
      
      
      {/* make ^^^^^^^^^^^^^^^
      this a drop
       down menu with 
       names JOIN */}
      
     
      <div>
        <TextField 
          label="Phone number"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="phone_number" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Email"
          required
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="email" 
          type="email"
          onChange={ e => this.handleInput(e) } 
          />
      </div> 
      <div>
        <TextField 
          label="Notes"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="notes" 
          multiline
          rows="6"
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Street address"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="street_address" 
          onChange={ e => this.handleInput(e) }  
          />
      </div> 
      <div>
        <TextField 
          label="City"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="city" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="State"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="state" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Zip code"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="zip_code" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Country"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="country" 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Birth date"
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="birthday" 
          type="date"
          onChange={ e => this.handleInput(e) } 
          />
      </div> 




          <Button 
            className="spacing" 
            onClick={ e => this.handleSave(e)}
            variant="contained"
            color="secondary">
              Save
          </Button>
          
      </div>
    </Paper>
    ) 
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(NewClientForm))
import React  from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import axios from 'axios'
import {Paper, TextField, Button} from '@material-ui/core/'



class Client extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  handleInput = e => {
    let { name, value } = e.target
    this.setState({[name] : value})
  }
  
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit})
  }

  handleSave = async (e) =>  {
    const body = this.state

    await axios.put(`/api/client/${this.props.match.params.clientid}`, body)
      .then( res => {
        console.log(res.data)
      })
      .catch( err => console.log(err))
    this.toggleEdit()
    this.props.history.push('/')
  }

  handleDelete = async (e) => {
   await axios.delete(`/api/client/${this.props.match.params.clientid}`)
      .then( res => res.data )
      .catch( err => console.log(err) )
     
    this.props.history.push('/')
  }


render() {
  const [correctClient] = this.props.client.clients.filter( ele => +ele.id === +this.props.match.params.clientid)

  return(
    <div className="auth-box">
      <Paper>


      <Button 
        className="spacing"
        onClick={ () => this.toggleEdit() } 
        variant="contained"
        color="secondary">
          {!this.state.edit ? <span>Edit</span> : <span>Cancel</span>}
      </Button>


      {!this.state.edit
        ? <div className="info-display edit">
        <div>
          First Name: {correctClient.first_name}
        </div>
        <div>
          Last Name: {correctClient.last_name}
        </div>  
        <div>
          Client of: {correctClient.client_of} 
          {/* make join to display names of users */}
        </div>
        <div>
          Phone: {correctClient.phone_number}
        </div>
        <div>
          Email: {correctClient.email}
        </div>
        <div>
          Notes: {correctClient.notes}
        </div>
        <div>
          Street Address: {correctClient.street_address}
        </div>
        <div>
          City: {correctClient.city}
        </div>
        <div>
          Zip Code: {correctClient.zip_code}
        </div>
        <div>
          State: {correctClient.state}
        </div>
        <div>
          Country: {correctClient.country}
        </div>
        <div>
          Birthday: {correctClient.birthday}
        </div>

      </div>
      
      : <div className="info-display edit">
      <div>
         <TextField
            defaultValue={correctClient.first_name}
            label="First name"
            style={{minWidth: 450, margin: 10}}
            variant="filled"
            name="new_first_name"  
            placeholder={correctClient.first_name} 
            onChange={ e => this.handleInput(e) } 
            />
      </div>
      <div>
        <TextField 
          label="Last name"
          defaultValue={`${correctClient.last_name}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_last_name" 
          placeholder={correctClient.last_name} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div> 
        <TextField 
          label="Client of"
          defaultValue={`${correctClient.client_of}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_client_of" 
          placeholder={correctClient.client_of}  
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Phone number"
          defaultValue={`${correctClient.phone_number}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_phone_number" 
          placeholder={correctClient.phone_number} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Email"
          defaultValue={`${correctClient.email}`}
          required
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_email" 
          type="email"
          placeholder={correctClient.email} 
          onChange={ e => this.handleInput(e) } 
          />
      </div> 
      <div>
        <TextField 
          label="Notes"
          defaultValue={`${correctClient.notes}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_notes" 
          multiline
          rows="6"
          placeholder={correctClient.notes} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Street address"
          defaultValue={`${correctClient.street_address}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_street_address" 
          placeholder={correctClient.street_address}
          onChange={ e => this.handleInput(e) }  
          />
      </div> 
      <div>
        <TextField 
          label="City"
          defaultValue={`${correctClient.city}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_city" 
          placeholder={correctClient.city} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="State"
          defaultValue={`${correctClient.state}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_state" 
          placeholder={correctClient.state} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Zip code"
          defaultValue={`${correctClient.zip_code}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_zip_code" 
          placeholder={correctClient.zip_code} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Country"
          defaultValue={`${correctClient.country}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_country" 
          placeholder={correctClient.country} 
          onChange={ e => this.handleInput(e) } 
          />
      </div>
      <div>
        <TextField 
          label="Birth date"
          defaultValue={`${correctClient.birthday}`}
          style={{minWidth: 450, margin: 10}}
          variant="filled"
          name="new_birthday" 
          type="date"
          placeholder={correctClient.birthday} 
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


          <Button 
            className="spacing" 
            onClick={ e => this.handleDelete(e)}
            variant="contained"
            color="#f44336">
              Delete
          </Button>

    </div>
    
    
    }
        



      </Paper>     
    </div>
  )
}
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Client))
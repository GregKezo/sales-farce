import React  from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'

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
      Client
      <p>{correctClient.first_name}</p>
      TODO: <br/>
        -display all client information in helpful form format <br/>
        -ToggleEdit to flip between display and form <br/>
        -bring in Formik(?) to handle input fields <br/>
        -update DB with all the values in the input fields <br/>
        -make it pretty

      <button className='button' onClick={ () => this.toggleEdit()}>
        {!this.state.edit ? <span>Edit</span> : <span>Cancel</span>}
      </button>

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
          Birthday {correctClient.birthday}
        </div>

      </div>
      
      : <div className="info-display edit">
      <div>
        First Name: <input name="new_first_name" 
                            type="text" 
                            placeholder={correctClient.first_name} 
                            onChange={ e => this.handleInput(e) } 
                            />
      </div>
      <div>
        Last Name: <input name="new_last_name" 
                          type="text" 
                          placeholder={correctClient.last_name} 
                          onChange={ e => this.handleInput(e) } 
                          />
      </div>
      <div> 
        Client of: <input name="new_client_of" 
                          type="text" 
                          placeholder={correctClient.client_of}  
                          onChange={ e => this.handleInput(e) } 
                          />
      </div>
      <div>
        Phone: <input name="new_phone_number" 
                      type="text" 
                      placeholder={correctClient.phone_number} 
                      onChange={ e => this.handleInput(e) } 
                      />
      </div>
      <div>
        Email: <input name="new_email" 
                      type="text" 
                      placeholder={correctClient.email} 
                      onChange={ e => this.handleInput(e) } 
                      />
      </div> 
      <div>
        Notes: <input name="new_notes" 
                      type="text" 
                      placeholder={correctClient.notes} 
                      onChange={ e => this.handleInput(e) } 
                      />
      </div>
      <div>
        Street Address: <input name="new_street_address" 
                              type="text" 
                              placeholder={correctClient.street_address}
                              onChange={ e => this.handleInput(e) }  
                              />
      </div> 
      <div>
        City: <input name="new_city" 
                      type="text" 
                      placeholder={correctClient.city} 
                      onChange={ e => this.handleInput(e) } 
                      />
      </div>
      <div>
        Zip Code: <input name="new_zip_code" 
                          type="text" 
                          placeholder={correctClient.zip_code} 
                          onChange={ e => this.handleInput(e) } 
                          />
      </div>
      <div>
        State: <input name="new_state" 
                      type="text" 
                      placeholder={correctClient.state} 
                      onChange={ e => this.handleInput(e) } 
                      />
      </div>
      <div>
        Country: <input name="new_country" 
                        type="text" 
                        placeholder={correctClient.country} 
                        onChange={ e => this.handleInput(e) } 
                        />
      </div>
      <div>
        Birthday <input name="new_birthday" 
                        type="text" 
                        placeholder={correctClient.birthday} 
                        onChange={ e => this.handleInput(e) } 
                        />
      </div> 

        <button className="button" onClick={ e => this.handleSave(e)}>Save</button>
        <button className="button" onClick={ e => this.handleDelete(e)}>Delete</button>

    </div>
    
    
    }
        



        
    </div>
  )
}
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(Client))
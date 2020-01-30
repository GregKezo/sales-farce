import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'

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
  console.log(this.props)
  return(
    <div className="auth-box">
     <div className="info-display edit">
        <div>
          First Name: <input name="first_name" 
                              type="text" 
                              placeholder="First name"
                              required
                              onChange={ e => this.handleInput(e) } 
                              />
        </div>
        <div>
          Last Name: <input name="last_name" 
                            type="text" 
                            placeholder="Last name"
                           required
                            onChange={ e => this.handleInput(e) } 
                            />
        </div>
        <div>
          Phone: <input name="phone_number" 
                        type="text" 
                        placeholder="Phone number" 
                        required
                        onChange={ e => this.handleInput(e) } 
                        />
        </div>
        <div>
          Email: <input name="email" 
                        type="text" 
                        placeholder="Email"
                        required
                        onChange={ e => this.handleInput(e) } 
                        />
        </div> 
        <div>
          Notes: <input name="notes" 
                        type="text" 
                        placeholder="Notes"
                        onChange={ e => this.handleInput(e) } 
                        />
        </div>
        <div>
          Street Address: <input name="street_address" 
                                type="text" 
                                placeholder="Street address"
                                onChange={ e => this.handleInput(e) }  
                                />
        </div> 
        <div>
          City: <input name="city" 
                        type="text" 
                        placeholder="City"
                        onChange={ e => this.handleInput(e) } 
                        />
        </div>
        <div>
          Zip Code: <input name="zip_code" 
                            type="text" 
                            placeholder="Zip code" 
                            onChange={ e => this.handleInput(e) } 
                            />
        </div>
        <div>
          State: <input name="state" 
                        type="text" 
                        placeholder="State"
                        onChange={ e => this.handleInput(e) } 
                        />
        </div>
        <div>
          Country: <input name="country" 
                          type="text" 
                          placeholder="Country"
                          onChange={ e => this.handleInput(e) } 
                          />
        </div>
        <div>
          Birthday <input name="birthday" 
                          type="text" 
                          placeholder="Birthday" 
                          onChange={ e => this.handleInput(e) } 
                          />
        </div> 

          <button className="button" onClick={ e => this.handleSave(e)}>Save</button>
          <Link to ='/'>
            <button className="button">
              Cancel
            </button>
          </Link>
      </div>
    </div>
    ) 
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {})(NewClientForm))
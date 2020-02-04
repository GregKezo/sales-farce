import React, { Component }  from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {Grid, TextField, Button} from '@material-ui/core/'

let publishableKey = 'pk_test_ubicab0NdjoIHoCJCJts0e6y00c1XlFoxw' //stripe publishable key


class About extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0
    }
  }

  // onOpened=()=>{
  //   console.log('this is opened')
  // }

  // onClosed=()=>{
  //   console.log('this is closed')
  // }

  onToken = (token) => {
    // console.log(token)
    let { amount } = this.state
    amount /= 100
    // console.log(amount)
    token.card = void 0
    axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
      // console.log(res)
      alert(`Congratulations you paid Greg ${amount}!`)
    })
  }


  

  render() {

    return(

      <Grid container spacing={2}>
        <Grid item  xs={12} sm={6} md={4} lg={3} >
          <img 
            src="https://sales-farce.s3-us-west-1.amazonaws.com/geo-metro.jpeg" 
            alt="geo metro"
            className='car'
            />
          Trying to save up for this bad boy
        </Grid>




        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
            <StripeCheckout
              name='Donation' //header
              description='I very much appreciate this!' 
              stripeKey={publishableKey} 
              token={this.onToken} 
              amount={this.state.amount}
              currency="USD" 
              // image={imageUrl} // the pop-in header image (default none)
              // ComponentClass="div" //initial default button styling on block scope (defaults to span)
              panelLabel="Submit Payment" //text on the submit button
              locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
              opened={this.onOpened} //fires cb when stripe is opened
              closed={this.onClosed} //fires cb when stripe is closed
              allowRememberMe // "Remember Me" option (default true)
              billingAddress={false}
              // shippingAddress //you can collect their address
              zipCode={false}
            >
              {/* <button>Checkout</button> */}
            </StripeCheckout>
            <TextField 
              variant='filled'
              value={this.state.amount}
              type='number'
              onChange={e=>this.setState({amount:+e.target.value})}/>
          </div>
        </Grid>

      </Grid>
    )
}

}

export default About

const imageUrl = "https://sales-farce.s3-us-west-1.amazonaws.com/squid.jpg"
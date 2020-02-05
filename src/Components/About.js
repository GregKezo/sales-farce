import React, { Component }  from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {Grid, TextField} from '@material-ui/core/'

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

          <Grid item  xs={12} sm={8} md={6} lg={5} >
            <img 
              src="https://sales-farce.s3-us-west-1.amazonaws.com/geo-metro.jpeg" 
              alt="geo metro"
              className='car'
              />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={7}>
            Trying to save up for this bad boy.  Lorem ipsum dolor amet vaporware shabby chic vinyl, single-origin coffee tumblr kogi sustainable tote bag. Raw denim ugh fam, tofu cardigan letterpress selvage authentic selfies farm-to-table yr art party. Actually bicycle rights fixie fashion axe lyft pabst post-ironic. PBR&B prism blog listicle jianbing. Kickstarter vice man braid shoreditch. Chillwave waistcoat biodiesel VHS, ramps gluten-free adaptogen hot chicken vape heirloom pickled keffiyeh. Sriracha leggings blue bottle skateboard slow-carb thundercats air plant unicorn snackwave chia aesthetic venmo trust fund.
            </Grid>



        <Grid item xs={12} sm={12} md={6} lg={4}>
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

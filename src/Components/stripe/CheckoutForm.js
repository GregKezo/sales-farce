// import React, {Component} from 'react'
// import {CardElement, injectStripe} from 'react-stripe-elements'
// import axios from 'axios'

// class CheckoutForm extends Component {
//   constructor(props){
//     super(props)
//     this.state = {complete: false}
//     this.submit = this.submit.bind(this)
//   }

//   async submit(e) {
//     let {token} = await this.props.stripe.createToken({name: 'Name'})
//     // let response = await fetch('/charge', {
//     //   method: "POST",
//     //   headers: {"Content-Type": "text/plain"},
//     //   body: token.id
//     // })

//     // if (response.ok) this.setState({complete: true}) 
    
//     axios
//       .post('/charge', {id: token.id})
//       .then( res => console.log(res.data))
//       .catch( err => console.log(err))

//   }


//   render() {
//     if (this.state.complete) return <h1>Thank you!</h1>
//     return(
//       <div className="checkout">
//         CheckoutForm
//         {/* <CardElement /> */}
//         <button onClick={this.submit}>Donate</button>
//       </div>
//     )
//   }
// }

// export default injectStripe(CheckoutForm)
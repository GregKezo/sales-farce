import React, { Component }  from 'react'
// import {Elements, StripeProvider} from 'react-stripe-elements'
// import CheckoutForm from './CheckoutForm'

// const STRIPE_API_KEY = process.env.REACT_APP_STRIPE_API_KEY
// const stripe = require('stripe')(STRIPE_API_KEY)

import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

let publishableKey = 'pk_test_ubicab0NdjoIHoCJCJts0e6y00c1XlFoxw' //stripe publishable key


class About extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0
    }
  }

  onOpened=()=>{
    console.log('this is opened')
  }

  onClosed=()=>{
    console.log('this is closed')
  }

  onToken = (token) => {
    console.log(token)
    let { amount } = this.state
    amount /= 100
    console.log(amount)
    token.card = void 0
    axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
      console.log(res)
      alert(`Congratulations you paid Greg ${amount}!`)
    })
  }


  

  render() {

    return(
    //   <StripeProvider apiKey={STRIPE_API_KEY}>
    //     <div className="about-page">
    //       About stuff
    //       <div>
    //         <Elements>
    //           import stripe here
    //           <CheckoutForm />
    //         </Elements>
    //       </div>
    //     </div>
    //   </StripeProvider>
    // )
  // }
      <div className="auth-box">
        <div className="bucket-stuff">
          trying to save up for this bad boy
          <img src="https://sales-farce.s3-us-west-1.amazonaws.com/geo-metro.jpeg" alt="geo metro"/>
        </div>




        <div>
          <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
            <StripeCheckout
              name='Class' //header
              image={imageUrl}
              description='This is stuff going beneath the header' //subtitle - beneath header
              stripeKey={publishableKey} //public key not secret key
              token={this.onToken} //fires the call back
              amount={this.state.amount} //this will be in cents
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
            <input value={this.state.amount}
            type='number'
            onChange={e=>this.setState({amount:+e.target.value})}/>
          </div>
        </div>

      </div>
    )
}

}

export default About

const imageUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBoYGBgYGBoaGhoaGBgYGhoYGxgaHSggGholHRcYIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGisdHR0rLS0tKy0rKystLS0tLS0tLS0tKy0tLS0tLS0tLS03LS0tLS0tLS0tLS0tNzctKystK//AABEIAQAAxQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgEABwj/xAA3EAABAgQEAwcDBAIDAQEBAAABAhEAAyExBBJBUQVhcQYigZGhsfATwdEyQuHxI1IHFHJiwkP/xAAZAQEBAQEBAQAAAAAAAAAAAAABAgADBAX/xAAhEQEBAAIDAQEAAgMAAAAAAAAAAQIREiExQQMTUQRhcf/aAAwDAQACEQMRAD8A+LGOKHrEQYkVQM6I6pX4iAg0mSpRZKSTyEaMEpLxPC4VayAlJNQKDnGg4d2dN5lOVvWNRhMKAwCWDaRjIT4ZgDLQEPQC/PpDisEK9/q8WR4eUpzGz15RW45QAcAvUN94Na7XyUXEezaFd5INXqn8GM/i+CzEOwzAbCvlGtGKIHOLBCyQMwHwRhp8/wATh1BNUkMr/wDAP2haVtv6R9MHDZZLmoJDh6hgzgxW8b4OJZCkpzSyLs+VtCRpW8KdMMpoEuLLiGCyl0il+kCw2EpnWWFxurp+YwLS5D19YaBCUsG6a+MMSZBVZBYfpbQeMDncPnGoQSOVYoEpswwGDTMOoXSodQfeGsLwictJWlBKRru228FJEKjmcw8ng+IIcSJpH/hX3ECHD5uf6f015/8AXKX8ozFFCCIEanhHYLEzWKx9If8A1Ut0eNjgP+K5AS82dMVR2GVA9iYuYWjlI+SGItH25X/G+ASAPpzCecxX2gkz/jLAEDIlZUaMJijXa9of46JlK+HplvHI++j/AIbwjVmTRyBf1j0cuUU+F/RAEeTIFIaMolmDiCysGoVZ6W8ouYp2c4JwZC+8t2pcULxp8Jg5aHShg/v+YTTMyIAFKawXDLJrQWjnb8dZDsrCEqrT1EW8vKkVT6s/nFfM46mWnQq3tpyjNTOLrJJfeg9oGrVz+LJFApgaEEP5xTYycSovUMWIitwqVLJf1+Ug2JmKCRWtjasbZkF4VIC1ZdN4v8RhkJA71RQ1+OIrOC4Qq7wLNrD+Pw1CAp2Dvty5RXwUoZQzUVUF2+Wi0wC9Ce6Qbc7/AIjO4bF5Lh6vUH3EOS+JilSOW2+lIZRYLxLhiArMAC4tmDPz5RUq4cSp2vq4NtAHi14h3kHOoDRyKsdfvCuAlJQ5RQD9xueca3sa6LfQUai3MRoOx/A5syaP8RUm5UaJF6nyhdLzACU5lZgkHmWalrkR9k4FgfoSUouWdRepPh5Rcjj+mfGMdj+xc0qJQmWQajNYPegVWLzgXZ8SEfUnZSpALMGSOjk1eNMmzxVdpJ2WQoC5IHg8W8/8mV6Z3EcRM5TjL3VFiKskU9YQVhk5ithmNX1ppE8GkJlg6qJLeggyEpIqWJNuW7xep66Y7k08VBnHi/8AEBOJLgA9BDk3DlqQoMKQsGrPHTF2/Pj3tdyQMtbteOzsSlBSpAKSLvWvKFzLoCLeYhXEZkDusef8QZWfXLV2v5PaIful15H7R6MlKxQNFEAjePR5b+eO3WZ5Pj09EyWkAotrd4Y4VMCyytPOHcTiRoCebQLCsSTlY86F4iZ5fXW4Y76qeLWTQCntEJWMYZXpA8SrQ2+VhN/nKOa6ZnLdyXME4dJBIeF5YPzWHZCGfzhBqYUpdrtd4hIkhT5tngRVmLdP6g2MxGQeFh7QK0tuz+Jy2DB2c1fw09YcxsmXUpS13Lu+7xlMLxMDlt13iS+IKmZtgCWOvXfpFy2udiUyZLzAEg1YOWIfV9Y4JQCgA7HXWKnEY6bipyApIDkJypSwbXxjU4jKmd3AGCUhOWtQ7n19IqyRpanxPDky2Fi4KjrCPD+F4kqy5QlIu9SeTRsOH4JQlPMYKJDVcmu3TSL5M1CEUagpsRzbSI9p3r1W9npGefJlAMAoE9R3n9BH1JEoAADSMF2Mk/5isndvKN4V7R3xmo8X65bqC3cAWLv9oz/a2b+lOjOfWL9cyw5jxjL9q5n+QtokesXI54qmZLLJS21tInNQsFwnod9HaPKUSRVqMOQ5wULUnfk32MNrriJgpxsqldBflFl9N2ZL035bwhJdSgTU0rF1hE+XpDLYomiQrKUZWfx8jvAzg15e84bUCLlQItbX+4sMNZ30if0z6VjGExqZYLKSSd8p+0ejYcSkIJBKRrp0jkc9q0/N85S0sn6atRUg0PjEsEDmJUMpV6w0VFSorcTj2nZQRTyfaPPM7Xpy/OYmp6IjMwBZwks1Sx94s8Fhc0wA7E+kCxfEJiQTlOXQBrdIYlSJJCm09YblznAbZ4Rm4gKUWBBJ2gmHwq8wJBUOWjGvhCNrJCC9oYxWDK2YOW6Q1gMKaZhbnWLrD4alAdid+QiVbZvD9mysF3Ai64ZwEFJC0OAcrvUNcvFjlKRs5ruQP7EHTjglg5qa7OReNyTpV4vhEqQhS5ctedsoJ57c4U7O4IoSAoDORTUgVeL6fxIEMQMwUDyFISlrDgg3KiOjN9o3LbeHFY8OAlg5Uaf7Br+hhvDyFrDUcX9/KKHg6FKloUzsVv0W6Veghvh+KnSRlWRmTY/7J67xc6c722fApIQQKxpRNYR894X2slTJyZecCZ/qQQbPGpPEkJNVAE/PKPZ+erjt8/8AyOUz6WeJnnukNfXbWKTtChysi7AQxiMVmYJN9feK3jGNR305q6dQBrpaH9JJB/j7ypvA4IKQKPSPSsCcwbSD8AmugDWLaSgO19Y4cns0Sk8O5QwiRlNIfQBEFgtzjclaRQoi4pB0KYUhVK46ieNYN7KWIClG0eiZxADORWPRaen5px/E0ywQkus0AFYL2d7NTJpMya4JqBcueUXfZjsUpH+WchyRRy7dB5Rt8CEynIAccnp9jHmk149OeVrLYrAFNU0Um4FCKRnp2LyuFCtrPH0YyQqYolOo0uGpeKTtH2dSoFaUl6skCwF4L6J4yOF4NmOZPeBrW0X/AAvhTFIIuavYVsIq+FYwyyUg2YEHSsXquK0226amJuRg2JwrLIFASfKGJcwIAT+o38orZfFQpXnAjihStS/nE8m0tcVMsLvU+J/iE8RKRmYm6vIawhjuJM3ebx2eK/F8UGTMly4prcj+YZNhcTzKT+97B9KvHPqS0rQkFyzAdXjI4zFzVpVloEFKm3SQQfB2juIxpSEZnFssz9yTsvcPFzAbfSOygSlAC6EFV+rwr2txsqWipGc0QkGpO3IPGJV2gnyXSVZkA5km7g3Y/LRTYjGKmzUrWtSwkhzsAQbaRafrXyeAGWuVihOSqYkvMDjVxQAUpvGix2IX3TmHeJrSyQKCMknFd7dJo46QorGTFTEIzEgaPTWsTzsml8JvbYnjykgBIUSLHQP/ABvCqeLqz5FB8xqbltdYocbjVo7qSSTUD7kwxhZktMvOVPNJts/pDc7l6cfzxx8j6R2dxlRlLgHL4CNjgAHKg1QPO8fNOxeJOU905Q5zfbnrG7wWMs7ZeVx4xc8cb6uZ8xk5iDeoHv0hUze6qY9B8cxNOIexcc4nJmJIKWDagW8oKXETApIUBeF8VLoSIeSQAALCwiKwDDBVHOlqJufWPRZLQl7iPR05J0yKwB+59W25MLRFSdcpFXHTn5x2VhypRawq4TUlrEvaHFSmUFHVgddNo4dOnbuF4YblVeXO/jA8fhlAsE5gXsN9Tzi9w+VTFIoLQLGFkEpoRvzDw3TbfF+12D+hMCkM63KgBQbeMI4bieZs1CfJuUWvbPGmZMIpQnTeM7Il77/31jnlFrf6iTYh/u0IYlayX2sxrX+o9JSPnvDf03t18I51cUsyUVKqSWNHMXGCkoKAhSgk5aHofSF50o25++8Lz1lkkHRvnnButZFgOH5GILix1ChVxT/0YGMCXyuCFD95uNCCdYb4AVWXVL0f3i8xsmROCmU0xIcBmHQNHXHL+0ZRhcdw2ZLOVsyCbOKPsXp7RHCYVEtKyoZlUylyG3BAoXi34nKKQ5IVFWoqIOzdP7jp1fEeArnKDgKI5R3DY5SVZ6E9IWmK3NekN8AyicgrlmYkH9Nx48vxBYrdaDhvDZ08gS5RKlfuUCEAb5jRousH/wAeqC0qnzXqKIHdFdzR42WExjy0qlpSMyQyRRrizQKXi5xV3gQNUsMo2ObeNqSNumpHDpUpIRLoBSpPi+5giJjUDddG8YkpNAz860iJSAN6fGjpHMxKxzFvb8Qzh8UkKzP109DFYDm0tfRg3tHDKDu7i96Rg0cvHCCf9kGxEZUqUGyqI+WrA5nEFCgUxtUAsegjFrUzkco9HxfG9vMZKWpCxKcHQUI0N49DoPoeEQFEIQohVS1RQObilKQxj5aUZRmJKlNergaeUJ4xP+pLvQpcO+0DnmaJgaaVoSC6CB3VWHePjHH1086aTDy2SnKx0O7Ny5tCXaLHJlSSVFrio1Z9Ihw7FpTmBSRS4YMdX5mMT294+V/4wSwJe4Bir4J2xHFJ5UoncmEkLZonMrCaqE/PCIWsDOpf4NIHOxxAoSz+Y2isWo7/ANQBZJ7r0DxpI3JZoxzudLvryj0jFuA5FeXL+Yp1zCPaOS5v4h4jlWkPE8poGAYU5ipjwx2VQUCrMAAp2Yu7NyZvOKeXiU2OphxbFIZttPhg8bZ1eIMwVNdNoTxoKGG4cRHDpU7uQ2141GD7DYqdlWogBZqSXNOWkON/oZKPs7wSZiVuzISQVKp5dY+k4bCS5SQJSQlAZ8qfVzV+cOS+DS8NLyygGHm+tTCs5y5CSzO+0LLCTPSGYMSX5Pzif1CTS79BW8UGZZq6ctmF6fmCSiq4LdLh4R9aReJAAIfnd2rpBMPOcO4PpTaMp9cipUo1Zzrs4+8Gw2MIJD0Fx18PWHY00UuUjOpQPeN3J2t7RKcoNUAG1d236QvISD3gn9tFu4PLenTSBzqgDMQXq5cHUhjYxWxpOah3PRwdOYiJT4W9rneJK/1vTm/jvWEMeFP3Ts6S8FracxPCpK2+qhK1DVmLHePRXHiE0UStho49BHYOauNa8qSQAthy184BIwRJUCxp3QdKg+JiMtMtIKVAOWcqqfPY1iaOIS5ZIrsk18fCInZ7im7aT1SlBISpAAooK/WS1S1WHOPnWOxhUS5ck66840nb7jBmrCP9TQg0ZhRhGRxFn8I2V70cYTXrAC+sEMwuRascRLfWvPSJIaK1G0QmSXqBeGQnf2iQFRZ4NtorLlJIZV+cCxGAKTSoIeLQSAuovBZaDRJDuKfiHlW0oJOEKjyi8QhEoWdZFmoPGGeFyEqUolNA3hCMxOZRVvFf9TReGrVMmJB1IHryj7Thpo+iFP3agio8hHy3slw8rnhg7V2sKecfQJvHFlJRlAp3iSNbMGglhs2FOnOVNUWNNfH7Qq1XZgKX9xHJdrcvKBrmXAcc+ehB1HKGXYs0a/65UkkEEpqwNQNS2sB+oXe9NLx0JSCVAsoaijgivxoGwcHbnZ9GhSJPYigOmsKTQ9QQ1rMfXSCq1LVFqWI8awshSq5wDrQXBOotGMMysQpmSS3I+bfxEf8AsKzVUTSxqadYElrj0EFCSWO3iYzLfhkxVysrDMQQBl1odWEEnrBJA6j4YLwnCMl3ZwW8YVxIIJzfqFum3lFd0EiqWCXNTW0eh0oQqrPHonVUjxOYolTANmYAtQAtfaEeJzjKRmNbszfLQ1IlomjOCVJP7SpV3Yv0MU3avE0SgMkg18hBdmMpiF5lE7v85QrOGr/OsSWWL8vPygQPz+4hQRQaMw16x0K/nnBk2D333/EAKKj1MZhALecRVKrSkElrHo3WCKRetYDEcMKhrvFhLei0qAKVAjfwMKBZYJGqgXFyB+2GTjzKXmSQoMyXAcAGg5H8wydi0zhSg5ly3CSg5k37z166RVqlsw1/MP8ADxlSuazByw5+EIfSzEd53LRWdTi1vYt5cqZMIFTqHoNIcTNDv4cvKGsIyJYQAcoFdAa+YjkySl3BY08tR47wS/DqvSZoozirQRepo1IhMwzuxy8vmkdSpae6RmS/KtvTrDuDVQmoBIBD10oK28IjNSRcDKLddt4LJQQ4Io9vVhuKwGeskULB9o0ax5Qe9vnnEE7Cra+EeCS7+ou+/SCSpepAejUsXY9RDvSZAjI1Db9eQ5x0LKWI1LM4HqYYGHf9RcVOlOkeScppbnByVxTw/FP2lwQBb1YxYS8cFDvVJa49zFbLlg3ty5R5UtQB2089oqZJuImMQyqMOkehWbm0BPpHoeQ0t5eUKc06Uf56RlO2Cgqb3QLn7Wi/nTlKPdSAmpJzd4AED9LX8Yx3ElutRAo9Olom3a5FTOFbQupHrBsTe+9tYEKinh03jm6UJ/nKPJXX40SSmvh7QeXLdowLhOsTCzV/hic0hLE7xGbLbwjMlKJYKfWjGoO+8GCQpxmFsz+46wCQgOzNXrFgnDJMoKSpLleUtelz0ioL4lipjISgUIq/tSG+zmEzr+oRRJFeZeKyaDMmUrZI/PrG24ThMkkIAcg949TfkRaNrdF6iSjUnQaU9oHJmPVSCC+vKIImhSSASSDlJoH6bxwS1GoLA3Br5coLNKlWAW5pp7R36g86RXSqAU6hueoiM8OpJcpJbSlIJG2s5kxg5LAVqYFU6uKMN+ZOhjmcKo161FPDnAMZivp1UhSrWsSIrTbhopCQG3GunjeIZ3LeRj0lSJoCm1/Sq4p8rHfqgHKcuY1oKtYVeFFEBs1t/mseUaaHwgRLlje9P4gLsTUtRq0jSHZiXO3uDoKesGll766PvpC6a1e2mvlHEEkMzkffnG4/RaCtIFMyvePQZKSdhy+GPQjpFPFZS2LhJA7yUsCXtc15xk8VMqqutr6wGWn6ZAqTz86coOs+DxPUdPVfOFBvtAZSmp1gswsSPUwossb3grbGC/6hyWztajkwgFUDj8wYLdy4Fwx50FII201KSU2cio5fzHpkyjm5B6xAqq1ntWnWFioHWhMNaDIU52YZvnOHsFNSgg5HUQwBDAc3/d/EBwWHCsyiaJAHJR2EWeBlkHNR2005chDOk032f4ZkJVMUxJoW7rvasX2NWlCAjvKzFyUnTn80jPyeJhikEFiSzvUgedoMcYpRepNnMV4O6axSw6QjvJ0dgRvQaQwVZdGelNIRw0kj9ThhvBlTi4dJa40Zo52rg86WpQYUNDm8a0hLFSl/VGUEWsSAxa7WasWSJ9HZqWtEZ01RSchZRa8MoscRJKQ31FEu9avy6QVE5gNaM9hs8Tl0AzfBApktILjWH0b0MpAUyhcH01B3EeSxU5HIP10O0Bmd0OxNaC5iaJjhyCKCm3LkYxCxmGKgwZ70JHK+hF4jgZBSkJJdn9/eDfVJ0NL/AN78okuqbM/o8PLrSbEggUq0cWWdj584Gf2vXT0Z46pWVq1Nor4l76g0tpHokJf/AJHJo9GPRnieCkLS5T33G3pTlGc4jwFUtQIVmBNAA4AYOVHrF+jFlWdJAcFiPYwFEtROUKZ67W2MTLKrVjFcSkZSRcxUTC1SfnKNTx7C5VkOD08PWKSbhdupifqviu1d+nKDlQpqd7+cGXggzk6esIKllJoYPR4ZmqzKoGDN5NDODwuckulOVJVUtbSKafOVvfaOF7f3FzEXJCfxRamcsBYCwPLnziZ43OKSl70JDu3V4WVhzc+0Gl4Vn+Nzih2e4ZxQy6hGY2q/2i94NxRUxbFDB6kP80iiwuDP9CviIscDgySFOwewFfKCqjVzCCb06+/KDJZNHpoIrEqZhVzrtBkKUTr1+/WIOzyy5FesTAVStGr+YBJ/Tt/fpHQWLAl9zGsETJ7r9bQzLl2JJLamr9YDLW7+41iSpmUORq+xpzjNexwp1NXWn4B1jollrNXer72hczCS9MrX2+bxL/sHRIa1784RXQGN21Z9XhgKZJ7vMefoIAUWIsBYj5vDkickSvpmhBJCvF2ipN0W6ium4XMxNG1TQjoYKtIp3hbW/jHZZOtau/i1tYKZQZyxGg6Q6TtyWh7Fo5HJhAuW8Y5CNOYaUTiJsx3D5BzADFV6h3YwScp6ZLNU2O7HWLKTKCO6LNQdIr8bKci7ioIdvKOOPTtWf4/hylzX9Rq1GNqxQTF7xsOMFKsMl1d5J/Sza35xi55flrDfWnjqlOHhaSsB1EOdBEF2oHo/ODlD/pqaEfz+IcZpOV30XmyyouzC0ck4bW4OsOJQoUFd+kHw8lhX51irdiQvIw1NuREETgBofmxh1Es7aefODIAr0032g0SUvCJFCkONRFhhZQSx8NfjwGWsm9D7be0TSC9AS+p8v4jWKPpmF3fZvu0HJbT50gWEoC4LswAqD+OsFQLuQ3qeY3gCS5jCvj40tvEUS9R3g1CeV4gDl305U6bR0YgJDsQX3t1h0DDczuI9lZLOSb9axCROKrDWC8yzjR6ROimuXZnzWrt7R4zEuA4zW0HpHFTWd1NSlIHJlhSnIehPN/DSHQppIUxJNDpavL8QWW5S5s/wmAIWLj9QoxFWeCKmgPuHrodbxcia4JjlnDj+oMueAz6+sDE1gCak3YUY7D5aApWhWZKswUGI7pZXi1IJ017EnTkvv85R6EphTYhJIodfa0ci06X+ImsHIcguwhTETM37uu4/EOzkkixD3I0/iEzhKB1Gnr5RxldarMUkFGU6UDXp94xOM7iik7+Yj6POwge94y/aPApPeqC7E6FxfrDGZBUx66DXb40XaUhgAaerxXYiQEom6mn3i14JJMwBk1YelIqDxOSojSg+ecElYdbuxDjUU5Rr0YdKMMZWV1FWbO1RSzRXzUApLlyCAwuCxi5h/abmpf8ArrH6qc/xBTglZggpU2XM49hvD30VE/pcWrrFgMIpYckhQoBbm/O0aY9i1j5GHdRNe9TvAikWcyRkWz6buK6ekOzcMpJYg0FDzOnWFzKIZ6/l7l4nJWIElSwoBlJP7qe3v4wymU5/U2rEX/MElSVKLBVU1YgfnYRwJDlRFg4Fno4HnEqcEp6r0PdY7a3tXWJzpCVvcKTRJoQxuTHpS3Zg1LNbpv1ghQDULZ3cDpZt6xttUJDpooOWFQKP/wCRZt+cOSpaaKsSLff+YXkJAYhTcimoYt8eGZs42DFr+MbTRKbKStJS5yml/GkI4PDKQppa2T/9acoKord2SQzEOxfWuseTMetRaKiMjU2aQQ16fyYmpNaliftq0Ly5qAoF3qXuxLM278oJMmihDu7F3oN4raRZxIDC5tT2hjAYMrDkFKR+43+PEZZFtT4UjuKxJUAkfpT6n7wT/bGksLLSgaAgE+NY7FenAKUHBI8o9DyJ0qVf54x5EzNQWbQU89YVQ6nGYMaVBFtW84nUBgWGw0HXSOEdbDC5ALsep8Io+PYAfQW5qAVDwFPnOLZeJBDMb103s94puPzEplZXYFTGulzz5eMaen4oMTJCkBLf/wA8x86/aJ8DQZS6PlP3NK6dYikgrltUjOlQ1CXBcxY4PDL+nnQCtKVFDNUpNjztHocmqkAEAKYPQVud4LPkSrKIUrQA+t4reFHugkvbu7AaHmIKuUkAlNDVz9vm0XMoixFOCSouBQX3A8YMvDpIAGliTRnsYJPwp7pBsxLaxHM13ymjEfcRt6EKYxioArSCqjOG5fOUVmIw6kLAKgzfpAc3NXiyOG76co3d6UowD2tAJmOKlEMxIYG7irjnpE2xULFi5Onr5coHMSnMkBT6AvYtcPcfiG6VIUC9OuXX7Qt9IJBUUlhQOpwk6UTcVEcXRBQZgQ43JcO9vaJoa37hoKsfCFpi6FASQe6Hah3Ph6wBcqZIWCHVLYOWFnq55bxcx2i3Syyk1au3rXzif0Qf3MRp94NlBYpNDZiCPOOrHT3MaYnkDNkprqH92DwbBYdIUHUAkCn+xNwAPvAlznUyr8vx8vBpa0aXtXeLS6jCpU4S+apZtq1aHU8JIl5/7Oscl4xSQSP1BLANyqQ+sWeGUlMpMyuc3BocxSzdADflG0FQpBbP3ipsopZ+Q8POBpSwYkD884t5U+UQUqWyjen3MLCTLQSpCtHBLnN/MGm2scCAEhgB1/JvHoQM/NVQY3vvy0j0LEpeIDZU0INft9zEVYpJOUVIqwev5HKE8LKCVOQVPpVqa9WgyJLKSpKA5zZgXcA6vYuWoI88d6bPdS5YqA3YDavSMrjMJMmLWspJykEnR40iTnIzMLEAvdvTZucSUnNShWQ5D6WD+d40LJ8Mw6vqLUA1D4OQLeEXPDcWcNLUlLqUxIF+8mzci8ck8IWVMMyEqSMyrVc0DjSsPcR4SpJASBQgvmFHuk6s0dZlpF1U5UhZX3UqdTZy3dJ1IPjpDeKlqQ6TUtYHXqYu5GJORzcU5O1BXrFVjspJd8wu2+7QXc7G+yaMUcozENejmuziGxjO6QVOeVaxWyllyg2AGt72jiRlfR/g8YZl0LOxMTJ/xKmfUCQ+VSHqQfB2PKE5cpwpIBbU+AtyuPGDlQAL6O3weEenUASoEDl4ecTezJQDKDhgSE1Z7h9dYnLCSP1M7lmcx6XRsqqOXYD1BF46GL3c2YNTSHHVGW0kYV+RJemv4hgygmjv1pCinYAPz3gklKVFpiikAFqvzAtSOqHJcpIZLtz2qfOOzJaRR30vVnrTm8Aw6wTlc0owIF60oTBco+p+ln5uWNvCOezoCXg8qiQliaVcsNOkOSVpBY92lC19ukMBBqdfNucKT5BYKcc3p5c4eTaTnkpJKSCbv4abiJScdnBUo6N08IkcI0oFVlkaPQvXlCslKUzPpqcgpYK6ElL7mC7MEWtJAqQ9bbWFfaC4fDnMS9PlYKuYHY1IrZhyrATNGYvvQA+vKHvYRWsk2D6/nxjseXicpbKSOQj0VttP/9k='
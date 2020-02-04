import React from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ClientCard from './ClientCard'
import { getUser } from '../../redux/reducers/userReducer'
import { getClients } from '../../redux/reducers/clientReducer'
import {Grid, Button} from '@material-ui/core/'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // user: {},
      // clients: []
    }
  }  

  componentDidMount() {
    // console.log(this.props)
    this.props.getUser()
    this.props.getClients()

  }
  
  render() {
    const { user, error, redirect } = this.props.user
    if (error || redirect) return <Redirect to='/login' />
    if (!Object.keys(user).length) return <div>Loading</div>
    
    let mappedClients = this.props.client.clients.map( (ele) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={ele.id}>
          <ClientCard ele={ele} />
        </Grid>  
      
        )
    })

  return(
    
    <div className="dashboard">
      <Button 
        className="spacing"
        onClick={ e => this.props.history.push('/new')} 
        variant="contained"
        color="secondary">
        Add New
      </Button>
      <Grid container spacing={2} >
        {mappedClients}
      </Grid>

    </div>
  )
  }
}



const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps, {getUser, getClients})(Dashboard))
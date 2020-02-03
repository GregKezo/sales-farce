import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,

  }
});

const ClientCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return(
    // <div className="client-card">
    //   <div className="client-name">
    //     <Link to={`/client/${props.ele.id}`} style={{textDecoration:'none'}}>
    //       {props.ele.first_name} {props.ele.last_name}
    //     </Link>
    //   </div>
    //   <div className="client-info">
    //       <div className="info">Email: {props.ele.email}</div>
    //       <div className="info">Phone: {props.ele.phone_number}</div>
      
    //   </div>    
    //   <div className="more">
    //     <Link to={`/client/${props.ele.id}`} style={{textDecoration:'none'}}>
    //       More Info
    //     </Link>
    //   </div>
    // </div>

  <Card className={classes.root}>
    <CardContent>
      <Typography variant="h5" component="h2">
      {props.ele.first_name} {props.ele.last_name}
      </Typography>
      <Typography variant="body2" component="p">
        Email: {props.ele.email}
        <br />
        Phone: {props.ele.phone_number}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary">Learn More</Button>
    </CardActions>
  </Card>

  )

}


const mapStateToProps = reduxState => {
  return reduxState.client
}

export default withRouter(connect(mapStateToProps, {})(ClientCard))
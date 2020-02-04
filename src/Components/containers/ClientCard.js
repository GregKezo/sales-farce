import React  from 'react'
import { withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    textAlign: 'left',
    color: theme.palette.text.primary,
    margin: theme.spacing(2)
  },
  subset: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(0)
  }
}));

const ClientCard = (props) => {
  const classes = useStyles();
  return(

  <Card className={classes.root} raised>
    <CardContent>
      <CardActions>
        <Typography variant="h5" component="h2" onClick={e=> props.history.push(`/client/${props.ele.id}`)}>
        {props.ele.first_name} {props.ele.last_name}
        </Typography>
      </CardActions>
      <Typography variant="body2" component="p" className={classes.subset}>
        Email: {props.ele.email}
        <br />
        Phone: {props.ele.phone_number}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary" onClick={ e => props.history.push(`/client/${props.ele.id}`)}>More Info</Button>
    </CardActions>
  </Card>

  )

}


const mapStateToProps = reduxState => {
  return reduxState.client
}

export default withRouter(connect(mapStateToProps, {})(ClientCard))
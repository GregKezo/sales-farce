import { GET_CLIENTS, LOGOUT_CLIENTS } from './actionTypes'
import axios from 'axios'

const initialState = {
  clients: []
  ,activeClient: {}
  ,loading: false
}



export const getClients = () => {
  let clients = axios.get('/api/client')
    .then( res => res.data)
    .catch(err => console.log(err))

    return{
      type: GET_CLIENTS,
      payload: clients
    }
}

// export 

export const logoutClients = () => {
  return{
    type: LOGOUT_CLIENTS,
    payload: []
  }
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type){
    case GET_CLIENTS + '_FULFILLED':
      return { ...state, clients: payload }
    case LOGOUT_CLIENTS:
      return { ...state, clients: payload }
    default:
      return state
  }
}
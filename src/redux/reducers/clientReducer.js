import axios from 'axios'

const initialState = {
  clients: []
  ,activeClient: {}
  ,loading: false
}

const GET_CLIENTS = 'GET_CLIENTS'

export function getClients() {
  let clients = axios.get('/api/client')
    .then( res => res.data)
    .catch(err => console.log(err))

    return{
      type: GET_CLIENTS,
      payload: clients
    }
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type){
    case GET_CLIENTS + '_FULFILLED':
      return { ...state, clients: payload }
    default:
      return state
  }
}
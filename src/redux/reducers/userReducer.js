import { GET_USER, LOGOUT_USER, SIGNUP, LOGIN } from './actionTypes'
import axios from 'axios'

const initialState = {
  user: {},
  redirect: false,
  error: false
}

export const signup = (email, password) => {
  return {
    type: SIGNUP,
    payload: axios
              .post('/api/signup', { email, password })
              .then( res => res.data)
              .catch( err =>  console.log(err))
  }
}

export const login = (email, password) =>{
  return{
    type: LOGIN
    ,payload: axios
                .post('/api/login', { email, password })
                .then(res => res.data)
                .catch( err => console.log(err) )
  }
}

export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get('/api/user').then(res => res.data)
  }
}

export const logoutUser = () => {
  return{
    type: LOGOUT_USER
    ,payload: axios.post('/api/logout')
  }
}

export default function userReducer(state = initialState, action){
  const { type, payload } = action
  switch(type) {
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        user: payload,
        redirect: false,
        error: false
      }
    case `${LOGIN}_REJECTED`:
      return{
        ...state,
        error: payload
      }
    case `${LOGOUT_USER}_FULFILLED`: //make logout work for client reducer, also
      return { user: {}, redirect: true, error: false }
    case `${SIGNUP}_FULFILLED`:
      return { 
        ...state,
        redirect: false,
        user: payload,
        error: false
      }
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        error: payload
      }
    case `${GET_USER}_FULFILLED`:
      return {...state, user: payload, error: false }
    case `${GET_USER}_REJECTED`:
      return {...state, redirect: true, error: payload}
    default:
      return state
  }
}


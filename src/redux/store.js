import {createStore, applyMiddleware} from 'redux'
import userReducer from './reducers/userReducer'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(userReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))

export default store
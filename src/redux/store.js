import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './reducers/userReducer'
import clientReducer from './reducers/clientReducer'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  user: userReducer
  ,client: clientReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))

export default store
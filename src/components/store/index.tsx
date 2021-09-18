import {createStore, combineReducers, compose} from 'redux'
import { figma } from 'components/reducers'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
export default createStore(combineReducers({figma: figma}), composeEnhancers())

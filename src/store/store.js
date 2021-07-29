import {createStore} from 'redux';
import simulatorReducer from './simulator/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({simulator: simulatorReducer});

export default createStore(rootReducer);
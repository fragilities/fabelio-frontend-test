import { combineReducers } from 'redux';
import FurnitureReducer from './FurnitureReducer.js';
import FilterReducer from './FilterReducer.js';

export default combineReducers({ FurnitureReducer, FilterReducer });

import {combineReducers} from 'redux';

import events from './events';
import participants from './participants';


export default combineReducers({
  events,
  participants
});

import { combineReducers } from 'redux';
import timerReducer from './timer-reducer';
import selectedTimerReducer from './selected-timer-reducer';

export default combineReducers({
  timers: timerReducer,
  selectedTimer: selectedTimerReducer
});

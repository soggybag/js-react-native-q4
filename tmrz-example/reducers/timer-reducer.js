import { ADD_TIMER, UPDATE_TIME, PAUSE_TIMER } from '../actions';
import Timer from './timer';

export default timerReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TIMER:
      const newState = [...state, new Timer(action.payload)];
      return newState;
    case UPDATE_TIME:
      return state.map((timer, i) => {
        if (!timer.isPaused) {
          timer.time += 1;
        }
        return timer;
      });
    case PAUSE_TIMER:
      return state.map((timer, i) => {
        if (i === action.payload) {
          timer.isPaused = !timer.isPaused;
        } else {
          timer.isPaused = true;
        }
        return timer;
      });
    default:
      return state;
  }
}



//

import { ADD_TIMER, START_TIMER, UPDATE_TIME } from '../actions';
import Timer from '../stuff/timer';

export default timerReducer = (state = [], action) => {
  console.log("Timer Reducer !!!!!");
  switch(action.type) {
    case ADD_TIMER:
      return [...state, new Timer(action.payload)];
    case START_TIMER:
      const newState = state.map((timer, i) => {
        if (i === action.payload) {
          timer.isRunning = !timer.isRunning;
        } else {
          timer.isRunning = false;
        }
        // make new time block
        return timer;
      });
      return newState;
    case UPDATE_TIME:
      return state.map((timer, i) => {
        if (timer.isRunning) {
          timer.time += 1;
        }
        return timer;
      });
    default:
      return state;
  }
};

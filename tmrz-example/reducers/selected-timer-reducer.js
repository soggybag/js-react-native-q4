import { SELECT_TIMER } from '../actions';

export default selectedTimerReducer = (state = null, action) => {
  switch(action.type) {
    case SELECT_TIMER:
      return action.payload;
    default:
      return state;
  }
}

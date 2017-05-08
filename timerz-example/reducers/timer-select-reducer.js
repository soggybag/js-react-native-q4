import { SELECT_TIMER } from '../actions';

export default timerSelectReducer = (state = null, action) => {
  switch(action.type) {
    case SELECT_TIMER:
      return action.payload;
    default:
      return state;
  }
};

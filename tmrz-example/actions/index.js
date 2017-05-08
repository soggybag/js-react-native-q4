export const ADD_TIMER    = "ADD_TIMER";
export const UPDATE_TIME  = "UPDATE_TIME";
export const PAUSE_TIMER  = "PAUSE_TIMER";
export const SELECT_TIMER = "SELECT_TIMER";

export const addTimer = (name) => {
  return {
    type: ADD_TIMER,
    payload: name
  };
}

export const updateTime = () => {
  return {
    type: UPDATE_TIME
  }
}

export const pauseTimer = (index) => {
  return {
    type: PAUSE_TIMER,
    payload: index
  }
}

export const selectTimer = (index) => {
  return {
    type: SELECT_TIMER,
    payload: index
  }
}




//

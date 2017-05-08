export const ADD_TIMER    = 'ADD_TIMER';
export const UPDATE_TIME  = 'UPDATE_TIME';
export const SELECT_TIMER = 'SELECT_TIMER';
export const START_TIMER  = 'START_TIMER';

export const addTimer = (name = "ABCDEF") => {
  return {
    type: ADD_TIMER,
    payload: name
  }
};

// store.dispatch(updateTime())
export const updateTime = () => {
  return {
    type: UPDATE_TIME
  }
};

export const startTimer = (id) => {
  return {
    type: START_TIMER,
    payload: id
  }
}

export const selectTimer = (id) => {
  return {
    type: SELECT_TIMER,
    payload: id
  }
}

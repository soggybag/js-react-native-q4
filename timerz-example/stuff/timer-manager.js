import { updateTime } from '../actions';
import { store } from '../components/app';

var timerId = 0;
var lastUpdate = 0;

export const startTimer = () => {
  timerId = setInterval(()=>{
    store.dispatch(updateTime());
  }, 1000);
}

const stopTimer = () => {
  clearInterval(timerId);
}

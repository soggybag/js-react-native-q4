export default class Timer {
  constructor(name) {
    this.time = 0;
    this.isRunning = false;
    this.name = name;
    this.billableHours = 0;
    this.timeBlocks = [];
  }
}

export class TimeBlock {
  constructor() {
    this.startTime = Date.now();
    this.endTime = 0;
  }
}

/*
const totalTime = timeBlocks.reduce((timeBlock)=>{
  return timeBlock.endTime - timeBlock.startTime;
}, 0);
*/

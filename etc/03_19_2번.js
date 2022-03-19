function solution(arr, processes) {
  arr = arr.map(Number);
  processes = processes.map((process) => process.split(' '));

  let curTime = +processes[0][1];
  let finishTime = 0;
  let writeQueue = [];
  let readQueue = [];
  let ans = [];
  let totalTime = 0;
  for (let i = 0; i < processes.length; i++) {
    if (processes[i][0] === 'read') readQueue.push(processes[i]);
    else writeQueue.push(processes[i]);
  }

  while (readQueue.length) {
    let curProcesses = readQueue.shift();
    if (writeQueue.length === 0) {
      let read = '';
      for (let j = +curProcesses[3]; j <= +curProcesses[4]; j++) {
        read += arr[j];
      }
      ans.push([curTime + +curProcesses[2], read]);
      totalTime = Math.max(totalTime, curTime + +curProcesses[2]);

      finishTime = Math.max(curTime + +curProcesses[2], finishTime);
    } else {
      if (curTime < writeQueue[0][1]) {
        let read = '';
        for (let j = +curProcesses[3]; j <= +curProcesses[4]; j++) {
          read += arr[j];
        }
        ans.push([curTime + +curProcesses[2], read]);
        totalTime = Math.max(totalTime, curTime + +curProcesses[2]);

        finishTime = Math.max(curTime + +curProcesses[2], finishTime);

        while (writeQueue.length && writeQueue[0][1] <= finishTime) {
          let curWrite = writeQueue.shift();
          finishTime += Number(curWrite[2]);
          curTime = finishTime;
          for (let j = +curWrite[3]; j <= +curWrite[4]; j++) {
            arr[j] = +curWrite[5];
          }
        }
      } else {
      }
    }

    curTime++;
  }
  return ans;
}

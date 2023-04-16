function solution(fees, records) {
  const cur = new Map();
  const timeMap = new Map();

  for (let i = 0; i < records.length; i++) {
    const [time, carNum, type] = records[i].split(" ");

    if (type === "IN") {
      cur.set(
        carNum,
        time
          .split(":")
          .map(Number)
          .reduce((a, b) => a * 60 + b)
      );
    } else if (type === "OUT") {
      const startTime = cur.get(carNum);

      const curTime = time
        .split(":")
        .map(Number)
        .reduce((a, b) => a * 60 + b);

      timeMap.set(carNum, (timeMap.get(carNum) || 0) + curTime - startTime);
      cur.delete(carNum);
    }
  }

  const MAX_Time = 1439; // 23:59
  if (cur.size) {
    for (const [carNum, startTime] of cur) {
      timeMap.set(carNum, (timeMap.get(carNum) || 0) + MAX_Time - startTime);
      cur.delete(carNum);
    }
  }

  const timeMapToArr = Array.from([...timeMap]).sort((a, b) => a[0] - b[0]);
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const ans = [];

  for (const [, totalTime] of timeMapToArr) {
    if (totalTime <= defaultTime) ans.push(defaultFee);
    else
      ans.push(
        defaultFee + Math.ceil((totalTime - defaultTime) / unitTime) * unitFee
      );
  }

  return ans;
}

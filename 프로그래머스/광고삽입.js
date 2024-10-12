function solution(play_time, adv_time, logs) {
  function calcTime(timeStr) {
    const [hour, min, sec] = timeStr.split(":").map(Number);

    return hour * 3600 + min * 60 + sec;
  }

  const playTime = calcTime(play_time);
  const advTime = calcTime(adv_time);
  const times = Array.from({ length: playTime }, () => 0);

  for (let i = 0; i < logs.length; i++) {
    const [start, end] = logs[i].split("-").map(calcTime);
    times[start]++;
    times[end]--;
  }

  for (let i = 1; i < playTime; i++) {
    times[i] += times[i - 1];
  }
  for (let i = 1; i < playTime; i++) {
    times[i] += times[i - 1];
  }
  let peopleCnt = times[advTime - 1];
  let ans = 0;

  for (let i = advTime - 1; i < playTime; i++) {
    if (peopleCnt < times[i] - times[i - advTime]) {
      peopleCnt = times[i] - times[i - advTime];
      ans = i - advTime + 1;
    }
  }

  const formatterTime = (time) => {
    let HH = Math.floor(time / 3600);
    let MM = Math.floor((time / 60) % 60);
    let SS = time % 60;

    HH = HH > 9 ? HH : "0" + HH;
    MM = MM > 9 ? MM : "0" + MM;
    SS = SS > 9 ? SS : "0" + SS;

    return `${HH}:${MM}:${SS}`;
  };

  return formatterTime(ans);
}

console.log(
  solution("02:03:55", "00:14:15", [
    "01:20:15-01:45:14",
    "00:40:31-01:00:00",
    "00:25:50-00:48:29",
    "01:30:59-01:53:29",
    "01:37:44-02:02:30",
  ])
);

// "01:30:59"

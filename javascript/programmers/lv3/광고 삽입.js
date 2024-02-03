const solution = (play_time, adv_time, logs) => {
  if (play_time === adv_time) return "00:00:00";
  const calculateSecond = (h, m, s) => h * 3600 + m * 60 + s;
  const split = (time) => time.split(":").map((v) => parseInt(v));
  const timeToStr = (time) => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = (time % 3600) % 60;
    return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${
      s < 10 ? "0" : ""
    }${s}`;
  };
  let time = 0;
  let sum = 0;

  const playDuration = calculateSecond(...split(play_time));
  const advDuration = calculateSecond(...split(adv_time));
  const usedInfo = new Map();
  const get = (x) => usedInfo.get(x) ?? 0;
  for (const log of logs) {
    const [start, end] = log.split("-");
    const startTime = calculateSecond(...split(start));
    const endTime = calculateSecond(...split(end));
    usedInfo.set(startTime, get(startTime) + 1);
    usedInfo.set(endTime, get(endTime) - 1);
  }
  //지금 주어진 시간에 듣는사람이 있다면 +1 그만 듣는다면 -1
  for (let i = 1; i <= playDuration; i++) usedInfo.set(i, get(i - 1) + get(i));
  //동접 누적자 체크
  for (let i = 1; i <= playDuration; i++) usedInfo.set(i, get(i - 1) + get(i));

  sum = get(advDuration - 1);
  for (let i = advDuration - 1; i < playDuration; i++) {
    const aTime = get(i) - get(i - advDuration);
    if (sum < aTime) {
      sum = aTime;
      time = i - advDuration + 1;
    }
  }

  return timeToStr(time);
};

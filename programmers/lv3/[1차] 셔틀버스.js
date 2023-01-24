function solution(n, t, m, timetable) {
  function strToNumber(str) {
    const arr = str.split(":");
    return Number(arr[0]) * 60 + Number(arr[1]);
  }
  function numberToStr(number) {
    const n1 = Math.floor(number / 60);
    const n2 = number % 60;
    return `${n1 < 10 ? "0" + n1 : n1}:${n2 < 10 ? "0" + n2 : n2}`;
  }
  const busSchedule = Array(n)
    .fill(0)
    .map((time, index) => (time = 540 + index * t));
  const memberSchedule = timetable
    .map((time) => strToNumber(time))
    .sort((a, b) => b - a)
    .filter((item) => item <= busSchedule.at(-1));
  let first;
  for (let i = 0; i < busSchedule.length; i++) {
    for (let j = 0; j < m; j++) {
      if (busSchedule[i] >= memberSchedule.at(-1)) {
        first = memberSchedule.at(-1);
        memberSchedule.pop();
      }
      if (!memberSchedule.at(-1) && j < m - 1) {
        return numberToStr(busSchedule.at(-1));
      }
    }
  }
  return numberToStr(first ? first - 1 : busSchedule.at(-1));
}

function solution(n, times) {
  /**
   * 모든 사람이 심사를 받는데 걸리는 시간
   * 심사관이 보는데 걸리는 최대 시간 : 1_000_000_000
   * 최대 인원 n
   * end : 두 곱
   */
  let result = 0;
  let start = 0;
  let end = 1_000_000_000 * n;
  /**
   * binary search는 최저점이 최대점을 넘는순간 종료한다.
   */
  while (!(start > end)) {
    const mid = Math.floor((start + end) / 2);
    const total = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (total >= n) end = mid - 1;
    else {
      start = mid + 1;
      result = Math.max(start, result);
    }
  }
  return result;
}

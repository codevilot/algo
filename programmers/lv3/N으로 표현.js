/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42895
 * for문을 i로 돌릴 때, 기준점에 대해 좀 더 고민해보자
 * 평소에는 i를 index를 위주로 생각했지만
 * 이 문제같은 경우에는 1개의 숫자부터 8개까지의 숫자를 세는 것이 주요 관심사이기 때문에
 * 이를 for문의 조건으로 사용하고, 문제에 필요한 것들은 i와 j의 관계로 풀어냈다
 */
function solution(numbers, target) {
  if (numbers === target) return 1;
  const dp = Array(9).fill(0);
  dp.forEach(
    (item, index) => (dp[index] = new Set([(numbers + "").repeat(index) * 1]))
  );
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      for (let a of dp[j]) {
        for (let b of dp[i - j]) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          dp[i].add(a / b);
        }
      }
      if (dp[i].has(target)) return i;
    }
  }
  return -1;
}

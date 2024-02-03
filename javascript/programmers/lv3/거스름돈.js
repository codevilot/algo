function solution(n, money) {
  /**문제 풀이 사이트 :
   * https://school.programmers.co.kr/learn/courses/30/lessons/12907
   * 참조 :
   * https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B1%B0%EC%8A%A4%EB%A6%84%EB%8F%88-JS
   * 지금 계산한 것이 나중 값의 선택에 영향을 준다.(누적 값)
   */
  const dp = [1, ...new Array(n).fill(0)];
  money.forEach((m) => {
    for (let j = m; j <= n; j++) dp[j] += dp[j - m] % 1000000007;
  });
  return dp[n];
}

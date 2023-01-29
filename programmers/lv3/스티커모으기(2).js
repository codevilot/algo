function solution(sticker) {
  /**문제 풀이 사이트 : 
   * https://school.programmers.co.kr/learn/courses/30/lessons/12971
   * 참조 : 
   * https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EB%AA%A8%EC%9C%BC%EA%B8%B0-JS
   * 지금 계산한 것이 나중 값의 선택에 영향을 준다.(누적 값)
   * =>DP
   *
   * DP를 풀 때 고민해야할 것
   * 1. DP 점화식을 세우자
   * 2. Boundary Condition을 설정하자
   */
  const len = sticker.length + 2;
  const dp1 = new Array(len).fill(0);
  const dp2 = new Array(len).fill(0);
  if (sticker.length === 1) return sticker[0];
  /**
   * z
   * 1. DP 점화식 : dp[i] = Math.max(dp[i-1], dp[i-2] + sticker[i]);
   * 2. i는 0부터 시작하기 때문에 가장 낮은 2부터 시작한다
   * 3. Boundry Condition은 처음 스티커를 제외한 경우를 고려해야한다.
   *    dp1는z 첫스티커를 포함, dp2는 제외하여 시작한다.
   */

  for (let i = 2; i < len - 1; i++)
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);

  for (let i = 3; i < len; i++)
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);

  return Math.max(dp1[len - 2], dp2[len - 1]);
}

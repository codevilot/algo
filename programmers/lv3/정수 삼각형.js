function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const prev = Math.max(
        triangle[i - 1][j] || 0,
        triangle[i - 1][j - 1] || 0
      );
      triangle[i][j] += prev;
    }
  }
  return Math.max(...triangle[triangle.length - 1]);
}

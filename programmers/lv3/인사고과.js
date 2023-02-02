function solution(scores) {
  const ar = scores.filter((s) => s[0] + s[1] > scores[0][0] + scores[0][1]);
  ar.sort((a, b) => b[1] + b[0] - a[1] - a[0]);
  const [w0, w1] = [...scores[0]];
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    const [a0, a1] = ar[i];
    let can = false;
    if (a0 > w0 && a1 > w1) return -1;
    for (let j = 0; j < i; j++) {
      const [b0, b1] = ar[j];
      if (a0 < b0 && a1 < b1) {
        can = true;
        break;
      }
    }
    if (!can) result++;
  }
  return result + 1;
}

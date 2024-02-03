function solution(n, roads, sources, destination) {
  const visited = Array(n + 1).fill(Infinity);
  const connectInfo = Array.from({ length: n + 1 }, () => []);
  roads.forEach(([from, to]) => {
    connectInfo[from].push(to);
    connectInfo[to].push(from);
  });

  const q = [destination];

  visited[destination] = 0;

  while (q.length > 0) {
    const s = q.shift();
    for (const connect of connectInfo[s]) {
      if (visited[s] + 1 < visited[connect]) {
        visited[connect] = visited[s] + 1;
        q.push(connect);
      }
    }
  }
  return sources.map((source) =>
    visited[source] !== Infinity ? visited[source] : -1
  );
}

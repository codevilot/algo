const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const getQueenN = (requiredNumber) => {
  let queenN = 0;
  const board = [];
  const isPromising = (positionX) => {
    for (let i = 0; i < positionX; i++) {
      if (board[i] === board[positionX]) {
        return false;
      }
      if (Math.abs(board[positionX] - board[i]) === positionX - i) {
        return false;
      }
    }
    return true;
  };
  const backTracking = (num) => {
    if (requiredNumber === num) {
      queenN++;
      return;
    }
    for (let i = 0; i < requiredNumber; i++) {
      board[num] = i;
      if (isPromising(num)) {
        backTracking(num + 1);
      }
    }
  };
  backTracking(0);
  return queenN;
};

console.log(getQueenN(+input));

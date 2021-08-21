function getTriplet(arr) {
  return arr.reduce((pre, cur) => { return pre * cur} , 1)
}

function solution(A) {
  const N = A.length;
  const sortList = [...A].sort((a,b) => a - b);

  let result = getTriplet(sortList.slice(N-3, N));

  if (sortList[0] <= 0 && sortList[1] <= 0 && sortList[N-1] >= 0) {
    let compareAnswer = sortList[0] * sortList[1] * sortList[N-1];
    result = compareAnswer > result 
      ? compareAnswer
      : result;
  }
  
  return result;
}

console.log(solution([-10,-1,1,2,100]))
function solution(A) {
  if (A.length === 0) {
    return 0;
  }

  let min = A[0];
  let localMax = 0;
  let globalMax = 0;

  for (let i = 1; i < A.length; i++) {
    localMax = A[i] - min;
    if (A[i] < min) min = A[i];
    globalMax = Math.max(localMax, globalMax);
  }
  
  return globalMax > 0 ? globalMax : 0;
}

function solution2(A) {
  if (A.length === 0) {
    return 0;
  }

  let localMax = 0;
  let globalMax = 0;
  for (let i = 1; i < A.length; i++) {
    // 매번 많은 값을 Math.min으로 구하면 시간이 오래걸린다.
    localMax = A[i] - Math.min(...A.slice(0, i));
    globalMax = Math.max(globalMax, localMax);
  }
  
  return globalMax > 0 ? globalMax : 0;
}


console.log(solution2([23171, 21011, 21123, 21366, 21013, 21367]))
console.log(solution2([1,33,1, 11,2,3,1]))
console.log(solution2([10,9,8,7,2,1]))
console.log(solution2([2000000,2000000,2000000,2000000,2000000,2000000]))
console.log(solution2([8, 9, 3, 6, 1, 2]))
console.log(solution2([8, 9, 3, 6, 3, 1]))

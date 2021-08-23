function solution(A) {
  // 최대 부분합 문제는 주어진 1차원 배열의 부분 배열의 합 중 최대인 것을 구하는 문제이다. 
  if (A.length === 0 || A.length === 1) {
    return 0;
  }
  
  const maxSumList = Array(A.length).fill(0);
  maxSumList[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    // maxSum의 i-1값 + A[i] OR A[i] 두개의 합이 A[i] 보다 작을 수 있다.
    maxSumList[i] = Math.max(A[i] + maxSumList[i-1], A[i]);
  }
  return Math.max(...maxSumList)
}


console.log(solution([-2,1,-3,4,-1,2,1,-5,4,1,2,3,4,-3]));

function solution2(A) {
  // 최대 부분합 문제는 주어진 1차원 배열의 부분 배열의 합 중 최대인 것을 구하는 문제이다. 
  if (A.length === 0 || A.length === 1) {
    return 0;
  }
  let localMax = A[0]; // 반복당의 max값
  let globalMax = A[0]; // 전체중 max값

  for (let i = 1; i < A.length; i++) {
    localMax = Math.max(A[i], A[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
}
console.log(solution2([-2,1,-3,4,-1,2,1,-5,4,1,2,3,4,-3]));
console.log(solution2([0, 1, 5, 8, 9]));
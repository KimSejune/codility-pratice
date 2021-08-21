// N개의 정수로 구현된 비어있지 않은 배열 A
// A 한쌍의 정수 (P, Q)
// 0 <= P < Q < N
// A배열의 (A[P] + ... A[Q]) / (Q-P+1)
// 목표는 평균이 최소인 슬라이스의 시작 위치를 찾는 것입니다.


// 배열의 평균을 구하는 함수.
function getSlice(arr) {
  const sum = arr.reduce((pre, cur) => { return pre + cur}, 0);
  return sum / arr.length;
}

function solution(A) {
  if (!Array.isArray(A)) {
    return false;
  }

  // 배열의 길이가 2인 경우 바로 반환.
  if(A.length === 2) {
    return 0;
  }

  const resultList = [];
  for (let i = 0; i < A.length -1 ; i++) {
    let min = Number.MAX_VALUE;
    for (let j = i+1; j < A.length; j++) {
      min = Math.min(min, getSlice(A.slice(i,j+1)))
    }
    resultList.push(min);
  }

  const min = Math.min(...resultList);
  return resultList.findIndex((value) => value === min);
}

console.log(solution([4,2,2,5,1,5,8]));


function solution2(A) {
  // 처음 2개 요소의 평균을 최소 평균으로 정한다.
  // [a,b,c,d]배열중 (a + b) <= (c + d)일 때, a,b와 c,d의 평균은 a+b이상이 된다.
  // 즉 c,d는 고려할 필요 없어진다.

  // minAvg를 기준으로 
  let minAvg = getSlice(A.slice(0, 2));
  let minIndex = 0;
  for (let i = 2; i < A.length; i++) {
    // 3개 그룹
    let tripleGroupAvg = getSlice(A.slice(i-2,i+1));
    // 2개 그룹
    let doubleGroupAvg = getSlice(A.slice(i-1,i+1));

    if (minAvg > tripleGroupAvg) {
      minAvg = tripleGroupAvg;
      minIndex = i - 2;
    }

    if (minAvg > doubleGroupAvg) {
      minAvg = doubleGroupAvg;
      minIndex = i - 1;
    }

  }
  return minIndex;
}

console.log(solution2([4,2,2,5,1,5,8]));
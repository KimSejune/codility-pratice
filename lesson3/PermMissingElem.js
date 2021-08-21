// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // 입력받은 배열을 정렬하여 새로 할당.
  const sortList = [...A].sort((a, b) => a - b);
  // 정렬을 하였기에 index + 1값과 할당된 값이 다른경우가 missing이다.
  const missingResult = sortList.filter((value, i) => i+1 !== value)[0];
  // missingResult 값이 없다면 N+1이 missing Elem이다.
  return missingResult ? missingResult - 1 : sortList.length + 1;
}

console.log(solution([2,3,1,4]))

// 정수 N개로 구성된 A 배열
// 도미네이터란? A의 요소 중 절반 이상에서 발생하는 값입니다.

// key,value map 구하는 함수.
function makeMap(arr) {
  const mapList = new Map();
  [...arr].forEach((a) => {
    const value = mapList.has(Number.parseInt(a)) 
      ? mapList.get(Number.parseInt(a)) + 1
      : 1;
    mapList.set(Number.parseInt(a), value);
  });
  return mapList;
}

// dominator 구하는 함수
function getDominator(mapList, N) {
  let dominator = [...mapList].find((value) => value[1] > N);
  return dominator ? dominator[0] : null;
}

// dominator에 해당하는 index 구하는 함수
function findDominatorIndex(arr, dominator) {
  return [...arr].findIndex((value) => Number.parseInt(value) === dominator)
}

function solution(A) {
  if (A.length === 0) {
    return -1;
  }
  
  // 값들이 몇번 언급되었는지 map 생성
  const mapList = makeMap(A);
  const dominator = getDominator(mapList, A.length/2);
  return dominator || dominator === 0
    ? findDominatorIndex(A, dominator)
    : -1;
}

console.log(solution([4,3,3,2,3,-1,3,3]))
console.log(solution([-3,-4,-3,-2,-3,-1,-3,3]))
console.log(solution([0,0]))
console.log(solution([0]))
console.log(solution([]))
console.log(solution([1,1,1]))
console.log(solution([-1,-1,1]))
console.log(solution([2,1,1,3]))
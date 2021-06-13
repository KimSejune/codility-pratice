function solution(N) {
  const binaryValueList = N.toString(2).split("");  
  const matchedIndexList = getMatchedIndexList(binaryValueList);

  return matchedIndexList.length < 2
    ? 0
    : findMaxBinaryGap(matchedIndexList);
}

// 1과 일치하는 list를 반환.
function getMatchedIndexList(list) {
  const matchedIndexList = list.reduce((acc, cur, i) => {
    if (cur === '1') { acc.push(i); }
    return acc;
  }, []);
  return matchedIndexList;
}

// gap이 가장큰 값을 반환.
function findMaxBinaryGap(list) {
  let maxValue = 0;
  list.forEach((value, i) => {
    if (i+1 < list.length) {
      maxValue = Math.max(maxValue, list[i+1] - value -1)
    }
  });
  return maxValue;
}

console.log(solution(529));
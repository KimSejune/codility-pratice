function solution(S) {
  // 비어있을 때
  if (!S || (S && S.includes('VW'))) {
    return 1;
  }
  const checkNested = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  const stack = [];
  for (let i = 0; i < S.length; i++) {
    let first = S[i];
    if (['(', '[', '{'].includes(first)) {
      stack.push(first);
    } else {
      if (stack.length === 0) {
        return 0;
      }
      const last = stack.pop();
      if (checkNested[first] !== last) return 0;
    }
  }
  return stack.length !== 0 ? 0 : 1
}
console.log(solution('[()}'))
console.log(solution('{[()()]}'))
console.log(solution('([)()]'))
console.log(solution('()(()())((()())(()()))'))

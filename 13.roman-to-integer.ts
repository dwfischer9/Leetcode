/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start

// Basic Values: I=1,
//               V=5,
//               X=10,
//               L=50,
//               C=100,
//               D=500,
//               M=1000.
// Addition: When a symbol appears after a larger (or equal) value, it is added
//  (e.g., VI = 5 + 1 = 6; XX = 10 + 10 = 20).
// Subtraction: When a smaller value appears before a larger one, it is subtracted
//  (e.g., IV = 5 - 1 = 4; IX = 10 - 1 = 9; XC = 100 - 10 = 90).
// Repetition: Symbols I, X, C, and M can be repeated up to three times in a row for cumulative addition
//  (e.g., III = 3, XXX = 30).
// Non-Repeatable: The symbols V (5), L (50), and D (500) cannot be repeated.
// Ordering: Numerals are generally written from largest to smallest value, left to right.
//

function romanToInt(s: string, log?: boolean): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const countMap: Record<string, number> = {
    I: 0,
    X: 0,
    C: 0,
    M: 0,
  };
  let flag: boolean = false;
  let val: number = 0;
  let sum: number = 0;
  let cur: string = '';
  for (let i = 0; i < s.length; i++) {
    cur = s.slice(i, i + 1);
    switch (cur) {
      case 'I':
      case 'X':
      case 'C':
      case 'M':
        countMap[cur] = countMap[cur] + 1;
        if (countMap[cur] >= 4) {
          flag = true;
        }
        val = romanMap[cur as keyof typeof romanMap];
        break;
      case 'V':
      case 'L':
      case 'D':
        val = romanMap[cur as keyof typeof romanMap];
        if (flag) {
          val = val - 4;
          flag = false;
        }
      default:
        break;
    }
    sum += val;
    if (log) {
      console.log('Value: ', val);
      console.log('Current Sum: ', sum);
    }
  }
  return sum;
}

console.log('Expected output: 2, got ', romanToInt('II', true)); // Expected output: 2
// @lc code=end

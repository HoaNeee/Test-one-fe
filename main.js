//Task 1
// Array Processing
// the simple test case starting at 11
// while the task is find mising number starting from 1

const findMissingNumber = function (arr) {
  let min = Infinity,
    max = -1;
  let cnt = [];
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }
  cnt.length = max;
  arr.forEach((item) => {
    cnt[item] = 1;
  });
  console.log("The Array: ", arr);
  for (let i = min; i <= max; i++) {
    if (cnt[i] === undefined) {
      return i;
    }
  }
  return -1;
};
console.log("Number is missing is: ", findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log("Number is missing is: ", findMissingNumber([10, 11, 12, 14])); // Output: 13

// Task 2
// String Processing
// - At least 8 characters
// - At least 1 uppercase letter
// - At least 1 digit
// - At least 1 special character (e.g. !@#$%^&*)

const isNum = function (s) {
  let out = [];
  for (let i = 0; i < 10; i++) {
    out.push(i);
  }
  let str = out.join("");
  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      return true;
    }
  }
  return false;
};

const isUpper = function (s) {
  let out = [];
  for (let i = 0; i < 26; i++) {
    out.push(String.fromCharCode(i + 65));
  }
  let str = out.join("");
  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      return true;
    }
  }
  return false;
};

const isDiff = function (s) {
  let tem = '!@#$%^&*(),.?":{}|<>'; // or regex
  for (let i = 0; i < s.length; i++) {
    if (tem.includes(s[i])) {
      return true;
    }
  }
  return false;
};

const isValidPassword = function (s) {
  let len = s.length;
  console.log("String: ", s);
  if (len < 8) return false;
  const isUp = isUpper(s);
  const isNumber = isNum(s);
  const isDif = isDiff(s);
  return isUp && isNumber && isDif;
};

console.log(isValidPassword("Hello@123")); // Output: true
console.log(isValidPassword("Hello:123")); // Output: false
console.log(isValidPassword("HELLO@123")); // Output: true

// Codewars issue

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

let str = "1 8 3 -5 42 -1 0 0 -9 4 7 4 -4";

function highAndLow(numbers) {
  // string split in array
  let strCopyArr = numbers.split(" ");

  // min number and max number
  let minNum = Number(strCopyArr[0]);
  let maxNum = Number(strCopyArr[0]);
  for (let i = 0; i < strCopyArr.length; i++) {
    if (minNum > Number(strCopyArr[i])) {
      minNum = Number(strCopyArr[i]);
    }
    if (maxNum < Number(strCopyArr[i])) {
      maxNum = Number(strCopyArr[i]);
    }
  }

  return `${maxNum} ${minNum}`;
}

console.log(highAndLow(str));

palindrome = (param) => {
  const arr = param.split('');
  const reversedArr = arr.reverse();
  const reversedStr = reversedArr.join('');
  return param === reversedStr;
};

console.log(palindrome("anitalavalatina"));
console.log(palindrome("hola"));
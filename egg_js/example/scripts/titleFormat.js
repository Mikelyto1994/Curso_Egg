titleFormat = (param) => {
  return param.charAt(0).toUpperCase() + param.slice(1).toLowerCase();
};

console.log(titleFormat("hola"));
console.log(titleFormat("como"));
console.log(titleFormat("estas"));
console.log(titleFormat(""));

lengthOf = (param) => {
    if (param != '') {
        return param.length
    } else {
        return "Invalid Input"
    }
}


console.log(lengthOf("hola"));
console.log(lengthOf("como"));
console.log(lengthOf("estas"));
console.log(lengthOf(""));
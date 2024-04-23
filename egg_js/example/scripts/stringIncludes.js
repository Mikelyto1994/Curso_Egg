stringIncludes = (paramone, paramtwo) => {
    return paramtwo.includes(paramone)
};

console.log(stringIncludes("he","Hello"));
console.log(stringIncludes("He","Hello"));
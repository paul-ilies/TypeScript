// basic definition of types for each input
// types in TypeScript: number, boolean,string

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 + n2;
    if (showResult) console.log(phrase + result)
    return result;
}
// assing each parameter for add function
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = `Result is: `
// end assignment


const result = add(number1, number2, printResult, resultPhrase)
console.log(result)

// if input is not the type definition, will throw an error


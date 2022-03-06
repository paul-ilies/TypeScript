function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}
printResult(add(5, 12))

//we assign types as function
let combinedValues: (a1: number, a2: number) => number;
combinedValues = add;

// function types with callbacks

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}


console.log(combinedValues(5, 5))
console.log(addAndHandler(10, 20, (result) => {
    console.log(result)
}))
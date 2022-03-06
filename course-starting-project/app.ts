// unknown type
let userInput: unknown;

userInput = 5;
userInput = "max";
// // error
// let userName: string;
// userName = userInput;


// never type

function generateError(messasge: string, code: number): never {
    throw { message: messasge, errorCode: code }
}
generateError("An error occured", 500)
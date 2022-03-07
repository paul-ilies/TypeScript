// intersection types

type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}

//similar to interface ElevateEmployee extends Employee,Admin{}
type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
    name: "Paul",
    privileges: ["create-server"],
    startDate: new Date()
}
console.log(e1)
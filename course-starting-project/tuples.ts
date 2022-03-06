// complicated way to declare a object with prop names and values
// let person: {
//     name: string,
//     age: number
// } = {
//     name: "Paul",
//     age: 36
// }


// normal way or easy way to declare objects and let typescript to show what types are

// enum
enum Role {
    ADMIN
}


const person2 = {
    name: "Paul",
    age: 36,
    hobbies: ["sports"],
    role: Role.ADMIN
}
console.log(person2)

// TypeScript knows when we iterate what type is and will show the specific methods from that type

// person2.role.push("admin")


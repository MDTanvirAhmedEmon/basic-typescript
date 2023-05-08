const course: string = 'next level web development';
console.log(course)
// Array
const roll: number[] = [10, 11, 12];

const emon : [string, number] = ['TAEmon', 12];

emon.push('web developer');

console.log(emon)


// Object
const user: {
    name: string,
    company: string,
    age: number,
    phone?: number,
} = {
    name: 'Emon',
    company: 'GP',
    age: 23,
    phone: 484545434355468489498
};

user.name='Himel'

console.log(user)

// Function
function add(num1:number, num2:number):number {
    return (num1 + num2);
}

console.log(add(2, 3))


const sayHi = (zipCode: number, ...friend:string[]) =>{
    console.log(zipCode,friend)
}

sayHi(1313, 'Emon','Himel','Abir','Shihab')


// aliases
type LocalFriend = {
    name: string,
    age: number,
    address: string
}

const localFriend: LocalFriend ={
    name: 'Azhar',
    age: 23,
    address: 'Alinogor'
}

// union and intersection
type NoobDeveloper = {
    name: string
}
// intersection
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number,
    level: 'Entry'| 'Mid'|'High', // union types system for fixed multiple values
}

const newDeveloper: NoobDeveloper | JuniorDeveloper ={
    name: 'abir',
    expertise: 'javascript',
    experience: 6,
    level: 'Mid'
}

// aliases with function
type OperationType = (x:number, y:number) => number;
const calculate = (
    num1: number,
    num2: number,
    operation: OperationType
) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);

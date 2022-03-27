// const person: {
//   name: string;
//   age: number;
// } = {
//   const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     //tuple below
//     role: [number, string];
//   }= {
//   name: 'Matt',
//   age: 30,
//   hobbies: ['Climbing', 'Running'],
//   //tuple below
//   role: [2, 'ecologist']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };


const person = {
name: 'Matt',
age: 30,
hobbies: ['Climbing', 'Running'],
role: Role.AUTHOR
};

let favActivities: string[];
favActivities = ['Climbing'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby + "Is my favorite hobby");
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

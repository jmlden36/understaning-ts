// const person: {
//   name: string;
//   age: number;
// } = {
  const person = {
  name: 'Matt',
  age: 30,
  hobbies: ['Climbing', 'Running']
};

let favActivities: string[];
favActivities = ['Climbing'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

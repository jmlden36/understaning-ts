// const person: {
//   name: string;
//   age: number;
// } = {
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    //tuple below
    role: [number, string];
  }= {
  name: 'Matt',
  age: 30,
  hobbies: ['Climbing', 'Running'],
  //tuple below
  role: [2, 'ecologist']
};

let favActivities: string[];
favActivities = ['Climbing'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby + "Is my favorite hobby");
}

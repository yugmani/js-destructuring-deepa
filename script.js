//Destructuring in Arrays
// ******************************

const [name1, name2, ...name3] = ['Andrew', 'Justin', 'Katherine', 'Jessica'];

console.log(name1); //Andrew
console.log(name2); //Justin
console.log(name3); //["Katherine", "Jessica"] -->array?

//skip variables
const [a, , , ...c] = [1, 2, 3, 4, 5, 6];

console.log('a: ', a); // a: 1
console.log('c: ', c); // c: [4, 5, 6]
//array elements 2,3 are skipped

//Assign default value while Destructuring
// *****************************************

const [name, street = 'Beverly Hills', age = 'Minor', phone] = [
  'Yoog',
  ,
  ,
  undefined,
  null,
];

console.log(name); //Yoog
console.log(street); //Beverly Hills  ?
console.log(age); //Minor ?
console.log(phone); //undefined

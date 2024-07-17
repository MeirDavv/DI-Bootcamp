import persons from './data.js';

const avg = ((persons) => persons.reduce((a,b) => a+b.age,0) / persons.length);

console.log(avg(persons));
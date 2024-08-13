
interface EmployeeInterface {
  [key:string ]: string | number | boolean
  name: string,
  age: number,
  role: string
}

let employee1: EmployeeInterface = {
  name: 'John',
  age: 23,
  role: 'Fullstack Developer'
}

employee1.active=true

interface Student {
  name:string,
  grade:number,
  courses?: string[]
}

let student1:Student = {
  name:"Meir",
  grade:23,
  courses: ['math','physics']
}

const logStudent = (student: Student, key: keyof Student):void =>{
  console.log(key,student[key])
}

Object.keys(student1).forEach(key=>{
  logStudent(student1,key as keyof Student)
})

type keys = "name" | "age" | "role";

type employeeType = Record<keys, string| number>

let employee2:employeeType = {
  name:"Anne",
  age:77,
  role:7
}

for(let key in employee2){
  console.log(key,employee2[key as keyof typeof employee2])
}


// const strEcho = (value:string):string =>value

// const echo = <T>(value:T):T => value 

const isObj = <T>(arg: T): {arg:T,is:boolean} => {
  // return (typeof arg === 'object' && !Array.isArray(arg) && arg!== null)
  if(Array.isArray(arg) && !arg.length){
    return {arg, is: false}
  }
  if(typeof arg === 'object' && !Array.isArray(arg) && arg!== null){
    return {arg,is: true}
  }
  return {arg, is: !!arg}
}


interface hasId {
  id: number
}

const checkUser = <T extends hasId>(user:T): T => {
  return user
}

console.log(checkUser({id:1, name:'John'}));



const userJson = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];




const getUsersInfo = <T extends hasId, K extends keyof T>(users: T[], key: K): T[K][] =>{
  return users.map(user => user[key])
}

console.log(getUsersInfo(userJson,"email"))


//utility types

interface Post {
  id: number;
  title: string;
  content: string;
  author?: string;
}

const post1 : Post={
  id: 1,
  title: 'title',
  content: 'content',
  // author: 'John'
}

const updatePost = (post : Post, update:Partial<Post>):  Post => {
  return {...post, ...update}
}

console.log(updatePost(post1,{title:'bla bla bla'}))

type MiniPost = Pick<Post,"id" | "title">
type OtherPost = Omit<Post,"id" | "title">

type Grades = 'A' | 'B' | 'C' | 'D' | 'F'
type Passes = Exclude <Grades,'D' | 'F'>
type Failed = Extract <Grades,'D' | 'F'>
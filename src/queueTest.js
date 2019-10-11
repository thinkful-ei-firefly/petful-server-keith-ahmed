const Queue = require("./pets");

let cat = [
  {
    name: "Prince",
    age: "11",
    breed: "persian",
    imgURL: "null",
    imgDesc: "null",
    story: 'loved very much',
    sex: 'male'
  },
  {
    name: "Tabby",
    age: "1",
    breed: "tabby",
    imgURL: "null",
    imgDesc: "null",
    story: 'loved very much',
    sex: 'female'
  },
  {
    name: "Raptor",
    age: "7",
    breed: "hairless",
    imgURL: "null",
    imgDesc: "null",
    story: 'loved very much',
    sex: 'male'
  }
];
let dog = [
  {
    name: "Sunny",
    age: "15",
    breed: "golden doodle",
    imgURL: "null",
    imgDesc: "null",
    story: 'loved very much',
    sex: 'male'
  },
  {
    name: "Jerico",
    age: "1",
    breed: "golden retriever",
    imgURL: "null",
    imgDesc: "null",
    story: 'loved very much',
    sex: 'female'
  },
  {
    name: "Raptor",
    age: "7",
    breed: "husky",
    imgURL: "null",
    imgDesc: "null",
    story: 'loved very much',
    sex: 'male'
  }
];

let cats = new Queue()
let dogs = new Queue()

function main(){
  for (let i = 0; i < 3; i++){
    cats.enqueue(cat[i])
    dogs.enqueue(dog[i])
  }
}

main()

let temp = cats.getNext()
console.log(temp.name)
temp = cats.getNext(temp)
console.log(temp.name)
temp = cats.getNext(temp)
console.log(temp.name)
temp = cats.getNext(temp)
console.log(temp)
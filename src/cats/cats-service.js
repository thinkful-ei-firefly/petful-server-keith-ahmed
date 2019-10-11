const Queue = require("../pets");
const People = require('../peopleQueue')
let cats = new Queue();
cats.enqueue({
  name: "Prince",
  age: "11",
  breed: "persian",
  imgURL: "null",
  imgDesc: "null",
  story: "loved very much",
  sex: "male"
});
cats.enqueue({
  name: "Tabby",
  age: "1",
  breed: "tabby",
  imgURL: "null",
  imgDesc: "null",
  story: "loved very much",
  sex: "female"
});
cats.enqueue({
  name: "Raptor",
  age: "7",
  breed: "hairless",
  imgURL: "null",
  imgDesc: "null",
  story: "loved very much",
  sex: "male"
});

let people = new People()

const catsService = {
  getCat(name) {
    let temp= cats.getNext(name);
    return {
      name: temp.name,
      sex: temp.sex,
      age: temp.age,
      breed: temp.breed,
      imgURL: temp.imgURL,
      imgDesc: temp.imgDesc,
      story: temp.story,
    }
  },
  deleteCat() {
    if (cats.getNext()) {
      people.dequeue()
      return cats.dequeue();
    }
  },
  joinQueue(name){
    people.enqueue(name)
  }
};

module.exports = catsService;

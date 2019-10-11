const Queue = require("../pets");
const People = require('../peopleQueue')
let dogs = new Queue();
dogs.enqueue({
  name: "Sunny",
  age: "15",
  breed: "golden doodle",
  imgURL: "null",
  imgDesc: "null",
  story: "loved very much",
  sex: "male"
});
dogs.enqueue({
  name: "Jerico",
  age: "1",
  breed: "golden retriever",
  imgURL: "null",
  imgDesc: "null",
  story: "loved very much",
  sex: "female"
});
dogs.enqueue({
  name: "Raptor",
  age: "7",
  breed: "husky",
  imgURL: "null",
  imgDesc: "null",
  story: "loved very much",
  sex: "male"
});

let people = new People()

const dogsService = {
  getDog(name) {
    let temp= dogs.getNext(name);
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
  deleteDog() {
    if (dogs.getNext()) {
      people.dequeue()
      return dogs.dequeue();
    }
    // need to add people and possibly history
  },
  joinQueue(name){
    people.enqueue(name)
  }
};

module.exports = dogsService;

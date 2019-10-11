const Queue = require("../pets");
const People = require("../peopleQueue");
let dogs = new Queue();
dogs.enqueue({
  name: "Sunny",
  age: "15",
  breed: "golden doodle",
  imgURL: "https://www.thesprucepets.com/thmb/PkUlkF8p89UYmug-etoLkixX1aU=/3920x2580/filters:fill(auto,1)/running-goldendoodle-121536291-0f6c9dfc9e184e078ab4163a8d420fd1.jpg",
  imgDesc: "playful dog in grass",
  story: "loved very much",
  sex: "male"
});
dogs.enqueue({
  name: "Jerico",
  age: "1",
  breed: "golden retriever",
  imgURL: "https://www.dogbreedslist.info/uploads/allimg/dog-pictures/Golden-Retriever-2.jpg",
  imgDesc: "good boy stares at camera",
  story: "loved very much",
  sex: "female"
});
dogs.enqueue({
  name: "Raptor",
  age: "7",
  breed: "husky",
  imgURL: "https://www.thesprucepets.com/thmb/LkPSN5w13M0iYTkztuYjCTorh6g=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/husky-dog-lying-in-the-915124768-34493760df9648f99961b50a16c39529.jpg",
  imgDesc: "Husky lying in snow",
  story: "loved very much",
  sex: "male"
});

let people = new People();

const dogsService = {
  getDog() {
    let temp = dogs.getNext();
    return {
      name: temp.name,
      sex: temp.sex,
      age: temp.age,
      breed: temp.breed,
      imgURL: temp.imgURL,
      imgDesc: temp.imgDesc,
      story: temp.story
    };
  },
  getAll() {
    return dogs.getAll();
  },
  deleteDog() {
    if (dogs.getNext()) {
      people.dequeue();
      return dogs.dequeue();
    }
    // need to add people and possibly history
  },
  joinQueue(name) {
    people.enqueue(name);
  }
};

module.exports = dogsService;

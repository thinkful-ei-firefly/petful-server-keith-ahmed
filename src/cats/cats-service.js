const Queue = require("../pets");
const People = require("../peopleQueue");
let cats = new Queue();
cats.enqueue({
  name: "Prince",
  age: "11",
  breed: "persian",
  imgURL: "https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Persian-1.jpg",
  imgDesc: "Grey persian with yellow eyes",
  story: "loved very much",
  sex: "male"
});
cats.enqueue({
  name: "Tabby",
  age: "1",
  breed: "tabby",
  imgURL: "https://www.thehappycatsite.com/wp-content/uploads/2017/10/30-Awesome-Tabby-Cat-Facts-HC-long.jpg",
  imgDesc: "small tabby playing by dresser",
  story: "loved very much",
  sex: "female"
});
cats.enqueue({
  name: "Raptor",
  age: "7",
  breed: "hairless",
  imgURL: "https://www.scienceabc.com/wp-content/uploads/2019/01/Sphynx-cat1.jpg",
  imgDesc: "hairless sphinx cat",
  story: "loved very much",
  sex: "male"
});

let people = new People();

const catsService = {
  getCat() {
    let temp = cats.getNext();
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
    return cats.getAll();
  },
  deleteCat() {
    if (cats.getNext()) {
      people.dequeue();
      return cats.dequeue();
    }
  },
  joinQueue(name) {
    people.enqueue(name);
  }
};

module.exports = catsService;

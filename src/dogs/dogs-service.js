const { Queue } = require('../queue');

let dogs = new Queue();

dogs.enqueue({
  image:
    'https://www.thesprucepets.com/thmb/PkUlkF8p89UYmug-etoLkixX1aU=/3920x2580/filters:fill(auto,1)/running-goldendoodle-121536291-0f6c9dfc9e184e078ab4163a8d420fd1.jpg',
  name: 'Sunny',
  gender: 'Male',
  age: 15,
  breed: 'Golden Doodle',
  story: 'Loved very much'
});

dogs.enqueue({
  image: 'https://www.dogbreedslist.info/uploads/allimg/dog-pictures/Golden-Retriever-2.jpg',
  name: 'Jerico',
  gender: 'Female',
  age: 1,
  breed: 'Golden retriever',
  story: 'Loved very much'
});
dogs.enqueue({
  image: 'https://www.thesprucepets.com/thmb/LkPSN5w13M0iYTkztuYjCTorh6g=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/husky-dog-lying-in-the-915124768-34493760df9648f99961b50a16c39529.jpg',
  name: 'Raptor',
  gender: 'Male',
  age: 7,
  breed: 'Husky',
  story: 'Loved very much'
});


const DogService = {
  dogs,

  getDogs() {
    return this.dogs;
  },

  adoptDog() {
    dogs.dequeue();
    return dogs;
  },

};

module.exports = DogService;

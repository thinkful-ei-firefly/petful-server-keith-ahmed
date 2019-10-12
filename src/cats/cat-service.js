const { Queue } = require('../queue');

let cats = new Queue();


cats.enqueue({
  image:"https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Persian-1.jpg",
  name: 'Prince',
  gender: 'male',
  age: 11,
  breed: 'persian',
  story: 'Loved very much'
});

cats.enqueue({
  image: 'https://www.thehappycatsite.com/wp-content/uploads/2017/10/30-Awesome-Tabby-Cat-Facts-HC-long.jpg',
  name: 'Tabby',
  gender: 'female',
  age: 1,
  breed: 'tabby',
  story: 'Loved very much'
});
cats.enqueue({
  image: 'https://www.scienceabc.com/wp-content/uploads/2019/01/Sphynx-cat1.jpg',
  name: 'Raptor',
  gender: 'Male',
  age: 7,
  breed: 'Hairless',
  story: 'Loved very much'
});


const CatService = {
  cats,

  getCats() {
    return this.cats;
  },
  adoptCat() {
    cats.dequeue();
    return cats;
  }, 

};

module.exports = CatService;

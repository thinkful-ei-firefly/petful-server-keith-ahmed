const { Queue } = require('../queue');

let adopters = new Queue();

const AdoptersService = {
  adopters,

  getAdopters() {
    return this.adopters;
  },
  
  newAdopter(name){
    adopters.enqueue(name);
    return adopters;
  },

  removeAdopter(){
    adopters.dequeue();
    return adopters;
  }
};

module.exports = AdoptersService;

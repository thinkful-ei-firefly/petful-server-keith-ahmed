const People = require("../peopleQueue");

let people = new People()

const peopleService = {
  join(user){
    people.enqueue(user)
  },
  leave(){
    people.dequeue()
  },
  getNext(){
    return people.getNext()
  },
  place(user){
    return people.placeInList(user)
  },
  length(){
    return people.length()
  }
}
module.exports = peopleService
const express = require('express');
const DogService = require('./dogs-service');

const DogsRouter = express.Router();

DogsRouter.route('/')
.get((req, res, next) => {
  const dogs = DogService.getDogs();
  if (!dogs) {
    return res
      .status(400)
      .json({ error: "Sorry we can't find any available dogs" });
  }
  return res.json(dogs);
}) //end of get endpoint
.delete((req, res, next) => {
  const dogs = DogService.adoptDog()
  if(!dogs){
    return res
    .status(400)
    .json({
      error: "Sorry we can't find a dog to adopt"
    })
  }
  return res.json(dogs)
})

module.exports = DogsRouter;

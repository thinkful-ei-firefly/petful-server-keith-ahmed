const express = require('express')
const catsService = require('./cats-service')
const dogsService = require("../dogs/dog-service");
const catsRouter = express.Router()
const jsonBodyParser = express.json()

catsRouter
  .route('/')
  .get(jsonBodyParser, (req, res) => {
    let {user} = req.body.user
    
    res.status(200).json({cat: catsService.getCat(), dog: dogsService.getDog()})
  })
  .delete((req, res, next) => {
    const cats = catsService.deleteCat()
    if (!cats) {
      return res
        .status(400)
        .json({
          error: "There are no cats left"
        })
    }
    return res.json(cats)
  })

catsRouter
  .route('/cats')
  .get((req, res) => {
    res.status(200).json(catsService.getCat())
  })
  .delete((req, res, next) => {
    const cats = catsService.deleteCat()
    if (!cats) {
      return res
        .status(400)
        .json({
          error: "There are no cats left"
        })
    }
    return res.json(cats)
  })

  catsRouter.route("/cats/all").get((req, res) => {
    res.status(200).json(catsService.getAll());
  });

  catsRouter
  .route("/dogs")
  .get((req, res) => {
    res.status(200).json(dogsService.getDog());
  })
  .delete((req, res, next) => {
    const dog = dogsService.deleteDog();
    if (!dog) {
      return res.status(400).json({
        error: "There are no more dogs"
      });
    }
    return res.json(dog);
  });

  catsRouter.route("/dogs/all").get((req, res) => {
  res.status(200).json(dogsService.getAll());
});


module.exports = catsRouter
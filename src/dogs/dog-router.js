const express = require('express');
const dogRouter = express.Router();
const dogsService = require('./dog-service')

dogRouter
    .route('/')
    .get((req, res) => {
        res.status(200).json(dogsService.getDog())
    })
    .delete((req, res, next) => {
        const dog = dogsService.deleteDog()
        if (!dog) {
          return res
            .status(400)
            .json({
              error: "There are no more dog"
            })
        }
        return res.json(dog)
      })
    
    
    module.exports = dogRouter
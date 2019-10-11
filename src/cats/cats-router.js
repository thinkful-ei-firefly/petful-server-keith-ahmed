const express = require('express')
const catsService = require('./cats-service')
const catsRouter = express.Router()

catsRouter
  .route('/')
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

  catsRouter.route("/all").get((req, res) => {
    res.status(200).json(catsService.getAll());
  });


module.exports = catsRouter
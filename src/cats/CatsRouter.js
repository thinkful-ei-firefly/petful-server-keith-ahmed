const express = require('express');
const CatsService = require('./cat-service');

const CatsRouter = express.Router();

CatsRouter.route('/')
  .get((req, res, next) => {
    const cats = CatsService.getCats();
    if (!cats) {
      return res
        .status(400)
        .json({ error: "Sorry we didn't find any cats available to adopt" });
    }
    return res.json(cats);
  }) //end of get route
  .delete((req, res, next) => {
    const cats = CatsService.adoptCat();
    if (!cats) {
      return res.status(400).json({
        error: "Sorry we didn't find any cats to adopt"
      });
    }
    return res.json(cats);
  });

module.exports = CatsRouter;

const express = require('express');
const AdoptersService = require('./adopters-service');

const jsonBodyParser = express.json();
const AdoptersRouter = express.Router();

AdoptersRouter.route('/')
  .get((req, res, next) => {
    const adopters = AdoptersService.getAdopters();
    if (!adopters) {
      return res
        .status(400)
        .json({ error: "We didn't find anyone in line to adopt" });
    }
    return res.json(adopters);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const name = req.body.name;
    const adopters = AdoptersService.newAdopter(name);
    if (!adopters) {
      return res
        .status(400)
        .json({ error: "We didn't find anyone in line to adopt" });
    }
    return res.json(adopters);
  })
  .delete((req, res, next) => {
    const adopters = AdoptersService.removeAdopter();
    if (!adopters) {
      return res
        .status(400)
        .json({ error: "We didn't find anyone in line to adopt" });
    }
    return res.json(adopters);
  });

module.exports = AdoptersRouter;

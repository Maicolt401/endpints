const express = require("express");
const { listKings, getKind } = require("../controllers/kingsController");

const kingsRouter = express.Router();

kingsRouter.get("/kinds/list", listKings);
kingsRouter.get("/kinds/kind/:id", getKind);
module.exports = kingsRouter;

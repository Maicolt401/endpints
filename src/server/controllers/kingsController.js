const chalk = require("chalk");
const debug = require("debug")("kinds:server:kindsController");
const Kind = require("../../database/moduls/kingsSchema");

const listKings = async (req, res, next) => {
  try {
    const kind = await Kind.find();
    res.status(200).json({ kind });
    debug(chalk.green("here you have the list kinds"));
  } catch (error) {
    debug(chalk.red("kinds not found in the document"));
    error.statusCode = 400;
    error.customMessage = "bad request";
    next(error);
  }
};

const getKind = async (req, res, next) => {
  const { id } = req.params;
  try {
    const kindId = await Kind.findById(id);
    res.status(200).json({ kindId });
    debug(chalk.green("here you have the kinds"));
  } catch (error) {
    debug(chalk.red("kind not found in the document"));
    error.statusCode = 400;
    error.customMessage = "bad request";
    next(error);
  }
};

module.exports = { listKings, getKind };

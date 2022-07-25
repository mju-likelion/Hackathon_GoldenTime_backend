import express from "express";
import { Hospital } from "../../models";
const { Op } = require("sequelize");
const app = express();

app.get("/:address", async (req, res) => {
  const { address } = req.params;
  console.log(address);
  const findaress = await Hospital.findAll({
    attributes: ["dutyName", "dutyAddr", "dutyTel3"],
    where: {
      dutyAddr: {
        [Op.like]: `%${address}%`,
      },
    },
  });
  console.log(findaress);
  res.json({
    findaress,
  });
});

export default app;

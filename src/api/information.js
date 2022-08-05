import express from "express";
import { Symptom } from "../../models";

const app = express();

app.get("/:symptom", async (req, res) => {
  const { symptom } = req.params;
  const inform = await Symptom.findAll({
    attributes: ["symptomName", "firstAid", "notice"],
    where: {
      symptomName: symptom,
    },
  });
  if (!inform.length) {
    // 조건에 맞는 병원이 없는 경우
    return res.send({
      error: "There is no information to meet the conditions.",
    });
  }
  res.send({ data: inform });
});

export default app;

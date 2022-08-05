import express from "express";
import { Hospital, Symptom, Intermediate, Department } from "../../models";
import { Op } from "sequelize";

const app = express();

// 구별 병원조회
app.get("/inquire", async (req, res) => {
  const { address } = req.query;
  const { symptom } = req.query;
  const attrList = ["dutyName", "dutyAddr", "dutyTel3", "wgs84Lat", "wgs84Lon"];
  let findHospital;

  // eslint-disable-next-line eqeqeq
  if ((symptom == "미입력") & (address == "미입력")) {
    findHospital = await Hospital.findAll({
      attributes: attrList,
    });
    return res.send(findHospital);
  }
  // 사용자가 증상을 입력하지 않은 경우
  // eslint-disable-next-line eqeqeq
  if (symptom == "미입력") {
    findHospital = await Hospital.findAll({
      attributes: attrList,
      where: {
        dutyAddr: {
          [Op.like]: `%${address}%`,
        },
      },
    });
  }
  // 사용자가 증상을 입력한 경우
  else if (symptom) {
    findHospital = await Hospital.findAll({
      include: [
        {
          model: Intermediate,
          include: [
            {
              model: Department,
              include: [
                {
                  model: Symptom,
                  where: {
                    symptomName: symptom,
                  },
                  attributes: [],
                },
              ],
              attributes: [],
            },
          ],
          attributes: [],
        },
      ],
      attributes: attrList,
      where: {
        dutyAddr: {
          [Op.like]: `%${address}%`,
        },
      },
    });
  }
  if (!findHospital.length) {
    // 조건에 맞는 병원이 없는 경우
    return res.send({
      error: "Can't find a hospital that meets your criteria",
    });
  }
  res.send(findHospital);
});

// 병원 상세 조회
app.get("/detail", async (req, res) => {
  const { wgs84Lon } = req.query;
  const { wgs84Lat } = req.query;

  const findHospital = await Hospital.findAll({
    attributes: ["dutyName", "dutyAddr", "dutyTel3"],
    where: {
      wgs84Lon: {
        [Op.like]: `${wgs84Lon}%`,
      },
      wgs84Lat: {
        [Op.like]: `${wgs84Lat}%`,
      },
    },
  });
  res.json(findHospital);
});

export default app;

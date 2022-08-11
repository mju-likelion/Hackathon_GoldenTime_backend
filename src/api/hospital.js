import express from "express";
import { Hospital, Symptom, Intermediate, Department } from "../../models";
import { Op } from "sequelize";

const app = express();

// 구별 병원조회
app.get("/inquire", async (req, res) => {
  const { address, symptom } = req.query;
  const attrList = [
    "dutyName",
    "dutyAddr",
    "dutyTel3",
    "wgs84Lat",
    "wgs84Lon",
    "image",
  ];
  let findHospital;

  // 사용자가 증상을 입력하지 않은 경우
  if (!symptom) {
    findHospital = await Hospital.findAll({
      attributes: attrList,
      where: {
        dutyAddr: {
          [Op.like]: address ? `%${address}%` : `%`,
        },
      },
    });
  }

  // 사용자가 증상을 입력한 경우
  else {
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
                  required: true,
                  attributes: [],
                },
              ],
              required: true,
              attributes: [],
            },
          ],
          required: true,
          attributes: [],
        },
      ],
      required: true,
      attributes: attrList,
      where: {
        dutyAddr: {
          [Op.like]: `%${address}%`,
        },
      },
    });
  }

  // 조건에 맞는 병원이 없는 경우
  if (!findHospital.length) {
    return res.json({
      error: "Can't find a hospital that meets your criteria",
    });
  }
  res.json(findHospital);
});

// 병원 상세 조회
app.get("/detail", async (req, res) => {
  const { wgs84Lon, wgs84Lat } = req.query;

  const findHospital = await Hospital.findAll({
    attributes: ["dutyName", "dutyAddr", "dutyTel3", "image"],
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

// 증상입력	 증상미입력

// 구 입력	  정상	  모든 구
// 구 미입력	 뭐하지   전체병원

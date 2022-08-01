import express from "express";
import { Hospital, Symptom, Department } from "../../models";
import { Op } from "sequelize";

const app = express();

// 구별 병원조회
app.get("/inquire", async (req, res) => {
  const address = req.query.address;
  const symptom = req.query.symptom;
  let returnHospital;

  // 사용자가 증상을 입력한 경우
  if (symptom) {
    // 사용자가 입력한 증상을 취급하는 부서 조회
    const findSymptom = await Symptom.findAll({
      raw: true,
      attributes: ["departmentName"],
      symptomName: symptom,
    });

    // 해당 부서가 있는 병원id 조회
    const findHospital = await Department.findAll({
      raw: true,
      attributes: ["hospitalId"],
      where: {
        // eslint-disable-next-line no-undef
        departmentName: findSymptom[0].departmentName,
      },
    });

    const idArr = [];
    for (let i = 0; i < findHospital.length; i++) {
      idArr.push(findHospital[i].hospitalId);
    }

    // 사용자가 입력한 증상 및 위치에 해당하는 병원 조회
    returnHospital = await Hospital.findAll({
      attributes: ["dutyName", "dutyAddr", "dutyTel3", "wgs84Lat", "wgs84Lon"],
      where: {
        dutyAddr: {
          [Op.like]: `%${address}%`,
        },
        id: {
          [Op.in]: idArr,
        },
      },
    });
  } else {
    // 사용자가 증상을 입력하지 않은 경우
    returnHospital = await Hospital.findAll({
      attributes: ["dutyName", "dutyAddr", "dutyTel3", "wgs84Lat", "wgs84Lon"],
      where: {
        dutyAddr: {
          [Op.like]: `%${address}%`,
        },
      },
    });
  }
  if (!returnHospital.length) {
    // 조건에 맞는 병원이 없는 경우
    return res.send({
      error: "Can't find a hospital that meets your criteria",
    });
  }
  res.send(returnHospital);
});

app.get("/detail", async (req, res) => {
  const { wgs84Lon } = req.query;
  const { wgs84Lat } = req.query;

  const findaress = await Hospital.findAll({
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
  res.json({
    data: findaress,
  });
});

export default app;

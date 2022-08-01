import express from "express";
import { Hospital, Symptom, Department } from "../../models";

const app = express();

app.get("/storeHost", async (req, res) => {
  for (let i = 0; i < 63; i++)
    await Hospital.create({
      dutyName: req.body[i].dutyName,
      dutyAddr: req.body[i].dutyAddr,
      dutyTel3: req.body[i].dutyTel3,
      wgs84Lat: req.body[i].wgs84Lat,
      wgs84Lon: req.body[i].wgs84Lon,
    });
});

app.get("/storeDept", async (req, res) => {
  for (let i = 0; i < 285; i++)
    await Department.create({
      HospitalId: req.body[i].hospitalId,
      departmentName: req.body[i].departmentName,
    });
});

app.get("/storeSymp", async (req, res) => {
  for (let i = 0; i < 1; i++)
    await Symptom.create({
      departmentName: req.body[i].departmentName,
      symptomName: req.body[i].symptomName,
    });
});

export default app;

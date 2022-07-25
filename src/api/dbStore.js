import express from "express";
import { Hospital } from "../../models";
import { Symptom } from "../../models";
const app = express();

app.get("/storeHost", async (req, res) => {
  for (let i = 0; i < 63; i++)
    await Hospital.create({
      dutyName: req.body[i].dutyName,
      dutyAddr: req.body[i].dutyAddr,
      dutyTel3: req.body[i].dutyTel3,
      wgs84Lon: req.body[i].wgs84Lon,
      wgs84Lat: req.body[i].wgs84Lat,
    });
});

app.get("/storeSymp", async (req, res) => {
  for (let i = 0; i < 63; i++)
    await Symptom.create({
      MKioskTy1: req.body[i].MKioskTy1,
      MKioskTy2: req.body[i].MKioskTy2,
      MKioskTy3: req.body[i].MKioskTy3,
      MKioskTy4: req.body[i].MKioskTy4,
      MKioskTy5: req.body[i].MKioskTy5,
      MKioskTy6: req.body[i].MKioskTy6,
      MKioskTy7: req.body[i].MKioskTy7,
      MKioskTy8: req.body[i].MKioskTy8,
      MKioskTy10: req.body[i].MKioskTy10,
      MKioskTy11: req.body[i].MKioskTy11,
    });
});

export default app;

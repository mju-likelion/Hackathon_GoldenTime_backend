import express from "express";
import hospital from "./hospital";
import information from "./information";

const app = express();

app.use("/hospital", hospital);
app.use("/information", information);

export default app;

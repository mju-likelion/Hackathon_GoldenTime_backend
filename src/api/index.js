import express from "express";
import dbStore from "./dbStore";
import hospital from "./hospital";

const app = express();
app.use("/dbStore", dbStore);
app.use("/hospital", hospital);

export default app;

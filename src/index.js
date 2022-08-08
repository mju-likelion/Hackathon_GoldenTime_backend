import express from "express";
import { sequelize } from "../models";
import api from "./api";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", api);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

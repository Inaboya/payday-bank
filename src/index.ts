import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json
app.use(bodyParser.json()) 

app.use("/api/v1", router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
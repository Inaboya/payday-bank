import express, { Request, Response, NextFunction } from "express";
import path from "path";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
import dotenv from "dotenv";
// import passport from "passport";

const port = process.env.PORT || 3000;

// dotenv.config();

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


// app.use(passport.initialize());

app.listen(port, () => console.log(`Server is running on port ${port}`));
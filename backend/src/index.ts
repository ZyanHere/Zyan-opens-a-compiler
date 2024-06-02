import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRouter } from "./routes/userRouter";
import cookieParser from "cookie-parser";

const app = express();
config();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", process.env.CLIENT_URL!], // Allow local and production frontend URLs
  })
);

app.use("/compiler", compilerRouter);
app.use("/user", userRouter);

dbConnect();

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

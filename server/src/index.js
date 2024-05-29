import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { RecipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", RecipesRouter);

mongoose.connect(
  "mongodb+srv://lavanka6:newLavaDB@cluster0.xjuh5mn.mongodb.net/recipes"
);

app.listen(3001, () => console.log("SERVER STARTED!"));

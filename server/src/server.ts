import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book";
import authRoute from "./routes/auth";

const main = async () => {
  const app = express();
  const PORT = process.env.PORT || 5000;
  try {
    await mongoose.connect("mongodb://localhost/DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/auth", authRoute);
    app.use("/api/book", bookRoute);

    app.listen(PORT, () => {
      console.log(`app is listen on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
main();

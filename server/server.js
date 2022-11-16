import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = 4000;

const app = express();
app.use(cors);
mongoose
  .connect(
    "mongodb+srv://rishabsah:rishabsah@cluster0.qywmwj6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("connected");
});

app.listen(PORT, () => {
  console.log("server running at port 4000");
});

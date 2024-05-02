import express from "express";
import "dotenv/config";

import mongoose from "mongoose";
import User from "./models/user.js";
import router from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use("/users", router)

await mongoose.connect("mongodb+srv://nhaidari089:nunaIPSEiqhJ2j6r@cluster0.002bsuo.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0");

app.get('/', (req, res)=> {
  res.send("Hello from lab-319-5")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  
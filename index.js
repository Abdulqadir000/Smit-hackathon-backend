// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import connectDB from "./lib/DBconnect.js";
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to DB
// connectDB();

// // Routes
// app.use("/api/auth", authRoutes);

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import loanRequestRouter from "./routes/loanRequest.js";
import connectDB from "./lib/DBconnect.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/loan", loanRequestRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

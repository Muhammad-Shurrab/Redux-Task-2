const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./config/db");
const jwtAuth = require("./routes/jwtAuth");
const membersRouters = require("./routes/adminRoutes");
port = process.env.PORT;

// req body
app.use(express.json());
app.use(cors());

// routes
app.use("/api/auth", jwtAuth);
// app.use("/admin");
app.use("/api/members", membersRouters);

app.listen(port, () => {
  console.log(`Your Server Running at ${port}`);
});

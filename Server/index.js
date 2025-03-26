require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const sendMessageRoute = require("./routes/sendMessage");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "https://grupomapsempresas.com.br",
  // origin: process.env.FRONTEND_URL || "http://localhost:3000",
}));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", sendMessageRoute);

module.exports = app;

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
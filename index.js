const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// routes
const insuranceTypes = require("./routes/InsuranceTypes");

const app = express();

// body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/insuranceTypes", insuranceTypes);

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow
      .bold
  );
});

// handle un-handled promise re-jections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error : ${error.message}`. red.bold);

  // close server and exit process
  server.close(() => process.exit(1));
});

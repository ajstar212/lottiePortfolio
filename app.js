const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

// EJS
app.set("view engine", "ejs");

// Express body parser
const middleware = [
  morgan("dev"),
  express.static(path.join(__dirname, "public")),
  express.json(),
];
app.use(middleware);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", require("./routes/home"));

const PORT = process.env.PORT || 5000;
//Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

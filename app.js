const express = require("express");
//const path = require("path");
//const cookieParser = require("cookie-parser");
//const logger = require("morgan");

const routes = require("./routes");
//const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");

const app = express();

//app.use(logger("dev"));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

//app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use(express.json());
app.use(routes);

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});

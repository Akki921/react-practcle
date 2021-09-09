const coonectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

coonectToMongo();

//fet code from expressjs.com
const app = express();
const port = 5000;

//for using res.body
app.use(cors());
app.use(express.json());

// available routes from routes folder
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`INoteBook Backend listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
app.use(express.json());

app.use("/api", require("./routes"));

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server is runing on port 5000");
});

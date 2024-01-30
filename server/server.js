const express = require("express");
const app = require("./app");
const port = 3000;

//Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

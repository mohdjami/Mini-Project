const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
//Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

const port = 3000;

// app.use("/api/auth", authRouter);
app.get("/", async (req, res) => {
  await prisma.lawyer.create({
    data: {
      name: "Anant",
      email: "Anant@mail.com",
      password: "1234",
    },
  });
  res.send("Hello World!");
});

module.exports = app;

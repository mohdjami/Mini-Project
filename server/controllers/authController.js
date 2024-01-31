const { PrismaClient } = require("@prisma/client");
const { router } = require("../app");
const argon2 = require("argon2");
const prisma = new PrismaClient();

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const lawyer = await prisma.lawyer.findUnique({
      where: {
        email,
      },
    });
    const passwordValid = argon2.verify(lawyer.password, password);
    if (!passwordValid) {
      throw new Error("Invalid password");
    }
    res.status(200).json({
      status: "success",
      data: {
        lawyer,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password, name, phone, address, description } = req.body;

    const hash = await argon2.hash(password);
    const lawyer = await prisma.lawyer.create({
      data: {
        email,
        password: hash,
        name,
      },
    });
    console.log(lawyer);
    res.status(200).json({
      status: "success",
      data: {
        lawyer,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

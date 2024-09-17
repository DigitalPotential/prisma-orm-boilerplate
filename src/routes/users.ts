import express from "express";
import prisma from "../db/prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Unable to create user" });
  }
});

export default router;

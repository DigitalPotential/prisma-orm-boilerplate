import express from "express";
import prisma from "../db/prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: { title, content, authorId },
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: "Unable to create post" });
  }
});

export default router;

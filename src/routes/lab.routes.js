import express from "express";

const router = express.Router();

// GET /api/lab/test
router.get("/test", (req, res) => {
  res.json({ message: "Lab route working" });
});

// GET /api/lab/attacks
router.get("/attacks", (req, res) => {
  res.json({
    attacks: ["phishing", "malware", "bruteforce"]
  });
});

// POST /api/lab/setup
router.post("/setup", (req, res) => {
  const { environmentName, networkSize } = req.body;

  console.log("📘 Lab setup:", environmentName, networkSize);

  res.json({ success: true });
});

export default router;


import express from "express";
import labRoutes from "./routes/lab.js"
const router = express.Router();

/**
 * Health check
 * GET /api/lab/test
 */
router.get("/test", (req, res) => {
  res.json({ message: "Lab route working" });
});

/**
 * Attack provider for frontend
 * GET /api/lab/attacks
 */
router.get("/attacks", (req, res) => {
  res.json({
    attacks: ["phishing", "malware", "bruteforce"]
  });
});

/**
 * Store lab setup
 * POST /api/lab/setup
 */
router.post("/setup", (req, res) => {
  const { environmentName, networkSize } = req.body;

  console.log("📘 Lab setup received:", environmentName, networkSize);

  res.json({
    success: true,
    environmentName,
    networkSize
  });
});

export default router;

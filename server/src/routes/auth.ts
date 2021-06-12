import { Router } from "express";
const router = Router();

router.post("/google", async (req, res) => {
  const { googleId, username, email, firstname, lastname, avater } = req.body;
  try {
    console.log(googleId);
    res.json({ msg: "save!!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/facebook", async (req, res) => {
  const { facebookId, username, email, firstname, lastname, avater } = req.body;
  try {
    console.log(facebookId);
    res.json({ msg: "save!!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

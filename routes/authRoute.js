import express from "express";
import {
  registerController,
  loginController,
  testController,
  updateData,
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//POST
router.post("/register", registerController);

//login -- POST
router.post("/login", loginController);

//test router
router.get("/test", requireSignIn, isAdmin, testController);

//Update Address
router.post("/addUpdate", updateData);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// deleteAccount

export default router;

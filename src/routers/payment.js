import { Router } from "express";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_...");
const router = Router();

router.get("/", (req, res) => {
  return res.send("teste");
});

export default router;

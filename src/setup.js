import express from "express";
import cors from "cors";

import payment from "./routers/payment.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(payment);

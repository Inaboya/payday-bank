import { Router } from "express";
import { createAccount, resolveAccount, getAllAccounts } from "../controllers"


const router = Router();

router.post("/accounts", createAccount)
router.get("/accounts/:accountNumber", resolveAccount);
router.get("/accounts", getAllAccounts);

export default router;
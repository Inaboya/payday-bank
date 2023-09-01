import { Router } from "express";
import { createAccount, resolveAccount, getAllAccounts } from "../controllers"


const router = Router();

router.post("/account", createAccount)
router.get("/account/:accountNumber", resolveAccount);
router.get("/accounts", getAllAccounts);

export default router;
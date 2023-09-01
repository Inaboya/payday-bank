import { database } from "../database";
import { Request, Response } from "express-serve-static-core";
import { validateAccount } from "../utils";

export const resolveAccount = (req: Request, res: Response) => {
    try {
        const accountNumber = req.params.accountNumber;

        const account = database.find((account: any) => account.accountNumber === accountNumber);

        if (!account) {
            return res.status(404).json({
                status: "error",
                error: "Account not found"
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: account
            })
        }


    } catch (error) {

        console.log(error);
    }
}

export const createAccount = (req: Request, res: Response) => {
    try {
        const { accountType, balance, accountName, DOB } = req.body;

        const { errors, isValid } = validateAccount(req.body);

        if (!isValid) {
            return res.status(400).json({
                status: "error",
                error: errors
            })
        }

        const account = {
            accountNumber: (2000000 + database.length).toString(),
            accountType,
            balance,
            accountName,
            DOB: new Date(DOB).toISOString(),
        }

        database.push(account);

        return res.status(201).json({
            status: "success",
            data: account
        })

    } catch (error) {
        console.log(error);
    }
}

export const getAllAccounts = (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            status: "success",
            data: database
        })
    } catch (error) {
        console.log(error);
    }
}


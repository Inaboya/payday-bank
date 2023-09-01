import Validator from 'validator';

export enum AccountType {
    Checking = 'Checking',
    Savings = 'Savings',
    Credit = 'Credit',
    Loan = 'Loan',
}

export interface IValidator {
    accountName: string;
    accountType: AccountType;
    balance: number;
    DOB: string;
}

export const validateAccount = (data: IValidator) => {
    const { accountName, accountType, balance, DOB } = data;

    const errors: any = {};

    if (!Validator.isLength(accountName, { min: 2, max: 30 })) {
        errors.accountName = "Account name must be between 2 and 30 characters";
    }

    if (!Validator.isAlpha(accountName)) {
        errors.accountName = "Account name must only contain letters";
    }

    if (!Validator.isIn(accountType, Object.values(AccountType))) {
        errors.accountType = "Account type must be either Checking, Savings, Credit or Loan";
    }

    if (!Validator.isNumeric(balance.toString())) {
        errors.balance = "Balance must be a number";
    }

    if (!Validator.isISO8601(DOB)) {
        errors.DOB = "Date of birth must be a valid date";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
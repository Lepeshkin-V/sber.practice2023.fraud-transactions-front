import { columnsTable, fraudsTypes } from "./enums";

export type TransactionType = {
    id: number,
    date: string,
    card: string,
    account: string,
    account_valid_to: string,
    client: string,
    last_name: string,
    first_name: string,
    patronymic: string,
    date_of_birth: string,
    passport: string,
    passport_valid_to: string,
    phone: string
    oper_type: string,
    amount: number,
    oper_result: string,
    terminal: string,
    terminal_type: string,
    city: string,
    address: string,
    age: number,
    count_tr_day: number,
    count_tr_hour: number,
    count_reject_1_hour: number,
    time_last_tr: number,
    changing_the_city: number,
    frauds: FraudType[],
    createdAt: string,
    updatedAt: string,
};

export type FraudType = {
    id: number,
    transaction_id: number,
    fraud_type: fraudsTypes,
    scores: number,
    createdAt: string,
    updatedAt: string,
}

export type SortConfigType = {
    key: string,
    direction: boolean
}

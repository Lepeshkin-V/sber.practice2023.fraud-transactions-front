import { type } from "os";
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
    fraud: FraudType[],
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
    key: number,
    direction: boolean
}

export type StatisticType = {
    date: string,
    freq1: number,
    freq2: number,
    freq3: number,
    freq4: number,
    freq5: number,
    freq6: number,
    total: number
}

export type FraudStatisticType = {
    date: string,
    freq: number
}

export type LineStatisticType = {
    date: string[],
    freq1: number[],
    freq2: number[],
    freq3: number[],
    freq4: number[],
    freq5: number[],
    freq6: number[],
    total: number[]
}

export type LineFraudStatisticType = {
    date: string[],
    freq: number[]
}

export type LineType = {
    labels: string[],
    datasets: DatasetType[],

}

export type DatasetType = {
    data: number[],
    label: string,
    borderColor: string,
    backgroundColor?: string,
    fill: boolean,
    lineTension: number

}
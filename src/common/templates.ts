import { FraudType, SortConfigType, TransactionType,} from "./types"

export const template_transaction: TransactionType = {
    id: 0,
    date: '',
    card: '',
    account: '',
    account_valid_to: '',
    client: '',
    last_name: '',
    first_name: '',
    patronymic: '',
    date_of_birth: '',
    passport: '',
    passport_valid_to: '',
    phone: '',
    oper_type: '',
    amount: 0,
    oper_result: '',
    terminal: '',
    terminal_type: '',
    city: '',
    address: '',
    age: 0,
    count_tr_day: 0,
    count_tr_hour: 0,
    count_reject_1_hour: 0,
    time_last_tr: 0,
    changing_the_city: 0,
    frauds: [],
    createdAt: '',
    updatedAt: ''
}

export const template_fraud: FraudType = {
    id: 0,
    transaction_id: 0,
    fraud_type: "",
    scores: 0,
    createdAt: "",
    updatedAt: ""
}

export const template_sortConfig: SortConfigType = {
    key: '',
    direction: true
}
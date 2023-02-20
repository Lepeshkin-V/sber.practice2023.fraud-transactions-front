import { SortConfigType, TransactionType, UserType } from "./types"

const template_user: UserType = {

    id: '',
    last_name: '',
    first_name: '',
    patronymic: '',
    date_of_birth: '',
    passport: '',
    passport_valid_to: '',
    phone: ''
}

export const template_transaction: TransactionType = {
    id: '',
    date: '',
    card: '',
    account: '',
    account_valid_to: '',
    client: '',
    userInfo: template_user,
    oper_type: '',
    amount: 0,
    oper_result: '',
    terminal: '',
    terminal_type: '',
    city: '',
    address: ''
}

export const sortConfig: SortConfigType = {
    key: '',
    direction: true
}
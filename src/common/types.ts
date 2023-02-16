export type TransactionType = {
    id: string,
    date: string,
    card: string,
    account: string,
    account_valid_to: string,
    client: string,
    userInfo: UserType,
    oper_type: string,
    amount: number,
    oper_result: string,
    terminal: string,
    terminal_type: string,
    city: string,
    address: string
};

export type UserType = {
    id: string,
    last_name: string,
    first_name: string,
    patronymic: string,
    date_of_birth: string,
    passport: string,
    passport_valid_to: string,
    phone: string
};
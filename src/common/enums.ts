export enum columnsTable {
    id = 1,
    date = 2,
    account = 3,
    client = 4,
    passport_valid_to = 5,
    phone = 6,
    oper_type = 7,
    amount = 8,
    oper_result = 9,
    city = 10,
    count_tr_day = 11,
    count_tr_hour = 12,
    count_reject_1_hour = 13,
    time_last_tr = 14,
    fraud = 15,
}

export enum fraudsTypes {
    passport_error = 'Просрочен паспорт',
    fast_transaction = 'Чрезмерная частота транзакций',
    many_rejects = 'Большое количество отказов',
    fast_change_locations = 'Быстрая смена локаций',
    many_transactions = 'Большое количество транзакций',
    night_activity = 'Высокая ночная активность'
}

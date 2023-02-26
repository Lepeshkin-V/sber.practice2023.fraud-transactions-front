export enum columnsTable {
    id = 'id',
    date = 'date',
    account = 'account',
    client = 'client',
    passport_valid_to = 'passport_valid_to',
    phone = 'phone',
    oper_type = 'oper_type',
    amount = 'amount',
    oper_result = 'oper_result',
    terminal_type = 'terminal_type',
    city = 'city',
    age = 'age',
    count_tr_day = 'count_tr_day',
    count_tr_hour = 'count_tr_hour',
    count_reject_1_hour = 'count_reject_1_hour',
    time_last_tr = 'time_last_tr',
    changing_the_city = 'changing_the_city',
}

export enum fraudsTypes {
    passport_error = 'Просрочен паспорт',
    fast_transaction = 'Чрезмерная частота транзакций',
    many_rejects = 'Большое количество отказов',
    fast_change_locations = 'Быстрая смена локаций',
    many_transactions = 'Большое количество транзакций',
    night_activity = 'Высокая ночная активность'
}

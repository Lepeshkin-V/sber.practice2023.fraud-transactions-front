import { TransactionType, FraudType } from './types';

export const frauds: FraudType[] = [
    {
        id: 0,
        transaction_id: 9265458525,
        fraud_type: 'Тип1',
        scores: 1,
        createdAt: "дата",
        updatedAt: 'дата'
    },
    {
        id: 1,
        transaction_id: 9265458525,
        fraud_type: 'Тип2',
        scores: 1,
        createdAt: "дата",
        updatedAt: 'дата'
    }
]

export const transactions: TransactionType[] = [
    {
        id:1,
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41527',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 30,
        changing_the_city: 1,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:2,
        date: '2020-05-04 02:59:16',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-05-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Аспешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:3,
        date: '2021-05-03 02:59:18',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 2,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:4,
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41527',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 30,
        changing_the_city: 1,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:5,
        date: '2020-05-04 02:59:16',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-05-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Аспешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:6,
        date: '2021-05-03 02:59:18',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 2,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:7,
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41527',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 30,
        changing_the_city: 1,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:8,
        date: '2020-05-04 02:59:16',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-05-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Аспешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:9,
        date: '2021-05-03 02:59:18',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 2,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:10,
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41527',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 30,
        changing_the_city: 1,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:11,
        date: '2020-05-04 02:59:16',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-05-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Аспешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:12,
        date: '2021-05-03 02:59:18',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 2,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:13,
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41527',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 30,
        changing_the_city: 1,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:14,
        date: '2020-05-04 02:59:16',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-05-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Аспешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 15,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    },
    {
        id:15,
        date: '2021-05-03 02:59:18',
        card: '41248727012199902565',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41528',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: '2020-05-03',
        phone: 'string',
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25',
        age: 89,
        count_tr_day: 2,
        count_tr_hour: 1,
        count_reject_1_hour: 5,
        time_last_tr: 86400,
        changing_the_city: 0,
        frauds: [],
        createdAt: 'дата',
        updatedAt: 'дата'
    }
]


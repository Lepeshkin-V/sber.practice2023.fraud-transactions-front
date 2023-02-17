import { TransactionType, UserType } from './types';

export const users: UserType[] = [
    {
        id: 'string',
        last_name: 'string',
        first_name: 'string',
        patronymic: 'string',
        date_of_birth: 'string',
        passport: 'string',
        passport_valid_to: 'string',
        phone: 'string'
    }
]

export const transactions: TransactionType[] = [
    {
        id:'9265458529',
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41527',
        userInfo: users[0],
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25'
    },
    {
        id:'9265458521',
        date: '2020-05-04 02:59:17',
        card: '41248727012199902564',
        account: '6475429722',
        account_valid_to: '2021-08-06 00:00:00',
        client:	'7-41528',
        userInfo: users[0],
        oper_type: 'Снятие',
        amount:	11281.49,
        oper_result: 'Успешно',
        terminal: 'POS41732',
        terminal_type: 'POS',
        city: 'Тулун',
        address: 'Тулун, ул. Житкова Бориса, д. 25'
    }
]
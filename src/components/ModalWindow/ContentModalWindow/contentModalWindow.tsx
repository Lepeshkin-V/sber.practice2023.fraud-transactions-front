import style from "./contentModalWindow.module.css"
import { TransactionType } from "../../../common/types";
import { fraudsTypes } from "../../../common/enums";

interface ContentModalWindowProps {
    transaction: TransactionType,
}

const ContentModalWindow = (props: ContentModalWindowProps) => {

    const note = (fraudPattern: fraudsTypes) => {
        let s = '';
        props.transaction.fraud.forEach(f => {
            if (f.fraud_type === fraudPattern) { 
                s = style.note;
            }
        });
        return s;
    }

    return (
        <div className={style.content_block}>
            <div className={style.detales_tr}>
                <p className={style.heads}> <b>Детали транзакции</b></p>
                <p className={note(fraudsTypes.night_activity)}>Дата: {new Date(props.transaction.date).toLocaleString()}</p>
                <p>Номер карты: {props.transaction.card}</p>
                <p>Номер счета: {props.transaction.account}</p>
                <p>Окончание срока действия счета: {new Date(props.transaction.account_valid_to).toLocaleDateString()}</p>
                <p>Тип операции: {props.transaction.oper_type}</p>
                <p>Сумма: {props.transaction.amount}</p>
                <p>Результат операции: {props.transaction.oper_result}</p>
                <p>Терминал: {props.transaction.terminal}</p>
                <p>Тип терминала: {props.transaction.terminal_type}</p>
                <p>Город: {props.transaction.city}</p>
                <p>Адрес: {props.transaction.address}</p>
            </div>
            <div className={style.client_info}>
                <p className={style.heads}><b>Информация о клиенте</b></p>
                <p>Номер: {props.transaction.client}</p>
                <p>Фамилия: {props.transaction.last_name}</p>
                <p>Имя: {props.transaction.first_name}</p>
                <p>Отчество: {props.transaction.patronymic}</p>
                <p>Дата рождения: {props.transaction.date_of_birth}</p>
                <p>Номер паспорта: {props.transaction.passport}</p>
                <p className={note(fraudsTypes.passport_error)}>Окончание срока действия паспорта: {new Date(props.transaction.passport_valid_to).toLocaleDateString()}</p>
                <p>Номер телефона: {props.transaction.phone}</p>
            </div>
            <div className={style.dop_info}>
                <p className={style.heads}><b>Дополнительная информация</b></p>
                <p>Возраст: {props.transaction.age}</p>
                <p className={note(fraudsTypes.many_transactions)}>Количество за день: {props.transaction.count_tr_day}</p>
                <p className={note(fraudsTypes.many_transactions)}>Количество за час: {props.transaction.count_tr_hour}</p>
                <p className={note(fraudsTypes.many_rejects)}>Отказов за час: {props.transaction.count_reject_1_hour}</p>
                <p className={note(fraudsTypes.fast_transaction)}>Время с последней: {props.transaction.time_last_tr}</p>
                <p className={note(fraudsTypes.fast_change_locations)}>Смена города: {props.transaction.changing_the_city}</p>
            </div>
        </div>

    );
}

export default ContentModalWindow
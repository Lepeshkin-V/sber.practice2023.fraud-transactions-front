import style from "./contentModalWindow.module.css"
import { TransactionType } from "../../../common/types";

interface ContentModalWindowProps {
    transaction: TransactionType,
}


const ContentModalWindow = (props: ContentModalWindowProps) => {
    return (
        <div className={style.content_block}>
            <div>
                <p>Детали транзакции</p>
                <p>Дата: {props.transaction.date}</p>
                <p>Номер карты: {props.transaction.card}</p>
                <p>Номер счета: {props.transaction.account}</p>
                <p>Окончание срока действия счета: {props.transaction.account_valid_to}</p>
                <p>Тип операции: {props.transaction.oper_type}</p>
                <p>Сумма: {props.transaction.amount}</p>
                <p>Результат операции: {props.transaction.oper_result}</p>
                <p>Терминал: {props.transaction.terminal}</p>
                <p>Тип терминала: {props.transaction.terminal_type}</p>
                <p>Город: {props.transaction.city}</p>
                <p>Адрес: {props.transaction.address}</p>
            </div>
            <div>
                <p>Информация о клиенте</p>
                <p>Номер: {props.transaction.userInfo.id}</p>
                <p>Фамилия: {props.transaction.userInfo.last_name}</p>
                <p>Имя: {props.transaction.userInfo.first_name}</p>
                <p>Отчество: {props.transaction.userInfo.patronymic}</p>
                <p>Дата рождения: {props.transaction.userInfo.date_of_birth}</p>
                <p>Номер паспорта: {props.transaction.userInfo.passport}</p>
                <p>Окончание срока действия паспорта: {props.transaction.userInfo.passport_valid_to}</p>
                <p>Номер телефона: {props.transaction.userInfo.phone}</p>
            </div>
        </div>

    );
}

export default ContentModalWindow
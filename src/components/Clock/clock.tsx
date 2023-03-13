import { useEffect, useState } from "react";
import style from './clock.module.css'


const Clock = () => {
    const [date, setDate] = useState(new Date());

    const refreshDate = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshDate, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className={style.clock_block}>
            <div className={style.clock}>
                {date.toLocaleString()}
            </div>
        </div>

    );
}

export default Clock;

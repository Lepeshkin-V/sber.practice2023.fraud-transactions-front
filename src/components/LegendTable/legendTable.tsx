import { observer } from 'mobx-react-lite';
import statisticStore from '../../strore/statisticStore';
import style from './legendTable.module.css'

const LegendTable = observer(() => {

    if (statisticStore.isStatistic === false) {
        return (
            <div className={style.legend_block}>
                <div className={style.level1}></div>
                <p className={style.tetx_legend}>1 уровень 0.6</p>
                <div className={style.level2}></div>
                <p className={style.tetx_legend}>2 уровень 0.9, 1.2</p>
                <div className={style.level3}></div>
                <p className={style.tetx_legend}>3 уровень 1.5 {'⩽'}</p>
            </div>
        );
    }
    else {
        return <div className={style.legend_block}></div>
    }

});

export default LegendTable;
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import scoresStore from '../../../strore/scoresStore';
import style from './changeScoresWindowContent.module.css';

const ChangeScoresWindowContent = observer(() => {
   
    useEffect(() => {
        scoresStore.getScores();
    });

    const Changer = () => {
        scoresStore.changeScores();
    }

    return (
        <div className={style.field_block}>
            {scoresStore.patternsList.map(pattern => {
                return (
                    <div key={pattern.fraud_id} className={style.search_blocks}>
                        <div className={style.label_block}>
                            <label className={style.labels}>{pattern.fraud_type}</label>
                        </div>
                        <label>{pattern.scores}</label>
                        <input type='number' onChange={(e) => {
                            const inputScore = Number(e.target.value);
                            if (inputScore >= 0 && inputScore <= 1.5){
                                scoresStore.setChangeScores({ fraud_id: pattern.fraud_id, scores: Number(inputScore) });
                            }
                            else{
                                scoresStore.setChangeScores({fraud_id: pattern.fraud_id, scores : pattern.scores})
                            }
                        }}></input>
                    </div>
                );
            })}
            <div className={style.b_change}>
                <button onClick={() => Changer()}>Изменить</button>
            </div>
        </div>
    )
});

export default ChangeScoresWindowContent;
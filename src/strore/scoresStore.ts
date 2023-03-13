import { PatternsType, ChangeScoresType } from './../common/types';
import { flow, makeAutoObservable } from "mobx";
import { Dictionary } from "lodash";

class ScoresStore {
    patternsList: PatternsType[] = [];
    changeScoresList: Dictionary<number> = {};
    loading: boolean = false;
    error: string | undefined = undefined;


    constructor() {
        makeAutoObservable(this);
    }

    getScores = flow(function* (this: ScoresStore) {
        try {
            this.loading = true;
            const response = yield fetch(`http://127.0.0.1:5000//frauds/info`);
            const patterns = yield response.json();
            this.patternsList = patterns;
            this.patternsList.sort((a, b) => {
                if (a.fraud_id < b.fraud_id) {
                    return -1;
                }
                if (a.fraud_id > b.fraud_id) {
                    return 1;
                }
                return 0;
            });
        } catch (error) {
            if (typeof error === 'string') this.error = error;
        } finally {
            this.loading = false;
        }
    })

    changeScores = flow(function* (this: ScoresStore) {
        try {
            this.loading = true;
            for (const key of Object.keys(this.changeScoresList)) {
                const value = this.changeScoresList[key];
                yield fetch(`http://127.0.0.1:5000/frauds/${key}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ weight: value })
                })
            }
            this.changeScoresList = {};
        } catch (error) {
            if (typeof error === 'string') this.error = error;
        } finally {
            this.loading = false;
        }
    })

    setChangeScores(change: ChangeScoresType) {
        this.changeScoresList[change.fraud_id] = change.scores;
    }
}

const store = new ScoresStore();
export default store;
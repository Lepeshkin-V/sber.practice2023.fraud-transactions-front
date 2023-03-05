import { makeAutoObservable } from 'mobx';
import { fraudStatistic, statisticData } from '../common/data';
import { FraudStatisticType, StatisticType } from './../common/types';

class StatisticStore {
    statisticData: StatisticType[];
    fraudStatisticData: FraudStatisticType[];

    constructor() {
        makeAutoObservable(this)
        this.statisticData = statisticData;
        this.fraudStatisticData = fraudStatistic;
    }
}
const store = new StatisticStore();

export default store;
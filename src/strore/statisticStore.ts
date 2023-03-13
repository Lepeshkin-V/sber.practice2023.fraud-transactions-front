import { action, flow, makeAutoObservable, runInAction } from 'mobx';
import moment from 'moment';
import { DailyStatisticType, HourlyStatisticType } from './../common/types';
import sub from 'date-fns/sub'

class StatisticStore {
    dailyStatisticData: DailyStatisticType[] = [];
    hourlyStatisticData: HourlyStatisticType[] = [];
    loading: boolean = false;
    error: string | undefined = undefined;
    startDate: string = '';
    endDate: string = '';
    isStatistic: boolean = false;
    totalData: number = 0;
    level1: number = 0;
    level2: number = 0;
    level3: number = 0;
    allFraud: number = 0;
    fastChangeLoc: number = 0;
    nightActivity: number = 0;
    errPass: number = 0;
    manyTransactions: number = 0;
    manyRejects: number = 0;
    fastTransactions: number = 0;


    constructor() {
        makeAutoObservable(this)
    }

    setStatistic(statistic: boolean) {
        this.isStatistic = statistic;
    }

    getStatistic = flow(function* (this: StatisticStore) {
        try {
            this.loading = true;
            this.error = undefined;
            yield this.getStartDate();
            this.getDailyStatistic();
            this.getHourlyStatistic();
        } catch (error) {
            if (typeof error === 'string') this.error = error;
        } finally {
            this.loading = false;
        }
    })

    getStartDate = flow(function* (this: StatisticStore) {
        try {
            const response = yield fetch(`http://127.0.0.1:5000/transaction/page?start=${1}&limit=${1}&order=${2}&direction=${1}`);
            const transactions = yield response.json();
            const endDate = new Date(transactions.transactions[0].date);
            this.endDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss');
            this.startDate = moment(sub(endDate, { days: 8 })).format('YYYY-MM-DD HH:mm:ss');
            this.totalData = transactions.totalData;
        } catch (error) {
            throw error;
        }
    })

    getDailyStatistic = flow(function* (this: StatisticStore) {
        const endDate = new Date(this.endDate);
        endDate.setDate(endDate.getDate() + 1);
        const endD = moment(endDate).format('YYYY-MM-DD HH:mm:ss')
        try {
            const response = yield fetch(`http://127.0.0.1:5000/statistics/daily?startDate=${this.startDate}&endDate=${endD}`);
            const statistic = yield response.json();
            runInAction(() => {
                this.dailyStatisticData = statistic;
            });
        } catch (error) {
            throw error;
        }
    })

    getHourlyStatistic = flow(function* (this: StatisticStore) {
        try {
            const response = yield fetch(`http://127.0.0.1:5000/statistics/hourly?date=${this.endDate}`);
            const statistic = yield response.json();
            runInAction(() => {
                this.hourlyStatisticData = statistic;
            });
        } catch (error) {
            throw error;
        }
    })

    @action getLevelStatistic = flow(function* (this: StatisticStore) {
        try {
            const response1 = yield fetch(`http://127.0.0.1:5000/frauds/page?start=${1}&limit=${1}&types=${0}`);
            const response2 = yield fetch(`http://127.0.0.1:5000/frauds/page?start=${1}&limit=${1}&types=${1}`);
            const response3 = yield fetch(`http://127.0.0.1:5000/frauds/page?start=${1}&limit=${1}&types=${2}`);
            const response4 = yield fetch(`http://127.0.0.1:5000/frauds/page?start=${1}&limit=${1}&types=${3}`);
            const response5 = yield fetch(`http://127.0.0.1:5000/frauds/types?start=1&limit=1&fraud_id=1`);
            const response6 = yield fetch(`http://127.0.0.1:5000/frauds/types?start=1&limit=1&fraud_id=2`);
            const response7 = yield fetch(`http://127.0.0.1:5000/frauds/types?start=1&limit=1&fraud_id=3`);
            const response8 = yield fetch(`http://127.0.0.1:5000/frauds/types?start=1&limit=1&fraud_id=4`);
            const response9 = yield fetch(`http://127.0.0.1:5000/frauds/types?start=1&limit=1&fraud_id=5`);
            const response10 = yield fetch(`http://127.0.0.1:5000/frauds/types?start=1&limit=1&fraud_id=6`);
            const allF = yield response1.json();
            const l1 = yield response2.json();
            const l2 = yield response3.json();
            const l3 = yield response4.json();
            const p1 = yield response5.json();
            const p2 = yield response6.json();
            const p3 = yield response7.json();
            const p4 = yield response8.json();
            const p5 = yield response9.json();
            const p6 = yield response10.json();
            this.allFraud = allF.totalData;
            this.level1 = l1.totalData;
            this.level2 = l2.totalData;
            this.level3 = l3.totalData;
            this.fastChangeLoc = p1.totalData;
            this.nightActivity = p2.totalData;
            this.errPass = p3.totalData;
            this.manyTransactions = p4.totalData;
            this.manyRejects = p5.totalData;
            this.fastTransactions = p6.totalData;
        } catch (error) {
            throw error;
        }
    });
}
const store = new StatisticStore();

export default store;
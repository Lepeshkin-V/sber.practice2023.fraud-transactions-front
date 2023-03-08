import { action, makeAutoObservable, runInAction } from 'mobx';
import moment from 'moment';
import { DailyStatisticType, HourlyStatisticType } from './../common/types';
import sub from 'date-fns/sub'

class StatisticStore {
    dailyStatisticData: DailyStatisticType[];
    hourlyStatisticData: HourlyStatisticType[];
    loading: boolean;
    error: string | undefined;
    startDate: string;
    endDate: string


    constructor() {
        makeAutoObservable(this)
        this.dailyStatisticData = [];
        this.hourlyStatisticData = [];
        this.loading = false;
        this.error = undefined;
        this.startDate = '';
        this.endDate = '';
    }

    @action getStatistic = async () => {
        console.log(this.loading)
        try {
            this.loading = true;
            this.error = undefined;
            await this.getStartDate();
            this.getDailyStatistic();
            this.getHourlyStatistic();
            console.log(this.loading)
        } catch (error) {
            runInAction(() => {
                if (typeof error === 'string') this.error = error;
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
        console.log(this.loading)
    }

    getStartDate = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/transaction/page?start=${1}&limit=${1}&order=${2}&direction=${1}`);
            const transactions = await response.json();
            runInAction(() => {
                const endDate = new Date(transactions.transactions[0].date);
                this.endDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss')
                this.startDate = moment(sub(endDate, { days: 8 })).format('YYYY-MM-DD HH:mm:ss')
            });
        } catch (error) {
            throw error;
        }
    }

    getDailyStatistic = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/statistics/daily?startDate=${this.startDate}&endDate=${this.endDate}`);
            const statistic = await response.json();
            runInAction(() => {
                this.dailyStatisticData = statistic;
            });
        } catch (error) {
            throw error;
        }
    }

    getHourlyStatistic = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/statistics/hourly?date=${'2021-08-02 13:53:49'}`);
            const statistic = await response.json();
            runInAction(() => {
                this.hourlyStatisticData = statistic;
            });
        } catch (error) {
            throw error;
        } 
    }
}
const store = new StatisticStore();

export default store;
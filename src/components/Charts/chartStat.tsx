import { Line } from "react-chartjs-2"
import { LineDailyStatisticType, LineType } from "../../common/types";
import statisticStore from "../../strore/statisticStore"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { observer } from "mobx-react-lite";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartStat = observer(() => {
    const l: LineDailyStatisticType = {
        date:[],
        freq1:[],
        freq2:[],
        freq3:[],
        freq4:[],
        freq5:[],
        freq6:[],
        total:[]
    };
    statisticStore.dailyStatisticData.forEach(d => {
        l.date.push(new Date(d.date).toLocaleDateString());
        l.freq1.push(d.freq1);
        l.freq2.push(d.freq2);
        l.freq3.push(d.freq3);
        l.freq4.push(d.freq4);
        l.freq5.push(d.freq5);
        l.freq6.push(d.freq6);
        l.total.push(d.total);
    })

    const chartData: LineType = {
        labels: l.date,
        datasets: [
            {
                data: l.freq1,
                label: "Просроченный паспорт",
                borderColor: '#fab1a0',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
            {
                data: l.freq2,
                label: "Чрезмерная частота транзакций",
                borderColor: '#ff7675',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
            {
                data: l.freq3,
                label: "Большое количество отказов",
                borderColor: '#e17055',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
            {
                data: l.freq4,
                label: "Быстрая смена локаций",
                borderColor: '#d63031',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
            {
                data: l.freq5,
                label: "Большое количество транзакций",
                borderColor: '#fd79a8',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
            {
                data: l.freq6,
                label: "Высокая ночная активность",
                borderColor: '#e84393',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
            {
                data: l.total,
                label: "Всего транзакций",
                borderColor: '#0984e3',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            }
        ]
    }
    return (
        <Line
            height={60}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                    title: {
                        display: true,
                        text: 'Статистика подозрительных действий',
                        fullSize:true,
                        font: {
                            size: 32
                        }
                    },
                },
            }}
            data={chartData}
        />
    );
});

export default ChartStat;
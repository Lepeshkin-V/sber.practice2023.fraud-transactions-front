import { Line } from "react-chartjs-2"
import { LineHourlyStatisticType, LineType } from "../../common/types";
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

const ChartFraud = observer(() => {
    const l: LineHourlyStatisticType = {
        date:[],
        freq:[],
    };
    console.log(statisticStore.hourlyStatisticData);
    statisticStore.hourlyStatisticData.forEach(d => {
        l.date.push(new Date(d.date).toLocaleTimeString());
        l.freq.push(d.freq);
    })

    const chartData: LineType = {
        labels: l.date,
        datasets: [
            {
                data: l.freq,
                label: "Подозрительные действия",
                borderColor: '#d63031',
                backgroundColor: "#dfe6e9",
                fill: true,
                lineTension: 0.5
            },
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
                        text: 'Статистика подозрительных действий каждый час',
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

export default ChartFraud;
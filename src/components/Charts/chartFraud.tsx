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
    const hour = new Date()
    statisticStore.hourlyStatisticData.forEach(d => {
        hour.setHours(Number(d.date), 0, 0);
        l.date.push(hour.toLocaleTimeString());
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
                fill: false,
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
                        text: `Статистика подозрительных действий каждый час за ${new Date(statisticStore.endDate).toLocaleDateString()}`,
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
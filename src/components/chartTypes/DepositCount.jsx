import { Line, LineChart } from "recharts";


const data = [
    {
        baseDate: "Q1, 2024",
        count: 1260932
    },
    {
        baseDate: "Q2, 2024",
        count: 1251340
    },
    {
        baseDate: "Q3, 2024",
        count: 1154217
    },
    {
        baseDate: "Q4, 2024",
        count: 1253865
    },
    {
        baseDate: "Q1, 2025",
        count: 1364596
    }
]

const DepositCount = () => {
    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <Line dataKey="count"></Line>
            </LineChart>
        </div>
    );
};

export default DepositCount;
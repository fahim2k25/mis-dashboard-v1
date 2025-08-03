import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


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
            <h2 className="my-6 text-4xl font-bold chartTitle">Number of Deposit Accounts</h2>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid></CartesianGrid>
                <Line dataKey="count" name="Deposit A/C Count"></Line>
                <XAxis dataKey="baseDate"></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default DepositCount;
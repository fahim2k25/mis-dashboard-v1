import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


const data = [
    {
        baseDate: "Q1, 2024",
        count: 55609

    },
    {
        baseDate: "Q2, 2024",
        count: 54867

    },
    {
        baseDate: "Q3, 2024",
        count: 52160

    },
    {
        baseDate: "Q4, 2024",
        count: 57144

    },
    {
        baseDate: "Q1, 2025",
        count: 59456

    }
]
const LoanCount = () => {
    return (
        <div>
            <h2 className="my-6 text-4xl font-bold chartTitle">Number of Loan Accounts</h2>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid></CartesianGrid>
                <Line dataKey="count" name="Loan A/C Count"></Line>
                <XAxis dataKey="baseDate"></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default LoanCount;
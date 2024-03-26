/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStore } from '../components/store';


const Charts = () => {
    const ReadStored = getStore();
    const [newObject, setNewObject] = useState(null)
    useEffect(() => {
        let fack = [];
        ReadStored.map((datas) => {
            let d = { name: datas.bookName, uv: datas.totalPages, pv: 1398, amt: 2210 }
            fack = [...fack, d]
        })
        setNewObject(fack)
    }, []);
    const data = [...newObject];
    console.log(data);

    const colors = ['#FF7ED4', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#5755FE', '#FF71CD'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div >
            <BarChart
                width={1000}
                height={300}
                data={newObject}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Charts;





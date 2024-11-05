import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    useEffect(() => {
        document.title = 'Gadget Heaven || Statistics';
    }, []);

    const load = useLoaderData();

    
    const data = load.map(item => ({
        name: item.title,
        price: item.price,
        rating: item.rating,
        category:item.category,
    }));

    return (
        <div>
            <div className="bg-common">
                <div className="w-7/12 text-center py-7 mx-auto">
                    <h1 className='text-3xl text-white'>Statistics</h1>
                    <p className='text-white'>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            <div className="flex w-11/12 mx-auto py-12 justify-center">
                <ResponsiveContainer   height={500}>
                    <ComposedChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                       
                        <Bar dataKey="price" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="category" stroke="#ff7300" />
                        <Scatter dataKey="rating" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;

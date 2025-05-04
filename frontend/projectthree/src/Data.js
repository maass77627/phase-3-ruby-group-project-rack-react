import React from "react";
//  import { data } from "react-router-dom";
import { PieChart, Pie, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';



function Data({calTotal, veg, protein, dairy, fruit, grain, fat}) {
  console.log(calTotal)

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    

    const data01 = [
        { name: 'Vegetable', value: veg },
        { name: 'Fruit', value: fruit },
        { name: 'Protein', value: protein },
        { name: 'Grain', value: grain },
        { name: 'Dairy', value: dairy },
        { name: 'Fat', value: fat },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2000 },
        { name: 'Group B', value: calTotal },
        // { name: 'Group C', value: 1398 },
        // { name: 'Group D', value: 9800 },
        // { name: 'Group E', value: 3908 },
        // { name: 'Group F', value: 4800 },
      ];

   
    return(
        <div id="data">
             <PieChart id="pie" width={600} height={600}>
          <Pie
          
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#d47b69" />
          <Tooltip />
        </PieChart>
        
        <BarChart
        id="bar"
          width={600}
          height={500}
          data={data}
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
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>


            
        </div>
    )
}

export default Data

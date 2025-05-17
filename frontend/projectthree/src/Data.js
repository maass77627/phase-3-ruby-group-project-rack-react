import React from "react";
//  import { data } from "react-router-dom";
import { PieChart, Pie, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';



function Data({calTotal, veg, protein, dairy, fruit, grain, fat, monCalTotal, tuesCalTotal, wedCalTotal, thursCalTotal, friCalTotal, satCalTotal, sunCalTotal}) {
  console.log(calTotal)
  console.log(monCalTotal)
  console.log(tuesCalTotal)
  console.log(wedCalTotal)
  console.log(thursCalTotal)
  console.log(friCalTotal)
  console.log(satCalTotal)
  console.log(sunCalTotal)

    const data = [
        {
          name: 'Monday',
          uv: monCalTotal,
          pv: 0,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: tuesCalTotal,
          pv: 0,
          amt: 2210,
        },
        {
          name: 'Wednesday',
          uv: wedCalTotal,
          pv: 0,
          amt: 2290,
        },
        {
          name: 'Thursday',
          uv: thursCalTotal,
          pv: 0,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: friCalTotal,
          pv: 0,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: satCalTotal,
          pv: 0,
          amt: 2500,
        },
        {
          name: 'Sunday',
          uv: sunCalTotal,
          pv: 0,
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
        { name: 'Total Calories', value: 2000 - calTotal },
        { name: 'Calories Used', value: calTotal },
        
      ];

   
    return(
        <div id="data">
          <h1 id="label1">Calories Consumed</h1>
          <h1 id="label2">Food Groups Consumed</h1>
          <h1 id="label3">Calories</h1>
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
          
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40}  outerRadius={80} fill="#d47b69" />
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

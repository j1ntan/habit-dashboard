import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    progress: 67,
  },
  {
    name: 'Mon',
    progress: 30,
    
  },
  {
    name: 'Tue',
    progress: 40,
  },
  {
    name: 'Wed',
    progress: 78,
  },
  {
    name: 'Thu',
    progress: 60,
  },
  {
    name: 'Fri',
    progress: 75,
  },
  {
    name: 'Sat',
    progress: 80
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        
        <BarChart
          
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: -20,
            bottom: 10,
          }}
          barSize={40}

        >
          <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 10}} />
          <YAxis/>
          <Tooltip />
          <Legend />
          <CartesianGrid />
          <Bar dataKey="progress" fill="#B286FD" background={{ fill: '#2B2B2B', radius:20}}  radius={20}  />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
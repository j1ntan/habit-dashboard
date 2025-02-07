import React, {useState} from "react";
import Chart from 'react-apexcharts';
import styles from '../MyComponents/habitGraph.module.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// for graphs of lines we are using apexcharts.

function HabitGraph(){
    const [product, setProduct]=useState(
        [
            {
                name:"Go for a run",
                data:[20,15,18,10,29,24,10,23,30,23,12,15]
            },
            {
                name:"Read a book",
                data:[23,15,8,10,20,24,10,29,24,10,23,12]
            },
            {
                name:"Eat a healthy meal",
                data:[4,25,18,30,10,14,10,19,24,10,2,10]
            },
            {
                name:"hello",
                data:[23,25,15,19,10,31,12,3,17,19,20,10]
            }
        ]
    )

    return(
        <ResponsiveContainer width="100%" height="100%">
            <div className={styles.habitGraph}>
                <h2>Line chart</h2>

                <Chart type='line' width={940} height={230} series={product}

                options={{
                    xaxis:{
                        title:{text:"Months"},
                        categories:['jan','feb','mar','apr','may','jun','jul','aug','sep','nov','dec']
                    }
                }}></Chart>
            </div>
        </ResponsiveContainer>
    )
}

export default HabitGraph;
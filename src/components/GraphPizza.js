import React from 'react';
import { PieChart, ProgressCircle } from 'react-native-svg-charts';


export default function GraphPizza() {
   /* const data = [80,100];

    const pieData = data.map((value, index) => ({
        value,
        key: `pie-data-${value}-${index}`,
        svg: {
            fill: '#7159c1'
        },
    }));

    return <PieChart style={ {height: 240} } data={ pieData }  />; */
    return <ProgressCircle
    style={{ height: 240 }}
    progress={0.4}
    tittle = 'Teste'
    progressColor={'#242972'}
    backgroundColor = '#9B9B9B'
    strokeWidth = '15'
    cornerRadius = '0'
    />
}

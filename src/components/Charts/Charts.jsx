import { React, useEffect, useState } from 'react';
import {Line, Bar} from 'react-chartjs-2';


const Charts = ({ data: { confirmed, recovered, deaths, lastUpdate,country}}) => {
    // if(!confirmed){
    //     return "loading..."
    // }

    const [CData, setCData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://covid19.mathdro.id/api/daily")
            const data = await response.json()
            const modifiedcdata = data.map((CData) => ({
                confirmed: CData.confirmed.total,
                deaths: CData.deaths.total,
                date: CData.reportDate
            }))
            setCData(modifiedcdata)
        }
        getData();
    }, [])
    const dataLine = {
        labels: CData.map(({ date }) => date),
        datasets: [
            {
                label: 'Infected Case',
                borderColor: '#3333ff',
                borderWidth: 2,
                data: CData.map(({ confirmed }) => confirmed)
            },
            {
                label: 'Deaths Rate',
                borderColor: 'red',
                borderWidth: 2,
                data: CData.map(({ deaths }) => deaths)
            }
        ]
    };
    
    const dataBar = {
        datasets: [
            {
                label: 'Infected Case',
                borderColor: '#3333ff',
                borderWidth: 2,
                data: confirmed
            },
            {
                label: 'Deaths Rate',
                borderColor: 'red',
                borderWidth: 2,
                data: recovered
            },
            {
                label: 'Deaths Rate',
                borderColor: 'red',
                borderWidth: 2,
                data: deaths
            },

        ]
    };

    
    return (
        <>
        
        {/* {country? */}
        {/* <Bar
            data={dataBar}
            width='85%'
            height='15%'
        /> */}
        :
        <Line
        data={dataLine}
            width='85%'
            height='15%'/>
        
        </>
    )
}

export default Charts;
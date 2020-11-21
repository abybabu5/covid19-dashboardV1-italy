import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {fetchDailyData} from '../../Api/ApiWorldChart';
import "./Chart.scss";


const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(6,233,233,0.94)', 'rgba(11,226,11,0.91)', 'rgba(243,17,9,0.93)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    legend: {display: false},
                    title: {display: true, text: `Current status in ${country}`},
                }}
            />
        ) : null
    );

    const lineChart = (
        dailyData[0] ? (
            <Line options={{maintainAspectRatio: false}}
                  data={{
                      labels: dailyData.map(({date}) => date),
                      datasets: [{
                          data: dailyData.map((data) => data.confirmed),
                          label: 'Infected',
                          borderColor: '#33ffe7',
                          fill: true,
                      }, {
                          data: dailyData.map((data) => data.deaths),
                          label: 'Deaths',
                          borderColor: 'red',
                          backgroundColor: 'rgba(239,9,9,0.93)',
                          fill: true,
                      },
                      ],
                  }}
            />
        ) : null
    );

    return (
        <div className="container chart-container">
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;

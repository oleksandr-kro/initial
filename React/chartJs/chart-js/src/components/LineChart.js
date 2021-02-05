import React from 'react';

import { Line } from 'react-chartjs-2'


const LineChart = () => {
    return <div >
        <
        Line
    data = {
        {
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            datasets: [{

                    label: 'Jan 2019 - Dec 2019',
                    data: [12214, 5321, 14222, 34124, 22414, 34216, 23241, 34124, 51212, 73422, 34124, 44216],
                    fill: true,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderWidth: 0,
                    pointRadius: 0

                },

                {

                    label: 'Jan 2018 - Dec 2018',

                    data: [34124, 32492, 34124, 34124, 25414, 34216, 34124, 34124, 41248, 44123, 34124, 44216],
                    fill: false,
                    order: 2,
                    borderColor: 'darkblue',
                    pointRadius: 5,
                    pointBackgroundColor: 'white'
                }
            ],

        }


    }


    height = { 400 }
    width = { 600 }
    options = {

            {
                plugins: {
                    datalabels: {
                        display: true,
                        align: 'bottom',
                        backgroundColor: '#ccc',
                        borderRadius: 3,
                        font: {
                            size: 18,
                        }
                    },
                },
                legend: {
                    align: 'end',
                    labels: {
                        fontColor: "blue",
                        usePointStyle: true,
                        boxWidth: 5,
                        backgroundColor: 'blue'
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: (value) => {
                                if (value === 0) {
                                    return `$${value}`;
                                }
                                return `$${value}K`;
                            }
                        }
                    }]

                }
            }
        } >
        <
        /Line>

    <
    /div> 
}

export default LineChart
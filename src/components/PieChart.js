import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import './css/pieChart.css'

const data = {
    labels: [
        'Website',
        'Video',
        'Gaming',
        'Content Downstream',
        'Content Upstream',
        'VOIP',
    ],
    datasets: [
        {
            data: [24, 24, 12, 10, 25, 5],
            backgroundColor: [
                'rgb(153, 0, 153)',
                'rgb(51, 102, 204)',
                'rgb(220, 57, 18)',
                'rgb(255, 153, 0)',
                'rgb(16, 150, 24)',
                'rgb(151, 56, 80)',
            ]
        },
    ],
}

const options2 = {
    responsive: true,
    legend: {
        display: false,
    },
    maintainAspectRatio: false,
    spanGaps: false,
}

const PieChart = () => (
    <>
        <div className="graph donut">
            <Doughnut data={data} options={options2}/>
        </div>

        <div className="legend-box donut">
            <h3>Subscribers by Service Category</h3>
            <ul className="legend">
                <li>
                    <span className="website" />
                    Website
                </li>
                <li>
                    <span className="video" />
                    Video
                </li>
                <li>
                    <span className="gaming" />
                    Gaming
                </li>
                <li>
                    <span className="content-downstream" />
                    Content Downstream
                </li>
                <li>
                    <span className="content-upstream" />
                    Content Upstream
                </li>
                <li>
                    <span className="voip" />
                    VOIP
                </li>
            </ul>
        </div>
    </>
)

export default PieChart

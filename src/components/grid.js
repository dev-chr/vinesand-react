import React from 'react'
import './css/grid.css'
import './css/statBox.css'
import { Line } from 'react-chartjs-2'
import ItemRow from './ItemRow'
import AreaChart from './AreaChart'
import FilterForm from './FilterForm'
import PieChart from './PieChart'

import leftStatData from '../data/statsLeft.json'
import rightStatData from '../data/statsRight.json'

import data1 from '../data/areaChart1Data'
import data2 from '../data/areaChart2Data'

const options1 = {
    maintainAspectRatio: false,
    spanGaps: false,
    elements: {
        line: {
            tension: 0.000001,
        },
    },
    scales: {
        yAxes: [
            {
                stacked: true,
            },
        ],
    },
    legend: {
        display: false
    },
    title: {
        display: true,
        position: 'left',
        text: 'Count',
        fontStyle: 'normal'
    },
}
const options2 = {
    maintainAspectRatio: false,
    spanGaps: false,
    elements: {
        line: {
            tension: 0.000001,
        },
    },
    scales: {
        yAxes: [
            {
                stacked: true,
            },
        ],
    },
    legend: {
        display: false
    },
    title: {
        display: true,
        position: 'left',
        text: 'Consumption (Gbps)',
        fontStyle: 'normal'
    },
}



function SubHeader(props) {
    return (
        <header className="sub-header">
            <h2>{props.heading}</h2>
        </header>
    )
}

function Stats(props) {
    return (
        <div className="stats">
            {props.json.map(data => {
                return (
                    <div key={data.title} className="box">
                        <h3>{data.title}</h3>
                        <span className="box-stat">{data.value} </span>
                        <span className="box-unit">{data.units} </span>
                        <span className="box-percentage">
                            {data.percentage}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

const GridLeft = () => (
    <div className="left">
        <SubHeader heading={`Bandwidth: 373.2`} />
        <Stats json={leftStatData} />
        <ItemRow>
            <AreaChart h3label="Subscriber Volume">
                <Line data={data1} options={options1} />
            </AreaChart>
        </ItemRow>
        <ItemRow>
            <AreaChart h3label="Subscriber Consumption">
                <Line data={data2} options={options2} />
            </AreaChart>
        </ItemRow>
    </div>
)

const GridRight = () => (
    <div className="right">
        <SubHeader heading={`Subscribers: 2.9 Million`} />
        <Stats json={rightStatData} />
        <ItemRow>
            <FilterForm />
        </ItemRow>
        <ItemRow>
            <PieChart />
        </ItemRow>
    </div>
)

const Grid = ({ children }) => (
    <div id="container">
        <GridLeft />
        <GridRight />
        {children}
    </div>
)

export default Grid

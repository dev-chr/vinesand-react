import React from 'react'

function AreaChart(props) {
  return (
    <>
      <div className="graph">
        
        {props.children}

        <div className="label-bottom">Last 24 hours</div>
      </div>

      <div className="legend-box">
        <h3>{props.h3label}</h3>
        <ul className="legend">
          <li>
            <span className="trend" />
            Trend
          </li>
          <li>
            <span className="current" />
            Current
          </li>
        </ul>
      </div>
    </>
  )
}

export default AreaChart

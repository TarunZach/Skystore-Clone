import React from 'react'
import '../css/filmchart.css'

function Filmchart() {


    return (
        <div className="chart-wrapper container">
            <div className="film-image">
                <img src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_DEDAA648-E3BF-4F9A-B0C5-4716F4C1DAE2_2021-12-10-T15-20-33.jpg?s=1440x314" alt="film chart" />
            </div>

            <div className="asset-list-wrapper">
                <div className="film-list container">
                    <h1 className="chart-title">Official Film Chart</h1>
                    <div>
                        <ul className="charts">
                            <li className="films">
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filmchart
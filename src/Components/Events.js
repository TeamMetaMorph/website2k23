import React from 'react'
import '../css/Events.scss'
import InfoCard from './InfoCard'
import Data from '../dataAll/Data.json'
import Workshops from './Workshops'
import Snowfall from 'react-snowfall'
function Events() {

    const personList = Data.map(info => <div className="col-md-12"><InfoCard info={info} />  </div>)
    return (
        <div className="eventCard">
            <h1 id="ttl" style={{ fontFamily: "cursive" }}>Awesome Events this Year</h1>
            <div className="container">
            <Snowfall />
                <div className="row">
                    {/* <Snowfall /> */}
                    {personList}
                    <Snowfall />
                </div>
            </div>
            <Workshops />
        </div>
    )
}
export default Events
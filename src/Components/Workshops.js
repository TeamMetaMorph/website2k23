import { useEffect, React } from 'react'
import '../css/Events.scss'
import '../css/Workshop.scss'
import InfoCard from './InfoCard'
import dataworkshop from '../dataAll/dataworkshop.json'
import gsap from 'gsap'
import Snowfall from 'react-snowfall'



function Workshops() {
    useEffect(() => {
        gsap.from('#ttl', { y: -500, ease: "elastic", duration: 4 })
        gsap.to('#ttl', { y: 60, ease: "elastic", duration: 4 })
        gsap.to('#ttl', { y: 0, ease: "elastic", duration: 4 })


        const tl = gsap.timeline();
        tl.from('.Robo', { x: 0, ease: "elastic", duration: 4 })


    }, []);


    const personList = dataworkshop.map(info => <div className="col-md-12"><InfoCard info={info} />  </div>)
    return (

        <div className="eventCard">
            <Snowfall />
            <h1 id="ttl" style={{ fontFamily: "cursive" }}>Our Workshops this Year</h1>
            <div className="container">
                <div className="row">
                    {/* <Snowfall /> */}
                    {personList}
                    <Snowfall />
                </div>
            </div>
        </div>
    )
}
export default Workshops
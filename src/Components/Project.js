import React, { useRef, useEffect } from 'react'
import '../css/Events.scss'
import '../css/Project.scss'
import InfoCard from './InfoCard'
import dataProject from '../dataAll/dataProject.json'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Snowfall from 'react-snowfall'


function Project() {

    useEffect(() => {
        gsap.from('#ttl', { y: -500, ease: "elastic", duration: 4 })
        gsap.to('#ttl', { y: 60, ease: "elastic", duration: 4 })
        gsap.to('#ttl', { y: 0, ease: "elastic", duration: 4 })


        const tl = gsap.timeline();
        tl.from('.Robo', { x: 0, ease: "elastic", duration: 4 })


    }, []);


    const personList = dataProject.map((info, cornertext) => <div className="col-md-12" id={cornertext}><InfoCard info={info} />  </div>)
    return (
        <div className="eventCard" id="particles-js">
            <h1 id="ttl" style={{ fontFamily: "cursive" }}>Our Projects</h1>
            <div className="container">
                <Snowfall />
                <div className="row">
                    <Snowfall />
                    {personList}
                    <Snowfall />
                </div>
            </div>
        </div>
    )
}
export default Project
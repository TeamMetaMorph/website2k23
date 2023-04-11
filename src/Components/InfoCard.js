import React, { useState, useEffect } from 'react'
import Data from '../dataAll/Data.json'
import Logo from '../images/LogoM.png'
import '../css/InfoCard.scss'
function InfoCard({ info }) {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white");
    const displayVid = () => {
        if (window.innerWidth > 400) {
            document.getElementById(`vdo${info.id}`).style.display = "block";
            document.getElementById(`para${info.id}`).style.width = "200%";
            document.getElementById(`heading${info.id}`).style.left = "200%";
            document.getElementById(`para${info.id}`).style.width = "200%";
        }
        if (window.innerWidth < 400) {
            document.getElementById(`vdo${info.id}`).style.display = "block";
            document.getElementById(`para${info.id}`).style.width = "5%";
            document.getElementById(`heading${info.id}`).style.left = "100%";
            document.getElementById(`para${info.id}`).style.width = "100%";
        }

    }

    const hideVid = () => {

        document.getElementById(`vdo${info.id}`).style.display = "none";
        document.getElementById(`para${info.id}`).style.width = "100%";
        document.getElementById(`heading${info.id}`).style.left = "100%";
        document.getElementById(`para${info.id}`).style.width = "1s00%";
    }




    const handleClick = () => {

        setCount(count + 1);

    }
    const handleColor = () => {
        setColor(`${info.brcolor}`);
    }

    return (
        <div className="all">
            <div class="movie_card" id="ave" style={{ boxShadow: `0px 0px 150px -45px ${info.brcolor}` }}>
                <div class="info_section">
                    <div class="movie_header">
                        <img class="locandina" src={Logo} />
                        <h1 id={`heading${info.id}`} className="project" style={{ textAlign: 'center', marginLeft: '6vw', fontWeight: 'bold' }}>{info.cornertext}</h1>
                        <h4 id="eventno">{info.Text}</h4>
                        <span class="minutes">{info.date}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p class="type" style={{ textAlign: "right" }}>{info.Description}</p>
                    </div>
                    <div class="movie_desc">
                        <p className="text" id={`para${info.id}`}>{info.Para}</p>
                        <div id={`vdo${info.id}`} style={{ display: "none" }}>
                            <iframe src={info.vdoSRC} ></iframe>
                        </div>
                    </div>
                    <div class="movie_social">
                        <ul>
                            <li> <i class="fa fa-compress" aria-hidden="true" style={{ color: `${color} ` }} onClick={() => { hideVid(); handleColor(); }}>&nbsp;Minimise</i></li>
                            <li style={{ color: 'white' }}><a href={info.link} target="_blank"><i class={`fa fa-${info.icon}`} aria-hidden="true"></i>&nbsp;{info.linktext}</a></li>
                            <li style={{ color: 'white' }}><i class="fa fa-play" aria-hidden="true"></i><a href={info.linkicon} onClick={displayVid}> Watch Video!!!</a></li>
                            <li><a href={info.pdflink} target="_blank"><i class={`fa fa-${info.iconAbs}`} aria-hidden="true"></i>&nbsp;{info.linkAbstractText}</a></li>
                            <li><a href="https://www.airmeet.com/e/8612ba00-9601-11eb-8031-1736499948b2" target="_blank"><i class="fab fa-airbnb"></i>Airmeet</a> </li>

                            {/* <a href="../pdf/CB.pdf" download="CB.pdf">gjngj</a> */}
                        </ul>
                    </div>
                </div>
                <div class="blur_back ave_back" style={{ backgroundImage: `url(${info.photo})` }}></div>
            </div>
        </div>

    )
}

export default InfoCard

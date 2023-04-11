import React, { useState, useEffect } from "react";
import "../css/MemberDisplay.scss";
import MemberCard from "./MemberCard";
import { useEmblaCarousel } from "embla-carousel/react";
import four from "../dataAll/MemberData4.json";
import three from "../dataAll/MemberData3.json";
import one from "../dataAll/MemberData1.json";
import MemberFourth from "./MemberFourth";
import MemberThird from './MemberThird'
import MemberSecond from "./MemberSecond";
import MemberFirst from "./MemberFirst";
import Snowfall from "react-snowfall";
function MemberDisplay() {


  return (

    <div >

      <MemberFourth />

      <MemberThird />

      <MemberSecond />

      <MemberFirst />


    </div>


  );
};

export default MemberDisplay;
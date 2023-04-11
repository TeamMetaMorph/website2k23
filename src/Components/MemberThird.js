import React, { useState, useEffect } from "react";
import "../css/MemberDisplay.scss";
import MemberCard from "./MemberCard";
import { useEmblaCarousel } from "embla-carousel/react";
// import four from "../dataAll/MemberData4.json";
import three from "../dataAll/MemberData3.json";

const MemberThird = () => {
  const third = three.map((infor) => (
    <div className="embla__slide">
      <MemberCard infor={infor} />
    </div>
  ));


  return (

    <div >
      <h1 style={{ marginTop: "15vh", fontSize: "3em" }}>
        <b><span id="final"> Third Year</span> Members</b>
      </h1>
      <div>
        <div className="embla" style={{ marginTop: "10vh" }}>
          <div className="embla__container">{third}</div>

        </div>
      </div>

    </div>

  );
};

export default MemberThird;

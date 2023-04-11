import React from "react";
import '../css/Loader.scss'
function Loader() {
  return (
    <div className="sta">
      <div class="psoload">
        <div class="straight"></div>
        <div class="curve"></div>
        <div class="center"></div>
        <div class="inner"></div>
      </div>
    </div>
  );
}

export default Loader;

import React, { useEffect, useRef } from "react";
import GaugeObjects from "gaugeJS/dist/gauge";

function TunerGauge() {
  const gaugeRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    initGauge();
  }, []);

  function initGauge() {
    var opts = {
      angle: 0.15, /// The span of the gauge arc
      lineWidth: 0.44, // The line thickness
      pointer: {
        length: 0.9, // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
      },
      colorStart: "#6FADCF", // Colors
      colorStop: "#8FC0DA", // just experiment with them
      strokeColor: "#E0E0E0", // to see which osnes work best for you
    };
    var gauge = new GaugeObjects.Gauge(gaugeRef.current).setOptions(opts);
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(1825); // set actual value
  }

  return (
    <div>
      <canvas
        ref={gaugeRef}
        //  width={300} height={300}
        style={{ width: "100%" }}
      ></canvas>
    </div>
  );
}

export default TunerGauge;

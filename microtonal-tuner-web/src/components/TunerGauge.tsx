import React, { useEffect, useRef, useState } from "react";
import GaugeObjects from "gaugeJS/dist/gauge";
//import { useWindowSize } from "@react-hook/window-size";

interface TunerGaugeProps {
  value: Number;
}
function TunerGauge(props: TunerGaugeProps) {
  const gaugeRef = useRef<HTMLCanvasElement>(null);
  //const [windowWidth, windowHeight] = useWindowSize({ wait: 500 });
  const [gaugeInstance, setGaugeInstance] = useState<any>(undefined);

  useEffect(() => {
    initGauge();
  }, []);

  // useEffect(() => {
  //   initGauge();
  //   console.log("resize");
  // }, [windowWidth, windowHeight]);

  useEffect(() => {
    if (gaugeInstance) {
      gaugeInstance.set(props.value);
    }
  }, [props.value, gaugeInstance]);

  function initGauge() {
    var tunedRegion = 5;
    var tunedRegionHeight = 10;
    var tunedRegionColor = "#00a04d";

    var almostTunedRegion = 35;
    var almostTunedRegionColor = "#ffa500";
    var almostTunedRegionHeight = 5;

    var otherRegionColor = "#aaa";
    var otherRegionHeight = 2;

    var opts = {
      angle: 0.15, /// The span of the gauge arc
      lineWidth: 0.015, // The line thickness
      pointer: {
        length: 0.52, // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
      },
      colorStart: "#aaa", // Colors
      //colorStop: "#ff0000", // just experiment with them
      strokeColor: "#aaa", // to see which osnes work best for you
      staticZones: [
        {
          strokeStyle: tunedRegionColor,
          min: -tunedRegion,
          max: tunedRegion,
          height: tunedRegionHeight,
        },
        {
          strokeStyle: almostTunedRegionColor,
          min: tunedRegion,
          max: almostTunedRegion,
          height: almostTunedRegionHeight,
        },
        {
          strokeStyle: almostTunedRegionColor,
          min: -almostTunedRegion,
          max: -tunedRegion,
          height: almostTunedRegionHeight,
        },
        {
          strokeStyle: otherRegionColor,
          min: almostTunedRegion,
          max: 100,
          height: otherRegionHeight,
        },
        {
          strokeStyle: otherRegionColor,
          min: -100,
          max: -almostTunedRegion,
          height: otherRegionHeight,
        },
      ],
    };
    var gauge = new GaugeObjects.Gauge(gaugeRef.current).setOptions(opts);
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(-100); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(0); // set actual value

    setGaugeInstance(gauge);
  }

  return (
    <canvas
      ref={gaugeRef}
      //  width={300} height={300}
      style={{ width: "100%" }}
    ></canvas>
  );
}

export default TunerGauge;

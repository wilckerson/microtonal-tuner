import React, { useEffect, useRef, useState } from "react";
import GaugeObjects from "gaugeJS/dist/gauge";
import TuningMath from "../core/TuningMath";
//import { useWindowSize } from "@react-hook/window-size";

interface TunerGaugeProps {
  value: number;
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
    var tunedRegion = TuningMath.JND_CENTS;
    var tunedRegionHeight = 10;
    var tunedRegionColor = "#00a04d";

    var centsRange = 100;
    var almostTunedRegion = centsRange * 0.39;
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
          max: centsRange,
          height: otherRegionHeight,
        },
        {
          strokeStyle: otherRegionColor,
          min: -centsRange,
          max: -almostTunedRegion,
          height: otherRegionHeight,
        },
      ],
    };
    var gauge = new GaugeObjects.Gauge(gaugeRef.current).setOptions(opts);
    gauge.maxValue = centsRange; // set max gauge value
    gauge.setMinValue(-centsRange); // Prefer setter over gauge.minValue = 0
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

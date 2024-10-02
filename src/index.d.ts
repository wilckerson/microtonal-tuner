declare module "gaugeJS/dist/gauge" {
  declare class Gauge {
    maxValue: Number;
    animationSpeed: Number;

    constructor(element: HTMLCanvasElement | null);

    setOptions(options: Object): Gauge;
    setMinValue(value: Number);
    set(value: Number);
  }
  const GaugeObjects = {
    Gauge: Gauge,
    Donut: any,
    BaeDonut: any,
    TextRenderer: any,
  };
  export default GaugeObjects;
}

declare module "react-https-redirect";
declare module "material-ui-popup-state/core";

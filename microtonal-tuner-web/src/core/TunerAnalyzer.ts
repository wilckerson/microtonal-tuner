import TuningMath, { TuningData } from "./TuningMath";

class TunerAnalyzer {
  //constructor() {}

  static analyzeFrequency(
    tuningData: TuningData,
    currentFreq: number,
    rootFreq: number
  ) {
    const ratio = TuningMath.GetNormalizedRatioFromFrequency(
      currentFreq,
      rootFreq,
      tuningData.base
    );

    //Search for te closest note
    const closest = tuningData.notes.reduce(function (prev, curr) {
      var currDiff = TuningMath.calculateRatioDiff(
        curr.ratio,
        ratio,
        tuningData.base
      );
      var prevDiff = TuningMath.calculateRatioDiff(
        prev.ratio,
        ratio,
        tuningData.base
      );

      return currDiff < prevDiff ? curr : prev;
    });

    //Calculate de cents difference
    const ratioCents = TuningMath.RatioToCents(ratio);
    const baseCents = TuningMath.RatioToCents(tuningData.base);

    const baseCentsOff = ratioCents - baseCents;
    const ratioCentsOff = ratioCents - closest.cents;
    const centsOff =
      Math.abs(baseCentsOff) < Math.abs(ratioCentsOff)
        ? baseCentsOff
        : ratioCentsOff;

    return {
      noteIndex: closest.index,
      noteName: closest.name,
      centsOff: centsOff,
    };
  }
}

export default TunerAnalyzer;

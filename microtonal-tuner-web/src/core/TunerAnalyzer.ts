import TuningMath from "./TuningMath";

export type NoteInfo = {
  name: string;
  ratio: number;
  cents: number;
  freq: number;
};
export type TuningData = {
  base: number;
  notes: NoteInfo[];
};

class TunerAnalyzer {
  //constructor() {}

  static get12EdoData(rootFreq: number): TuningData {
    var noteNames = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
    ];
    var base = 2;
    var eqt = 12;
    var notes: any[] = [];
    for (let i = 0; i < eqt; i++) {
      var noteRatio = Math.pow(base, i / eqt);
      var noteInfo = {
        name: noteNames[i],
        ratio: noteRatio,
        cents: (1200 / eqt) * i,
        freq: rootFreq * noteRatio,
      };
      notes.push(noteInfo);
    }
    var tuningData = {
      base: base,
      notes: notes,
    };
    return tuningData;
  }

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

    return { noteName: closest.name, centsOff: centsOff };
  }
}

export default TunerAnalyzer;

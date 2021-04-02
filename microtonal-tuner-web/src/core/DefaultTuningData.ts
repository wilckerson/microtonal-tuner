import TuningMath, { TuningData } from "./TuningMath";

const tuningData = {
  get12EdoData(rootFreq: number): TuningData {
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
    const tuningData = TuningMath.getEqualTemperamentData(
      12,
      2,
      rootFreq,
      noteNames
    );
    tuningData.name = "12EDO";
    return tuningData;
  },

  get19EdoData(rootFreq: number): TuningData {
    var noteNames = [
      "A",
      "A#",
      "Bb",
      "B",
      "B#",
      "C",
      "C#",
      "Db",
      "D",
      "D#",
      "Eb",
      "E",
      "E#",
      "F",
      "F#",
      "Gb",
      "G",
      "G#",
      "Ab",
    ];
    const tuningData = TuningMath.getEqualTemperamentData(
      19,
      2,
      rootFreq,
      noteNames
    );
    tuningData.name = "19EDO";
    return tuningData;
  },

  get22EdoData(rootFreq: number): TuningData {
    var noteNames: string[] = [];
    const tuningData = TuningMath.getEqualTemperamentData(
      22,
      2,
      rootFreq,
      noteNames
    );
    tuningData.name = "22EDO";
    return tuningData;
  },

  get31EdoData(rootFreq: number): TuningData {
    var noteNames: string[] = [
      "A",
      "Bbb",
      "A#",
      "Bb",
      "Ax",
      "B",
      "Cb",
      "B#",
      "C",
      "Bx",
      "C#",
      "Db",
      "Cx",
      "D",
      "Ebb",
      "D#",
      "Eb",
      "Dx",
      "E",
      "Fb",
      "E#",
      "F",
      "Ex",
      "F#",
      "Gb",
      "Fx",
      "G",
      "Fx#",
      "G#",
      "Ab",
      "Gx",
    ];
    const tuningData = TuningMath.getEqualTemperamentData(
      31,
      2,
      rootFreq,
      noteNames
    );
    tuningData.name = "31EDO";
    return tuningData;
  },

  get41EdoData(rootFreq: number): TuningData {
    var noteNames: string[] = [
      "D",
      "^D",
      "^^D",
      "vD#",
      "D#",
      "^D#",
      "vE",
      "E",
      "^E",
      "vF",
      "F",
      "^F",
      "^^F",
      "vF#",
      "F#",
      "^F#",
      "vG",
      "G",
      "^G",
      "^^G",
      "vG#",
      "G#",
      "vvA",
      "vA",
      "A",
      "^A",
      "^^A",
      "vA#",
      "A#",
      "^A#",
      "vB",
      "B",
      "^B",
      "vC",
      "C",
      "^C",
      "^^C",
      "vC#",
      "C#",
      "C#^",
      "vD",
      "D",
    ];
    const tuningData = TuningMath.getEqualTemperamentData(
      41,
      2,
      rootFreq,
      noteNames
    );
    tuningData.name = "41EDO";
    return tuningData;
  },
};

export default tuningData;

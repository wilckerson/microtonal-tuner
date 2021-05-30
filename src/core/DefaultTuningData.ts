import TuningMath, { TuningData } from "./TuningMath";

const tuningData = {
  get12EdoData(rootFreq: number): TuningData {
    var noteNames = [
      "A",
      "A#/Bb",
      "B",
      "C",
      "C#/Db",
      "D",
      "D#/Eb",
      "E",
      "F",
      "F#/Gb",
      "G",
      "G#/Ab",
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
      "A",
      "^A",
      "^^A/vBb",
      "vA#/Bb",
      "A#/^Bb",
      "^A#/vvB",
      "vB",
      "B",
      "^B",
      "vC",
      "C",
      "^C",
      "^^C/vDb",
      "vC#/Db",
      "C#/^Db",
      "C#^/vvD",
      "vD",
      "D",
      "^D",
      "^^D/vEb",
      "vD#/Eb",
      "D#/^Eb",
      "^D#/vvE",
      "vE",
      "E",
      "^E",
      "vF",
      "F",
      "^F",
      "^^F/vGb",
      "vF#/Gb",
      "F#/^Gb",
      "^F#/vvG",
      "vG",
      "G",
      "^G",
      "^^G/vAb",
      "vG#/Ab",
      "G#/^Ab",
      "vvA",
      "vA",
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

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
    tuningData.id = "12EDO";
    tuningData.name = "12EDO";
    tuningData.helpContentHtml = `
    <h5>Standard Guitar Tuning</h5>
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>6th</th>
          <th>5th</th>
          <th>4th</th>
          <th>3rd</th>
          <th>2nd</th>
          <th>1st</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E</td>
          <td>A</td>
          <td>D</td>
          <td>G</td>
          <td>B</td>
          <td>E</td>
        </tr>
      </tbody>
    </table>
    `;
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
    tuningData.id = "19EDO";
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
    tuningData.id = "22EDO";
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
    tuningData.id = "31EDO";
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
    tuningData.id = "41EDO";
    tuningData.name = "41EDO";
    tuningData.helpContentHtml = `
    <a href="https://kiteguitar.com/theory/tunings/" target="_blank">Kite Tuning</a>
    <h5>Kite Guitar - mid-6 down major tuning</h5>
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>6th</th>
          <th>5th</th>
          <th>4th</th>
          <th>3rd</th>
          <th>2nd</th>
          <th>1st</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>^^F</td>
          <td>^A</td>
          <td>C#</td>
          <td>F</td>
          <td>vA</td>
          <td>^^C</td>
        </tr>
      </tbody>
    </table>

    <h5>Kite Guitar - full-8 down major tuning</h5>
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>8th</th>
          <th>7th</th>
          <th>6th</th>
          <th>5th</th>
          <th>4th</th>
          <th>3rd</th>
          <th>2nd</th>
          <th>1st</th>
        </tr>
      </thead>
      <tbody>
        <tr>        
          <td>vD</td>
          <td>^^F</td>
          <td>^A</td>
          <td>C#</td>
          <td>F</td>
          <td>vA</td>
          <td>^^C</td>
          <td>^E</td>
        </tr>
      </tbody>
    </table>
    `;
    return tuningData;
  },
};

export default tuningData;

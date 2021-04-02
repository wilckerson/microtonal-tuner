export type NoteInfo = {
  index: number;
  name: string;
  ratio: number;
  cents: number;
  freq: number;
};
export type TuningData = {
  name?: string;
  base: number;
  notes: NoteInfo[];
};

export default class TuningMath {
  //JustNoticeableDifference
  public static readonly JND_CENTS = 7;

  public static RatioToCents(ratio: number): number {
    const c = 1200 * Math.log2(ratio);
    return c;
  }
  public static GetNormalizedRatioFromFrequency(
    currentFreq: number,
    rootFreq: number,
    tuningBase: number
  ): number {
    var normalizedFreq = currentFreq;

    while (normalizedFreq > rootFreq) {
      normalizedFreq = normalizedFreq / tuningBase;
    }

    while (normalizedFreq < rootFreq) {
      normalizedFreq = normalizedFreq * tuningBase;
    }

    var ratio = normalizedFreq / rootFreq;
    return ratio;
  }
  public static calculateRatioDiff(
    fromRatio: number,
    toRatio: number,
    tuningBase: number
  ): number {
    var diff = Math.abs(fromRatio - toRatio);

    if (fromRatio === 1) {
      const baseDiff = Math.abs(tuningBase - toRatio);
      diff = Math.min(diff, baseDiff);
    }

    return diff;
  }

  public static getEqualTemperamentData(
    numberOfDivisions: number,
    base: number,
    rootFreq: number,
    noteNames: string[]
  ) {
    var notes: any[] = [];
    for (let i = 0; i < numberOfDivisions; i++) {
      var noteRatio = Math.pow(base, i / numberOfDivisions);
      var noteInfo: NoteInfo = {
        index: i + 1,
        name: noteNames[i],
        ratio: noteRatio,
        cents: this.RatioToCents(noteRatio),
        freq: rootFreq * noteRatio,
      };
      notes.push(noteInfo);
    }
    var tuningData: TuningData = {
      base: base,
      notes: notes,
    };
    return tuningData;
  }
}

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
}

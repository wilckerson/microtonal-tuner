type OnFrequencyCallback = (frequency: number) => void;

class FrequencyAnalyzer {
  loopRef!: NodeJS.Timeout;
  analyzer!: AnalyserNode;
  timeDomainData!: Float32Array;
  startTime: number;
  bitCounter: number;
  globk: number;
  onFrequencyCallback: OnFrequencyCallback;
  loopTime = 700; //900;

  constructor(onFrequencyCallback: OnFrequencyCallback) {
    this.startTime = 0;
    this.bitCounter = 0;
    this.globk = 1;
    this.onFrequencyCallback = onFrequencyCallback;
  }

  async start() {
    const audioCtx = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    this.analyzer = audioCtx.createAnalyser();

    this.globk = 1;
    if (audioCtx.sampleRate > 160000) {
      this.globk = 4;
    } else if (audioCtx.sampleRate > 90000) {
      this.globk = 2;
    }
    this.analyzer.fftSize = this.globk * 4096;
    this.analyzer.smoothingTimeConstant = 0;
    //var r = new Date(new Date().getTime() + 2592e6);

    const mediaStream = await navigator?.mediaDevices?.getUserMedia({
      audio: {
        noiseSuppression: !1,
        echoCancellation: !0,
      },
    });

    const source = audioCtx.createMediaStreamSource(mediaStream);
    source.connect(this.analyzer);
    this.timeDomainData = new Float32Array(this.analyzer.fftSize);
    this.bitCounter = audioCtx.sampleRate;
    this.startTime = Date.now();

    this.loopRef = setInterval(() => {
      this.startTime = Date.now();
      this.analyzerLoop();
    }, this.loopTime);
  }

  analyzerLoop() {
    this.analyzer.getFloatTimeDomainData(this.timeDomainData);
    const waveLengthResult = this.findWaveLength(
      this.timeDomainData,
      this.globk * 24,
      this.globk * 1200,
      10,
      10,
      0.016,
      Math.ceil(10 / this.globk)
    );
    const frequency = this.bitCounter / waveLengthResult;

    if (frequency > 0 && this.onFrequencyCallback !== undefined) {
      this.onFrequencyCallback(frequency);
    }
  }

  findWaveLength(
    e: Float32Array,
    r: number,
    t: number,
    o: number,
    n: number,
    a: number,
    i: number
  ) {
    let s = [];
    let u = 0,
      c = 0,
      l = 0;
    for (let m = 0; m < e.length - 1; m++) {
      s.push(e[m]);
      for (var d = 1; i > d; d++) {
        s.push(e[m] + ((e[m + 1] - e[m]) * d) / i);
      }
    }
    s.push(e[e.length - 1]);
    r *= i;
    t *= i;

    let g = s.length,
      f = [],
      h = 0,
      w = 0,
      A = 0;
    for (let dd = 0; t > dd; dd++) {
      if (Math.abs(s[dd]) > h) {
        w = dd;
        h = Math.abs(s[dd]);
      }
      A += Math.abs(s[dd]);
    }
    if (a > A / t) return -1;
    if (0 === w || w === t) return -1;
    for (
      var C = 0,
        D = 0,
        v = 0,
        y = 0,
        p = 0,
        T = 0,
        F = 0,
        b = 0,
        k = 0,
        ddd = r;
      t >= ddd;
      ddd++
    ) {
      F = 0;
      b = 0;
      C = 0;
      D = 0;
      for (var N = w; g > N; N += ddd) {
        F += s[N];
        if (0 !== b && g - 5 * i > N) {
          k = s[N] / s[w];
          if (k > 0) {
            if (k > 1) {
              k = 1;
            }
            u = s[N];
            l = s[N - 5 * i];
            c = s[N + 5 * i];
            if (s[w] >= 0) {
              if (u > c && u > l) {
                C += (k * k * k * k * s[w] * o * (t - ddd)) / t;
                D++;
              }
            } else if (c > u && l > u) {
              C += (k * k * k * k * s[w] * o * (t - ddd)) / t;
              D++;
            }
          }
        }
        b++;
        if (b >= n) {
          N = g;
        }
      }
      F += (C * D) / b;
      F /= b;
      if (F > v) {
        v = F;
        p = ddd;
      } else if (y > F) {
        y = F;
        T = ddd;
      }
      f.push(F);
    }
    return s[w] >= 0 ? p / i : T / i;
  }
}

export default FrequencyAnalyzer;

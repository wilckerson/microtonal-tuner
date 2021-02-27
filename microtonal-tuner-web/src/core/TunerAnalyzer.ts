class TunerAnalyzer {
  constructor() {}

  analyzeFrequency(currentFreq: number, rootFreq: number) {
    var tuningData = {
      base: 2,
      notes: [
        {
          name: "A",
          ratio: 1,
          cents: 0,
          freq: 440,
        },
        {
          name: "A#",
          ratio: 1.059463094359295264,
          cents: 100,
          freq: 466.16376151808,
        },
      ],
    };

    //Normalizar nota entra root e root * base
    //Verificar em qual está mais próximo
    //Calcular a diferença em cents

    return { noteName: 1, centsOff: -10 };
  }
}

export default TunerAnalyzer;

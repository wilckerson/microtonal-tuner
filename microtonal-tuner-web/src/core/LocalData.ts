import DefaultTuningData from "./DefaultTuningData";
import { TuningData } from "./TuningMath";

const LocalData = {
  setRootNote(rootNote: number) {
    localStorage.setItem("rootNote", rootNote.toString());
  },
  getRootNote() {
    const rootNoteText = localStorage.getItem("rootNote") || "440";
    return parseFloat(rootNoteText);
  },
  getCurrentTuningIndex(): number {
    const currentTuningIndexText =
      localStorage.getItem("currentTuningIndex") || "0";
    var currentTuningIndex = parseInt(currentTuningIndexText);
    return currentTuningIndex;
  },
  setCurrentTuningIndex(index: number) {
    localStorage.setItem("currentTuningIndex", index.toString());
  },
  getTuningList(): TuningData[] {
    try {
      const tuningListText = localStorage.getItem("tuningList") || "emptyData";
      var tuningList = JSON.parse(tuningListText);
      return tuningList;
    } catch (e) {
      var data: TuningData[] = [
        DefaultTuningData.get12EdoData(this.getRootNote()),
        DefaultTuningData.get19EdoData(this.getRootNote()),
        DefaultTuningData.get22EdoData(this.getRootNote()),
        DefaultTuningData.get31EdoData(this.getRootNote()),
        DefaultTuningData.get41EdoData(this.getRootNote()),
      ];
      return data;
    }
  },
};

export default LocalData;

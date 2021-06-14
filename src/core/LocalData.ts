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
  saveTuningList(tuningList: TuningData[]) {
    var tuningListText = JSON.stringify(tuningList);
    localStorage.setItem("tuningList", tuningListText);
  },
  getTuningById(id: string): TuningData | undefined {
    const tuningList = this.getTuningList();
    var existingTuning = tuningList.find((item) => item.id === id);
    return existingTuning;
  },
  saveTuning(tuning: TuningData) {
    const tuningList = this.getTuningList();

    const isExistingTuning = !!tuning.id;
    if (isExistingTuning) {
      //update
      var existingTuningIndex = tuningList.findIndex(
        (item) => item.id === tuning.id
      );
      tuningList[existingTuningIndex] = tuning;
    } else {
      //insert
      tuning.id = new Date().getTime().toString();
      tuningList.push(tuning);
    }
    this.saveTuningList(tuningList);
  },
};

export default LocalData;

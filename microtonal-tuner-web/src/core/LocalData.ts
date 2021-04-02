const LocalData = {
  setRootNote(rootNote: number) {
    localStorage.setItem("rootNote", rootNote.toString());
  },
  getRootNote() {
    const rootNoteText = localStorage.getItem("rootNote") || "440";
    return parseFloat(rootNoteText);
  },
};

export default LocalData;

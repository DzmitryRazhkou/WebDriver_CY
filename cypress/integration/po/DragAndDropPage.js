class DragAndDropPage {
  dragAndDropPageLocators = {
    BOX_A: () => cy.get("#column-a header"),
    BOX_B: () => cy.get("#column-b header"),
  };

  performDragAndDrop() {
    const dataTransfer = new DataTransfer();
    this.dragAndDropPageLocators.BOX_A().trigger("dragstart", {
      dataTransfer,
    });
    this.dragAndDropPageLocators.BOX_B().trigger("drop", {
      dataTransfer,
    });
  }

  validateTransfer(optionBox_A, optionBox_B) {
    this.dragAndDropPageLocators.BOX_A().then((txt) => {
      const boxATxt = txt.text();
      expect(boxATxt).to.be.equal(optionBox_B);
    });
    this.dragAndDropPageLocators.BOX_B().then((txt) => {
      const boxBTxt = txt.text();
      expect(boxBTxt).to.be.equal(optionBox_A);
    });
  }
}

export default DragAndDropPage;

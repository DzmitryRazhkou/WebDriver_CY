class ContextMenuPage {
  contextMenuPageLocators = {
    HOTSPOT: () => cy.get("#hot-spot"),
  };

  performRightClick() {
    this.contextMenuPageLocators.HOTSPOT().rightclick({ force: true });
  }

  alertHandled(alertTxt) {
    cy.on("window:confirm", (str) => {
      expect(str).to.eql(alertTxt);
    });
  }
}

export default ContextMenuPage;

class IframePage {
  iframePageLocators = {
    CROSS: () => cy.get("div[aria-label='Close']"),
    IFRAME: () => cy.get("iframe[id='mce_0_ifr']"),
  };

  closeAlert() {
    this.iframePageLocators.CROSS().click();
  }

  switchToFrameSendTxt(existingTxt, proposalTxt) {
    const iframe = this.iframePageLocators
      .IFRAME()
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    cy.log(" =====> INSIDE IFRAME <===== ");
    iframe.should("have.text", existingTxt).and("be.visible");
    iframe
      .clear()
      .type(proposalTxt)
      .should("have.text", proposalTxt)
      .and("be.visible");
  }
}
export default IframePage;

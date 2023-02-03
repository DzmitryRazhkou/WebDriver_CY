class OpenNewTabPage {
  openNewTabPageLocators = {
    CLICK_HERE: () => cy.get(".example > a"),
  };

  clickOnTheLink() {
    this.openNewTabPageLocators
      .CLICK_HERE()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
  }

  validateChildPage(titlePage) {
    cy.title().should("eq", titlePage);
  }
}
export default OpenNewTabPage;

class DynamicLoadingPage {
  dynamicLoadingPageLocators = {
    START_BTN: () => cy.get("div[id='start'] button"),
    HELLO_HEADER: () => cy.get("div[id='finish'] h4"),
  };

  doClickStartBtn() {
    this.dynamicLoadingPageLocators.START_BTN().click();
  }

  isHelloHeaderDisplayed(txt) {
    this.dynamicLoadingPageLocators.HELLO_HEADER().should("have.text", txt);
  }
}
export default DynamicLoadingPage;

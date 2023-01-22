class DynamicControlsPage {
  dynamicControlsPageLocators = {
    CHECKBOX: () => cy.get("input[type='checkbox']"),
    MESSAGE: () => cy.get("p[id='message']"),
    REMOVE_ADD_BTN: () => cy.get("button[onclick='swapCheckbox()']"),
    ENABLE_DISABLE: () => cy.get("button[onclick='swapInput()']"),
  };

  doClickCheckBox() {
    this.dynamicControlsPageLocators.CHECKBOX().check().should("be.checked");
  }

  doRemoveAddCheckBox() {
    this.dynamicControlsPageLocators.REMOVE_ADD_BTN().click();
  }

  isMessageDisplayed(txt) {
    this.dynamicControlsPageLocators.MESSAGE().should("have.text", txt);
  }

  doClickOnEnableDisable() {
    this.dynamicControlsPageLocators.ENABLE_DISABLE().click();
  }
}
export default DynamicControlsPage;

class CheckBoxPage {
  checkBoxPageLocators = {
    CHECKBOX1: () => cy.get("input[type='checkbox']:first-of-type"),
    CHECKBOX2: () => cy.get("input[type='checkbox']:last-of-type"),
  };

  getCheckBox1() {
    this.checkBoxPageLocators
      .CHECKBOX1()
      .check()
      .should("be.checked")
      .and("be.visible");
  }

  getCheckBox2() {
    this.checkBoxPageLocators
      .CHECKBOX2()
      .uncheck()
      .should("not.be.checked")
      .and("be.visible");
  }
}

export default CheckBoxPage;

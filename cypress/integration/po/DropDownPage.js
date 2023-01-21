class DropDownPage {
  dropDownPageLocators = {
    DROP_DOWN: () => cy.get("select[id='dropdown']"),
  };

  selectDropDown(option, value) {
    this.dropDownPageLocators
      .DROP_DOWN()
      .select(option)
      .should("have.value", value);
  }
}
export default DropDownPage;

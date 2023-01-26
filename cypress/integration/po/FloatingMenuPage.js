class FloatingMenuPage {
  floatingMenuPageLocators = {
    MENU: () => cy.get("#menu ul li"),
  };

  isFloatingMenuDisplayed(listOfFloatingMenu) {
    const floatMenuList = [];
    this.floatingMenuPageLocators
      .MENU()
      .each(($el) => {
        floatMenuList.push($el.text());
      })
      .then(() => {
        expect(floatMenuList).to.be.includes(listOfFloatingMenu);
      });
  }

  doScrollDown() {
    cy.scrollTo("bottom", { timeout: 3000 });
    cy.log(" =====> WEB PAGE HAS BEEN SCROLLED DOWN <===== ");
  }

  doScrollUp() {
    cy.scrollTo("top", { timeout: 3000 });
    cy.log(" =====> WEB PAGE HAS BEEN SCROLLED UP <===== ");
  }
}
export default FloatingMenuPage;

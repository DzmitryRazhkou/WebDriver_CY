class MouseHover {
  mouseHoverPageLocators = {
    USERS: () => cy.get("div[class='figure']"),
  };

  areFiguresDisplayed(listOfTxt, lengthOfElements) {
    this.mouseHoverPageLocators.USERS().each(($el, $index, $list) => {
      expect($list).to.have.length(lengthOfElements);
      cy.wrap($el).trigger("mouseover").should("be.visible");
      cy.log($el.find("h5").text());
      expect(Cypress.$($el).find("h5").text()).to.eq(listOfTxt[$index]);
    });
  }
}
export default MouseHover;

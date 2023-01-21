class DynamicContentPage {
  dynamicContentPageLocators = {
    IMAGES: () => cy.get("#content div div img"),
    CONTENT: () => cy.get("#content div div:nth-child(2)"),
  };

  getListOfImages() {
    let listOfImages = [];
    this.dynamicContentPageLocators.IMAGES().each(($el) => {
      let list = $el.attr("src");
      listOfImages.push(list);
    });
    cy.log(listOfImages);
    return listOfImages;
  }

  getContentList() {
    let listOfContent = [];
    this.dynamicContentPageLocators.CONTENT().each(($el) => {
      let list = $el.text();
      listOfContent.push(list);
    });
    cy.log(listOfContent);
    return listOfContent;
  }

  refreshPage() {
    cy.log(" =====> The Web Page Has Been Relaoded <===== ");
    cy.reload();
  }

  assertNotEqual(s1, s2) {
    if (expect(s1).not.to.equal(s2)) {
      cy.log(" =====> The Arrays Are Not Equal After Refreshing Page <===== ");
    } else {
      cy.log(" =====> Dedug Arrays Locators <===== ");
    }
  }
}
export default DynamicContentPage;

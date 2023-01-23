class FileDownloadPage {
  fileDownloadPageLocators = {
    FILE_LINK: () => cy.get("div[id='content'] div a"),
  };

  doClickFileLink(fileName) {
    this.fileDownloadPageLocators.FILE_LINK().each(($el) => {
      let listOfFileNames = $el.text();
      if (listOfFileNames.includes(fileName)) {
        cy.wrap($el).click();
      }
    });
  }

  customClickOnTheDownlloadLink() {
    cy.window()
      .document()
      .then(function (doc) {
        doc.addEventListener("click", () => {
          setTimeout(function () {
            doc.location.reload();
          }),
            5000;
        });
        cy.get("div[id='content'] div a").eq(0).click();
      });
  }

  clickDownloadFile(url, path, file) {
    cy.downloadFile(url, path, file);
    cy.log(" =====> FILE HAS BEEN DOWNLOADED <===== ");
  }

  validateExistFile(file) {
    cy.verifyDownload(file);
  }
}
export default FileDownloadPage;

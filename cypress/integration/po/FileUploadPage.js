class FileUploadPage {
  fileUploadPageLocators = {
    CHOOSE_FILE: () => cy.get("#file-upload"),
    UPLOAD: () => cy.get("#file-submit"),
    FILE_UPLOADED: () => cy.get("div[class='example'] h3"),
  };

  fileUpload(filePath) {
    this.fileUploadPageLocators.CHOOSE_FILE().attachFile(filePath);
    this.fileUploadPageLocators.UPLOAD().click();
  }

  validateExistFile(msg) {
    this.fileUploadPageLocators.FILE_UPLOADED().should("contain.text", msg);
  }
}
export default FileUploadPage;

import LoginSuccessPage from "../po/LoginSuccessPage";
import CheckBoxPage from "../po/CheckBoxPage";
import ContextMenuPage from "../po/ContextMenuPage";
import DragAndDropPage from "../po/DragAndDropPage";
import DropDownPage from "../po/DropDownPage";
import DynamicContentPage from "../po/DynamicContentPage";
import DynamicControlsPage from "../po/DynamicControlsPage";
import DynamicLoadingPage from "../po/DynamicLoadingPage";
import FileDownloadPage from "../po/FileDownloadPage";
import FileUploadPage from "../po/FileUploadPage";

const loginSuccessPage = new LoginSuccessPage();
const checkBoxPage = new CheckBoxPage();
const contextMenuPage = new ContextMenuPage();
const dragAndDropPage = new DragAndDropPage();
const dropDownPage = new DropDownPage();
const dynamicContentPage = new DynamicContentPage();
const dynamicControlsPage = new DynamicControlsPage();
const dynamicLoadingPage = new DynamicLoadingPage();
const fileDownloadPage = new FileDownloadPage();
const fileUploadPage = new FileUploadPage();

let dataLoginPage;
let dataContextMenuPage;
let dataDragAndDropPage;
let dataDropDownPage;
let dataDynamicControlsPage;
let dataDynamicLoadingPage;
let dataFileDownloadPage;
let dataFileUploadPage;

describe("WedDriver Cypress Test", () => {
  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.launch("baseUrl");

    cy.fixture("loginPage").then((data) => {
      dataLoginPage = data;
      return dataLoginPage;
    });
    cy.fixture("contextMenu").then((data) => {
      dataContextMenuPage = data;
      return dataContextMenuPage;
    });
    cy.fixture("dragAndDrop").then((data) => {
      dataDragAndDropPage = data;
      return dataDragAndDropPage;
    });
    cy.fixture("dropDown").then((data) => {
      dataDropDownPage = data;
      return dataDropDownPage;
    });
    cy.fixture("dynamicControls").then((data) => {
      dataDynamicControlsPage = data;
      return dataDynamicControlsPage;
    });
    cy.fixture("dynamicLoading").then((data) => {
      dataDynamicLoadingPage = data;
      return dataDynamicLoadingPage;
    });
    cy.fixture("fileDownload").then((data) => {
      dataFileDownloadPage = data;
      return dataFileDownloadPage;
    });
    cy.fixture("fileUpload").then((data) => {
      dataFileUploadPage = data;
      return dataFileUploadPage;
    });
  });

  it("Login Success Page Test", () => {
    cy.launch("loginSuccessUrl");
    const userName = dataLoginPage.validCredentials.userName;
    const psw = dataLoginPage.validCredentials.password;
    const successMessage = dataLoginPage.validCredentials.successMessage;
    loginSuccessPage.loginSuccess(userName, psw);
    loginSuccessPage.getSuccessMessage(successMessage);
  });

  it("Login Invalid Password Page Test", () => {
    cy.launch("loginSuccessUrl");
    const userName = dataLoginPage.invalidCredentilas.userName;
    const psw = dataLoginPage.invalidCredentilas.password;
    const invalidPasswordMessage =
      dataLoginPage.invalidCredentilas.invalidPasswordMessage;
    loginSuccessPage.loginSuccess(userName, psw);
    loginSuccessPage.getInvalidPasswordMessage(invalidPasswordMessage);
  });

  it("CheckBox Page Test", () => {
    cy.launch("checkBoxUrl");
    checkBoxPage.getCheckBox1();
    checkBoxPage.getCheckBox2();
  });

  it("Context Menu Page Test", () => {
    const alertMessage = dataContextMenuPage.contextMenuAlertMsg;
    cy.launch("contextMenuUrl");

    contextMenuPage.performRightClick();
    contextMenuPage.alertHandled(alertMessage);
  });

  it("Drag And Drop Page Test", () => {
    cy.launch("dragAndDropUrl");
    const box_A = dataDragAndDropPage.box_A;
    const box_B = dataDragAndDropPage.box_B;
    dragAndDropPage.performDragAndDrop();
    dragAndDropPage.validateTransfer(box_A, box_B);
  });

  it("Drop Down Page Test", () => {
    cy.launch("dropDownUrl");
    const option1 = dataDropDownPage.option1;
    const option2 = dataDropDownPage.option2;
    const value1 = dataDropDownPage.value1;
    const value2 = dataDropDownPage.value2;

    dropDownPage.selectDropDown(option1, value1);
    dropDownPage.selectDropDown(option2, value2);
  });

  it("Dynamic Content Page Test", () => {
    cy.launch("dynamicContentUrl");
    let imageListBeforeRefreshPage = dynamicContentPage.getListOfImages();
    let contentListBeforeRefreshPage = dynamicContentPage.getContentList();
    dynamicContentPage.refreshPage();
    let imageListAfterRefreshPage = dynamicContentPage.getListOfImages();
    let contentListAfterRefreshPage = dynamicContentPage.getContentList();
    dynamicContentPage.assertNotEqual(
      imageListBeforeRefreshPage,
      imageListAfterRefreshPage
    );
    dynamicContentPage.assertNotEqual(
      contentListBeforeRefreshPage,
      contentListAfterRefreshPage
    );
  });

  it("Dynamic Controls Page Test", () => {
    const removeMsg = dataDynamicControlsPage.remove_add.removeMsg;
    const addMsg = dataDynamicControlsPage.remove_add.addMsg;
    const enabled = dataDynamicControlsPage.enabled_disabled.enabled;
    const disabled = dataDynamicControlsPage.enabled_disabled.disabled;

    cy.launch("dynamicControlsUrl");

    cy.log(" =====> REMOVE/ADD CHECKBOXES <===== ");
    dynamicControlsPage.doClickCheckBox();
    dynamicControlsPage.doRemoveAddCheckBox();
    dynamicControlsPage.isMessageDisplayed(removeMsg);

    dynamicControlsPage.doRemoveAddCheckBox();
    dynamicControlsPage.isMessageDisplayed(addMsg);

    cy.log(" =====> ENABLED/DISABLED <===== ");
    dynamicControlsPage.doClickOnEnableDisable();
    dynamicControlsPage.isMessageDisplayed(enabled);

    dynamicControlsPage.doClickOnEnableDisable();
    dynamicControlsPage.isMessageDisplayed(disabled);
  });

  it("Dynamic Loading Page Test", () => {
    const helloHeaderTxt = dataDynamicLoadingPage.helloHeaderTxt;

    cy.launch("dynamicLoadingUrl");
    dynamicLoadingPage.doClickStartBtn();
    dynamicLoadingPage.isHelloHeaderDisplayed(helloHeaderTxt);
  });

  it("File Download Page Test", () => {
    const url = dataFileDownloadPage.downloadUrl;
    const path = dataFileDownloadPage.downloadFolderPath;
    const file = dataFileDownloadPage.fileName;

    cy.launch("fileDownloadUrl");
    fileDownloadPage.clickDownloadFile(url, path, file);
    fileDownloadPage.validateExistFile(file);
  });

  it("File Upload Page Test", () => {
    const filePath = dataFileUploadPage.filePath;
    const uploadMsg = dataFileUploadPage.uploadMsg;

    cy.launch("fileUploadUrl");
    fileUploadPage.fileUpload(filePath);
    fileUploadPage.validateExistFile(uploadMsg);
  });

  it.only("Floating Menu Page Test", () => {
    const filePath = dataFileUploadPage.filePath;
    const uploadMsg = dataFileUploadPage.uploadMsg;

    cy.launch("fileUploadUrl");
    fileUploadPage.fileUpload(filePath);
    fileUploadPage.validateExistFile(uploadMsg);
  });
});

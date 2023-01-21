import LoginSuccessPage from "../po/LoginSuccessPage";
import CheckBoxPage from "../po/CheckBoxPage";
import ContextMenuPage from "../po/ContextMenuPage";
import DragAndDropPage from "../po/DragAndDropPage";
import DropDownPage from "../po/DropDownPage";

const loginSuccessPage = new LoginSuccessPage();
const checkBoxPage = new CheckBoxPage();
const contextMenuPage = new ContextMenuPage();
const dragAndDropPage = new DragAndDropPage();
const dropDownPage = new DropDownPage();

let dataLoginPage;
let dataContextMenuPage;
let dataDragAndDropPage;
let dataDropDownPage;

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
});

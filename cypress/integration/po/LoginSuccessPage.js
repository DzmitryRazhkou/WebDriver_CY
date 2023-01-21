class LoginSuccessPage {
  loginPageLocators = {
    USERNAME_FIELD: () => cy.get("#username"),
    PASSWORD_FIELD: () => cy.get("#password"),
    LOGIN_BTN: () => cy.get("button[class='radius']"),
    SUCCESS_LOGIN_MESSAGE: () => cy.get("#flash"),
    INVALID_PASSWORD_MESSAGE: () => cy.get("#flash-messages"),
  };

  loginSuccess(userName, psw) {
    this.loginPageLocators
      .USERNAME_FIELD()
      .type(userName)
      .blur({ force: true });
    this.loginPageLocators.PASSWORD_FIELD().type(psw).blur({ force: true });
    this.loginPageLocators.LOGIN_BTN().click();
  }

  getSuccessMessage(successMessage) {
    this.loginPageLocators.SUCCESS_LOGIN_MESSAGE().then((txt) => {
      const successMessageTxt = txt.text().replaceAll("×", "").trim();
      if (successMessageTxt === successMessage) {
        cy.log(" =====> " + successMessageTxt + " <===== ");
      } else {
        this.loginPageLocators
          .SUCCESS_LOGIN_MESSAGE()
          .should("not.have.text", successMessage);
        cy.log(" =====> Provide The Right Locator For The Page Link <===== ");
      }
    });
  }

  getInvalidPasswordMessage(invalidPasswordMessage) {
    this.loginPageLocators.INVALID_PASSWORD_MESSAGE().then((txt) => {
      const invalidPasswordMessageTxt = txt.text().replaceAll("×", "").trim();
      if (invalidPasswordMessageTxt === invalidPasswordMessage) {
        cy.log(" =====> " + invalidPasswordMessageTxt + " <===== ");
      } else {
        this.loginPageLocators
          .INVALID_PASSWORD_MESSAGE()
          .should("not.have.text", invalidPasswordMessage);
        cy.log(" =====> Provide The Right Locator For The Page Link <===== ");
      }
    });
  }
}
export default LoginSuccessPage;

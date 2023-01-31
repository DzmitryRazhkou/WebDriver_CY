class JavaScriptAlertsPage {
  javaScriptAlertPageLocators = {
    JS_ALERT: () => cy.get("button[onclick='jsAlert()']"),
    JS_CONFIRM: () => cy.get("button[onclick='jsConfirm()']"),
    JS_PROMPT: () => cy.get("button[onclick='jsPrompt()']"),
    ALERT_MSG: () => cy.get("p#result"),
  };

  clickJSAlert() {
    cy.log(" =====> JS ALERT <===== ");
    this.javaScriptAlertPageLocators.JS_ALERT().click();
  }

  clickJSConfirm() {
    cy.log(" =====> JS CONFIRM <===== ");
    this.javaScriptAlertPageLocators.JS_CONFIRM().click();
  }

  confirmFirstWay(msgInside) {
    cy.log(" =====> 1ST WAY <===== ");
    cy.on("window:alert", (alertTxt) => {
      expect(alertTxt).to.eql(msgInside);
    });
  }

  confirmSecondWay(msgInside) {
    cy.log(" =====> 2ND WAY <===== ");
    const stub = cy.stub();
    stub.onFirstCall().returns(true);
    cy.on("window:alert", stub).then(() => {
      expect(stub.getCall(1)).to.be.calledWithExactly(msgInside);
    });
  }

  handleJSConfrim(msgInside) {
    const stub = cy.stub();
    cy.on("window:confirm", stub).then(() => {
      expect(stub.getCall(0)).to.be.calledWithExactly(msgInside);
    });
  }

  handleJSPrompt(sentTxt, msg) {
    cy.log(" =====> JS PROMPT <===== ");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(sentTxt);
      this.javaScriptAlertPageLocators.JS_PROMPT().click();
      this.javaScriptAlertPageLocators.ALERT_MSG().contains(msg);
    });
  }

  getAlertMessage(msg) {
    this.javaScriptAlertPageLocators.ALERT_MSG().should("have.text", msg);
  }
}
export default JavaScriptAlertsPage;

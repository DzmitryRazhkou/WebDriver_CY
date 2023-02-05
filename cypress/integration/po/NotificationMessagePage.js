class NotificationMessagePage {
  notificationMessagePageLocators = {
    CLICK_HERE: () => cy.get("p > a"),
    MESSAGE: () => cy.get("#flash"),
  };

  clickOnTheLink() {
    this.notificationMessagePageLocators
      .CLICK_HERE()
      .should("be.visible")
      .click();
  }

  clickLinkVerifyMessages(messagesOfList, times) {
    let listOfAlerts = [];
    for (let i = 1; i < times; i++) {
      this.clickOnTheLink();
      cy.log(" =====> CLICK NUMBER " + i + " <===== ");
      this.notificationMessagePageLocators
        .MESSAGE()
        .each(($el) => {
          let alertMessage = $el.text().replace(/\n/g, "").trim();
          alertMessage = alertMessage.replace("            ×", "");
          cy.log(" =====> THE RAISED MESSAGE IS: " + alertMessage + " <===== ");
          listOfAlerts.push(alertMessage);
        })
        .then(() => {
          let result = messagesOfList.some(($list) =>
            listOfAlerts.includes($list)
          );
          expect(result).to.be.true;
        });
    }
  }
}

export default NotificationMessagePage;

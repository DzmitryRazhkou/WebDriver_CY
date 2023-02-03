class JavaScriptErrorPage {
  handleJSError(message) {
    cy.log(" =====> JS ERROR <===== ");
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes(message)) {
        console.log("Application Error Javascript Token");
        return false;
      }
      return true;
    });
  }
}
export default JavaScriptErrorPage;

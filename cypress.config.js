const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { isFileExist, findFiles } = require("cy-verify-downloads");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  chromeWebSecurity: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  failOnStausCode: false,
  projectId: "jxjsus",

  env: {
    baseUrl: "http://localhost:7080",
    loginSuccessUrl: "http://localhost:7080/login",
    checkBoxUrl: "http://localhost:7080/checkboxes",
    contextMenuUrl: "http://localhost:7080/context_menu",
    dragAndDropUrl: "http://localhost:7080/drag_and_drop",
    dropDownUrl: "http://localhost:7080/dropdown",
    dynamicContentUrl:
      "http://localhost:7080/dynamic_content?with_content=static",
    dynamicControlsUrl: "http://localhost:7080/dynamic_controls",
    dynamicLoadingUrl: "http://localhost:7080/dynamic_loading/2",
    fileDownloadUrl: "http://localhost:7080/download",
    fileUploadUrl: "http://localhost:7080/upload",
    floatingMenuUrl: "http://localhost:7080/floating_menu",
    iFrameUrl: "http://localhost:7080/iframe",
    mouseHoverUrl: "http://localhost:7080/hovers",
    javaScriptAlertsUrl: "http://localhost:7080/javascript_alerts",
    javaScriptErrorUrl: "http://localhost:7080/javascript_error",
    openNewTabUrl: "http://localhost:7080/windows",
    notificationMessageUrl:
      "http://localhost:7080/notification_message_rendered",
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
      on("task", { isFileExist, findFiles });
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    specPattern: "cypress/integration/test/*.js",
  },
});

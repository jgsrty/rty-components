"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("./src/button/index2.js");
const index = {
  install(app) {
    const components = Object.assign({});
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./", "").split("/")[0];
      app.component(componentName, vue.defineAsyncComponent(fn));
    }
  }
};
exports.xmdButton = index$1;
exports.default = index;

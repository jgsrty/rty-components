"use strict";
const vue = require("vue");
const _interopNamespaceDefaultOnly = (e) => Object.freeze(Object.defineProperty({ __proto__: null, default: e }, Symbol.toStringTag, { value: "Module" }));
const index = {
  install(app) {
    const components = Object.assign({ "./button/index.vue": () => Promise.resolve().then(() => /* @__PURE__ */ _interopNamespaceDefaultOnly(require("./button/index.js"))) });
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./", "").split("/")[0];
      app.component(componentName, vue.defineAsyncComponent(fn));
    }
  }
};
module.exports = index;

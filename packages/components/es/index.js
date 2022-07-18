import { defineAsyncComponent } from "vue";
import { default as default2 } from "./src/button/index2.js";
const index = {
  install(app) {
    const components = Object.assign({});
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./", "").split("/")[0];
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
export {
  index as default,
  default2 as xmdButton
};

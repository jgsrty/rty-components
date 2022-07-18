import { defineAsyncComponent } from "vue";
const index = {
  install(app) {
    const components = Object.assign({ "./button/index.vue": () => import("./button/index.js") });
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./", "").split("/")[0];
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
export {
  index as default
};

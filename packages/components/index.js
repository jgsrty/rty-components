import { defineAsyncComponent } from "vue";

export default {
  install(app) {
    // 获取当前路径下的所有文件夹中的index.vue
    const components = import.meta.glob("./*/index.vue");
    // 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./", "").split("/")[0];
      // 利用app.component进行注册
      app.component(componentName, defineAsyncComponent(fn));
    }
  },
};

import xmdButton from "./src/button";

export {
  xmdButton
}
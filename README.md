# Fan Configs

公共配置项、插件，

##### Configs

- FanUnoConfig

  ```js
  // uno.config.ts
  import { defineConfig } from 'unocss'
  import { FanUnoConfig } from 'fan-configs'

  export default defineConfig({
  	rules: [
  		// ...之前已存在的，可以并行一段时间，然后逐步替换掉

  		...FanUnoConfig.rules
  	]
  })
  ```

##### Plugins

- VuePluginInlineStylePxTransform 行内样式 px 转 rem/rpx 等

  ```js
  // vite.config.ts
  import { defineConfig } from 'vite'
  import Vue from '@vitejs/plugin-vue'
  import { VuePluginInlineStylePxTransform } from 'fan-configs'
  // 或者，某些项目可能需要这么引入
  // import VuePluginInlineStylePxTransform from 'fan-configs/vue-plugin-inline-style-px-transform'

  export default defineConfig({
  	plugins: [VuePluginInlineStylePxTransform({ platform: 'h5' }), Vue()]
  })
  ```

### Install

```
pnpm add -D git+https://gitee.com/thiszhong/fan-configs.git#v0.0.2
```

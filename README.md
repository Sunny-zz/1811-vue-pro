# vue-shequ

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 部署

###### history 模式

1. 我们部署的服务器是 xxx.coding.me/may-pro
2. 需要在项目的根目录下新建 vue.config.js 配置 publicPath
3. 将所有相关路由的地址都改成 /may-pro 前缀
4. 你在其他的页面直接刷新的时候会出现 404 页面，可以利用后台的服务器

###### hash 模式

1. 页面的地址会加上 /#/
2. 需要在项目的根目录下新建 vue.config.js 配置 publicPath
3. 将所有相关路由的地址都和原来一样

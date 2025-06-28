
## Pinia + vk-uview

此demo使用HBuilder4.57开发

## 插件
- 无线ADB [https://ext.dcloud.net.cn/plugin?name=vnmy-adbWifiConnect](https://ext.dcloud.net.cn/plugin?name=vnmy-adbWifiConnect)

## 目录结构
- common 通用目录
- components 组件目录
- config 配置目录
- doc 文档
- pages 页面
- request 请求封装
- static 静态文件目录
- stores 状态管理目录
- Interceptor 页面路由拦截器 （当前状态未开启）

## 运行
### 安装组件

vk-uview [https://ext.dcloud.net.cn/plugin?name=vk-uview-ui](https://ext.dcloud.net.cn/plugin?name=vk-uview-ui)

LimeTransition [https://ext.dcloud.net.cn/plugin?name=lime-transition](https://ext.dcloud.net.cn/plugin?name=lime-transition)


### Step1 安装SCSS支持
 uview赖SCSS，请在HX菜单的 工具->插件安装中找到 "dart-sass编译" 和 "scss/sass编译" 插件进行安装，安装完后重启下HBX
 
### Step2 直接运行

可运行至浏览器或手机调试基座

## 开发

### vk-uview 文档

[https://vkuviewdoc.fsq.pub/components/button.html](https://vkuviewdoc.fsq.pub/components/button.html)

### Tabbar

项目配置了uview的Tabbar替代uniapp自带的Tabbar，如需修改Tabbar内容，需要同时修改 `pages.json` 和 `common/tabbar.ts` 这两个文件

### 动画

动画使用LimeTransition实现，文档地址[https://limex.qcoon.cn/components/transition.html#lime-transition-%E5%8A%A8%E7%94%BB](https://limex.qcoon.cn/components/transition.html#lime-transition-%E5%8A%A8%E7%94%BB)
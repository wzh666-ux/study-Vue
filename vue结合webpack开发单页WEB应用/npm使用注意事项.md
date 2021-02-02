## *npm*使用注意事项
>1. 一定要先安装node.js。*[附上node.js下载地址](https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi)。
>2. 改变npm源为国内镜像源，以改淘宝镜像源为例。
>这里，也给上国内所有的npm镜像源网站。*[点击查看](https://www.yuque.com/fvxoda/vgveyq/pv5gwr)
>3. 所有的代码命令都要在**cmd命令窗口**中输入。

修改npm仓库为淘宝的镜像网址，代码如下:
```
npm config set registry https://registry.npm.taobao.org
```
检查是否配置成功，代码如下:
```
npm config get registry
```
>4. 上述配置完成后，即可从npm仓库种下载各类资源。

这里以下载vue-cli为例子，代码如下：
```
npm install -g @vue/cli
```
开始进入阅读*[webpack的基本用法.md](webpack的基本用法\webpack的基本用法.md)
*********************

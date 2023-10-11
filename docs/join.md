---
title: '参与共建'
desc: '参与共建'
---

::: warning ⚠开发注意事项
请务必保证代码规范及质量，在提交的时候会进行校验，不通过则无法提交，可通过命令`yarn lint`进行代码检查，`yarn lint:fix`进行代码修复。

请仔细阅读本文档，严格按照以下流程参与共建，你需要拉取新分支来共建代码。
:::


该项目采用的是[`yarn`](https://yarnpkg.com/)的包管理器，如本地未安装`yarn`，可以通过命令`npm install -g yarn`进行安装。  

# 🖥开发前准备
拉取代码
```
git clone https://github.com/junyangfan/jy-ui.git
```

安装依赖
```
yarn
```

启动本地文档站点
```
yarn docs:dev
```

# 👋 组件共建

## 规范
- 书写规范 ESlint + Prettier，注意编辑器需要安装对应插件，增强提示功能
- 样式前缀统一使用 `jy-ui-xxx`，参考`packages` -> `utils` -> `useTools`文件中的通用函数
- 组件基于 Ant Design Vue，在进行组件封装时请务必保证原有功能的完整

## 目录
以`JButton`组件为例（注意大小写规范）

```txt
├─docs
│  ├─components
│  │      JButton.md			组件说明文档
│  │
│  └─demos
│         JButton			组件示例
│             index.vue
│
└─packages
    ├─JButton					组件目录
    │  │  index.ts				打包暴露入口
    │  │
    │  └─src					组件主目录（可以存放静态资源等）
    │     index.vue				组件文件
    │
    ├─index.ts					所有组件注册入口（新增组件需要在这里注册）
    │
    └─utils
        useTools.ts				组件库所使用到的工具函数，不向外暴露
```

## 提交你的修改
不要使用 `git commit` 来做提交；  
不要使用 `git commit` 来做提交；  
不要使用 `git commit` 来做提交；  

通过`commitizen`规范`commit`，请尽量对修改做详细描述。  

默认开发完毕后，通过`git add xxx`命令添加变动文件后，运行命令`yarn cm`提交`commit`。  
也可以直接运行命令`yarn ac`提交`commit`，默认会把你**本地所有的修改**提交为`commit`。

# 本地调试
本地调试工具建议用[yalc](https://github.com/wclr/yalc)。

`yalc`可以通过模拟发布`npm`包并将它们存放在一个特殊的全局存储中（例如位于`~/.yalc`中），当你在项目中通过命令引入时会将包内容拉入当前项目的`.yalc`文件目录下，并在项目根目录下创建一个特殊的`yalc.lock`文件（类似`yarn.lock`和`package.json`），用来确保执行`yalc`例行程序时的一致性。

## 全局安装yalc
```
npm i yalc -g
或
yarn global add yalc
```

## 发布依赖
在所开发的依赖项目下执行发布操作
```
yalc publish
```

此时如果存在npm 生命周期脚本：prepublish、prepare、prepublishOnly、prepack、preyalcpublish，会按此顺序逐一执行。如果存在：postyalcpublish、postpack、publish、postpublish，也会按此顺序逐一执行。
想要完全禁用脚本执行需要使用命令
```
yalc publish --no-scripts
```

此时就已经将依赖发布到本地仓库了。
当有新修改的包需要发布时，使用推送命令可以快速的更新所有依赖

```
yalc publish --push
yalc push // 简写
```

参数：
- `--changed`，快速检查文件是否被更改
- `--replace`，强制替换包

## 添加依赖
进入到开发的项目中，执行命令
```
yalc add [packageName]
```

也可以锁定版本
```
yalc add [packageName@version]
```

将版本锁定，避免因为本地新包推送产生影响。

参数:
- `--dev`，将依赖添加进dependency中
- `--pure`，不会影响package.json文件
- `--link`，使用link方式引用依赖包，yalc add [packageName] --link
- `--workspace (or -W)`，添加依赖到workspace:协议中

## 更新依赖
```
yalc update
yalc update [packageName]
```
会根据yalc.lock查找更新所有依赖

## 移除依赖
```
yalc remove [packageName]
yalc remove --all // 移除所有依赖并还原
```

## 查看仓库信息
查看本地仓库里存在的包
```
yalc installations show
```

清理不需要的包
```
yalc installations clean [packageName]
```

⚠注
因权限问题，可能全局安装`yalc`后，系统环境变量里面没有这个命令   
- 永久性解决方案：找网络管理员赋予你管理员权限，把`yalc`命令添加到全局环境变量里
- 临时性解决方案：在开发的项目中安装`yalc`包并写入`script`指令临时性解决（合代码上线需要移除这个包）

# 打包发布

## 组件站点打包发布
```
yarn docs:deploy
```

## 组件打包
```
yarn build
```

## 组件发布
```
yarn release
```


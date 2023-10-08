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
``` sh
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
以`JButton`组件为例


## 提交你的修改
不要使用 `git commit` 来做提交；  
不要使用 `git commit` 来做提交；  
不要使用 `git commit` 来做提交；  

通过`commitizen`规范`commit`，请尽量对修改做详细描述。  

默认开发完毕后，通过`git add xxx`命令添加变动文件后，运行命令`yarn cm`提交`commit`。  
也可以直接运行命令`yarn ac`提交`commit`，默认会把你**本地所有的修改**提交为`commit`。

# 本地调试

# 打包发布

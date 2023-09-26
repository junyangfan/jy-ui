#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除文件需要根据实际打包的目录进行删除
rm -rf docs/.vitepress/dist/

# 生成静态文件
yarn
yarn docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init --initial-branch=main
git add -A
git commit -m 'docs: deploy pages'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/junyangfan/jy-ui.git main:pages

cd -

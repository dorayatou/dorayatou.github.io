#!/usr/bin/env sh
# 发生错误时中止脚本
set -e
# 构建
npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名

git init
git add -A 
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:dorayatou/hello-world.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:dorayatou/hello-world.git master:gh-pages

cd -
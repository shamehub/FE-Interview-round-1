# npm

## 1 Windows

### 1.1

```bash
npm install 
--registry=https://registry.npm.taobao.org                      淘宝npm包镜像
--unsafe-permnpm                                                添加权限
```

### 1.2 vue项目sass安装问题

```bash
npm run dev
uninstall node-sass                                                     （之前安装不成功的先卸载）
npm i node-sass -D
--sass_binary_site=https://npm.taobao.org/mirrors/node-sass/                node-sass镜像
```

### 1.3 git换行符和权限问题

```bash
Unix/Linux/Mac -> LF
Windows -> CRLF
1、禁用git的自动换行功能（修改.gitconfig文件）
git config --global core.autocrlf false
git config --global core.filemode false
git config --global core.safecrlf true
2、修改IDE换行格式为LF
```

## 2 Mac

### 2.1 http-server

```bash
sudo npm install -g http-server
http-server -p 8881
http-server
```

## 3 常用命令

- npm list -g --depth 0 (查看npm所有安装包)

## 4 [Node版本管理模块](https://www.npmjs.com/package/n)

- 安装 n
  - sudo npm install n -g
- 安装稳定版
  - sudo n stable
- 安装最新版
  - sudo n latest
- 安装指定版本
- sudo n 10.16.3
- 删除某个版本
  - sudo n rm 12.15.3
- 以指定的版本来执行脚本
  - n use 10.13.0 test.js

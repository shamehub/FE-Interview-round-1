NPM 
========== 

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
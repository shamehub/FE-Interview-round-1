# Shell 操作

## 修改hosts

sudo vim /etc/hosts

按i健进入插入模式编辑,esc进入正常模式,输入:wq保存退出

## Install Homebrew

/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/master/install.sh>)"

brew -v
brew update
brew list

## 修改shell

chsh -s /bin/zsh

echo $ZSH_THEME
~/.oh-my-zsh/themes
vim ~/.zshrc

source ~/.zshrc

## 隐藏用户名和主机名

prompt_context() {}

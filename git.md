# 1.配置本地用户名和邮箱

```
git config --global user.name "fuck-fe"
git config --global user.email "wx.kai@outlook.com"
```
验证：
```
git config user.name
git config user.email
```

# 2.生成SSH-key
```
ssh-keygen -t rsa -C “wx.kai@outlook.com”
cat ~/.ssh/id_rsa.pub
``` 
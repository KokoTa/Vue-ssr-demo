# 阅前须知

## 文件夹含义

client 前端单页应用文件夹

client-build 构建生成的前端配置及文件

doc 思维导图

practice 测试文件夹(无用)

server 服务器文件夹

server-build 构建生成的后端配置

## 阅读顺序

1. 阅读思维导图

2. 阅读 package.json 中的命令

3. 阅读 webpack 配置文件中对应的注释

4. 阅读 webpack 配置文件

5. 阅读服务端代码

6. 阅读前端代码

## 其他

1. 该项目采用 本地服务器 + 云端服务器 的形式进行开发

2. 页面刚获取时，我们要再服务端拿取数据填充到 HTML 再返回，以达到 SEO 的目的，使用 asyncData 实现

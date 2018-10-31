# `VUE-WE-CHAT`
## 仿微信网页聊天，使用vue框架，websocket实现聊天文件发送等功能，webRTC实现语音视频聊天等功能

## 前端 client
- 安装依赖 `npm install`
- 本地开发 `npm run dev`
- 打包 `npm run build`

## 后端 server
- 安装依赖 `npm install`
- 本地开发 `npm run dev`
- 调试 
  - `npm run debug`
  - 浏览器在控制台打开`DevTools`地址，在`sources`中找到文件，打断点进行调试

## mongodb
- 开启`mongodb`服务 `sudo mongod`

## 功能

### Server
- [x] **用户管理**
    - [x] 注册
    - [x] 登录
- [ ] `websocket`长连接
- [ ] 好友管理
    - [ ] 添加好友
### Client

- [x] **用户管理**
  - [x] 注册
  - [x] 登录
  - [x] 登录状态
- [ ] 用户在线状态
  - [ ] 使用`websock`长连接判断用户在线状态
- [ ] 好友管理
  - [ ] 添加好友
  - [ ] 好友列表
# `VUE-WE-CHAT`
## 仿微信网页聊天，使用vue框架，websocket实现聊天文件发送等功能，webRTC实现语音视频聊天等功能

## 前端 client
- 安装依赖 `npm install`
- 本地开发 `npm run dev`
- 打包 `npm run build`

## 后端 server
- 安装 `egg` `npm i egg-init -g`
- 安装依赖 `npm install`
- 本地开发 `npm run dev`
- 调试 
  - `npm run debug`
  - 浏览器在控制台打开`DevTools`地址，在`sources`中找到文件，打断点进行调试
  - `node@10`以上的版本运行时会报`ERROR 16205 nodejs.TypeError: Cannot set property 'parsingHeadersStart' of undefined (uncaughtException throw 2 times on pid:16205)`错误，解决办法，切换`node`版本为`8.15.0`

## mongodb
- 开启`mongodb`服务 `sudo mongod`

## 功能

### Server
- [x] **用户管理**
    - [x] 注册
    - [x] 登录
- [ ] `websocket`长连接
    - [ ] 连接成功更新`socket id`信息
- [ ] 好友管理
    - [ ] 添加好友
      - [x] 查找用户
      - [ ] 发送好友请求
      - [ ] 获取收到的好友请求
      - [ ] 添加好友操作
        - [ ] 同意
        - [ ] 拒绝
### Client

- [x] **用户管理**
  - [x] 注册
  - [x] 登录
  - [x] 登录状态
- [ ] 用户在线状态
  - [ ] 使用`websock`长连接判断用户在线状态
- [ ] 好友管理
  - [ ] 添加好友
    - [x] 查找用户
    - [ ] 发送好友请求
    - [ ] 获取收到的好友请求
    - [ ] 添加好友操作
      - [ ] 同意
      - [ ] 拒绝
  - [ ] 好友列表
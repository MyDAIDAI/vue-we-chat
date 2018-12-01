# 用户操作接口文档

### 注册用户

- `POST`,`/api/register`

- 发送数据

  ```json
  {
      nickname: '...',
      password: '...',
      userEamil: '...'
  }
  ```

- 返回数据

  ```json
  data: {user: {,…}, msg: "注册成功", code: 200}
      code: 200
      msg: "注册成功"
      user: {,…}
          avatar: "..."
          createTime: "2018-12-01T07:15:55.924Z"
          friends: []
          loginStatus: false
          nickname: "123456"
          password: "123456"
          requestFriends: []
          updateTime: "2018-12-01T07:15:55.924Z"
          userEmail: "123456"
          __v: 0
          _id: "5c0238bb8b64b151dac363a3"
  success: true
  ```

### 用户登录

- `POST`,`/api/login`

- 发送数据

  ```json
  {
      password: '...',
      userEamil: '...'
  }
  ```

- 返回数据

  ```json
  code: 200
  msg: "登录成功"
  token: "..."
  user: {,…}
      avatar: "..."
      createTime: "2018-10-25T07:14:10.327Z"
      friends: []
      loginStatus: false
      nickname: "999999"
      password: "999999"
      requestFriends: []
      updateTime: "2018-10-25T07:14:10.327Z"
      userEmail: "999999"
      __v: 0
      _id: "5bd16d647b26f01491c8482c"
  success: true
  ```

### 获取用户信息

- `GET`,`/api/getuserinfo`，头部带`token`,根据`token`中的数据获取`uid`，查找相应的数据

- 返回数据

  ```json
  
  code: 200
  data: {,…}
      avatar: "..."
      createTime: "2018-10-25T07:14:10.327Z"
      friends: []
      loginStatus: false
      nickname: "999999"
      password: "999999"
      requestFriends: []
      updateTime: "2018-10-25T07:14:10.327Z"
      userEmail: "999999"
      __v: 0
      _id: "5bd16d647b26f01491c8482c"
  success: true
  ```

### 查找用户

- `GET`,`/api/user/find/:findName`

- 返回数据

  ```json
  code: 200
  data: [
      {avatar: '...', createTime: ..., nickname: ...},
      ....
  ]
  success: true
  ```

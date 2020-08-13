<template>
  <div class="login_body">
    <div>
      <input type="text" class="login_text" placeholder="账号吗/手机号/邮箱" />
    </div>
    <div>
      <input type="password" class="login_text" placeholder="请输入密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.login_body .login_text {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
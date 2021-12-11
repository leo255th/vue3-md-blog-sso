<template>
  <div class="home">
    <div class="login">
      <div class="mylogo">leoyi-blog</div>
      <input
        type="text"
        class="name"
        placeholder="  用户名"
        v-model="username"
      />
      <input
        type="password"
        class="password"
        placeholder="  密码"
        v-model="password"
      />
      <div class="btn login-btn" @click="login()">登录</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  username?: string = "";
  password?: string = "";
  login(): void {
    console.log("username:", this.username);
    console.log("password:", this.password);
  }
}
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background-image: url(background.png);
  background-position: center;
  background-repeat: no-repeat;
  // background-size: 100% 100%;
  // background-size: 120%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login {
    min-height: 270px;
    min-width: 400px;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    z-index: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    position: relative;
    margin-left: 40%;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      // top: 300px;
      background-image: url(background.png);
      // background-position:center;
      background-position-y: center;
      background-position-x: 72.5%;
      background-repeat: no-repeat;
      // background-color: rgba(0,0,0,0.4);
      // background-size: 100% 100%;
      filter:blur(10px) brightness(70%) contrast(90%);
      min-height: 270px;
      min-width: 400px;
      z-index: -1;
      // border: none;
    }
    .name,
    .password {
      height: 30px;
      width: 250px;
      margin-top: 20px;
      background-color: rgba(256, 256, 256, 0.5);
      font-size: 20px;
      border-radius: 5px;
      border-width: 0px;
      outline: none;
      text-align: center;
      &::placeholder {
        text-align: start;
        color: rgba(0, 0, 0, 0.7);
      }
      &:focus {
        background-color: rgba(256, 256, 256, 1);
      }
    }
    .login-btn {
      margin-top: 20px;
      background-color: #99cc33;
      color: white;
      font-size: 22px;
      line-height: 30px;
      height: 30px;
      width: 250px;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
        background-color: #a9e03a;
      }
    }
  }
}
// 下面是logo部分的样式，使用compase compile
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
@import url(https://fonts.googleapis.com/css?family=Lobster+Two:700italic);
/* line 6, ../sass/logo.scss */
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
/* line 10, ../sass/logo.scss */
.atari {
  font-family: "press start 2p";
  font-size: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0.1em 0 #000;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjMiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjMiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g");
  background-size: 100%;
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, rgba(0, 0, 0, 0.3)),
    color-stop(50%, rgba(0, 0, 0, 0.3)),
    color-stop(50%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0))
  );
  background-image: -moz-linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -webkit-linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-repeat: repeat;
  background-size: 20px 10px;
}
/* line 24, ../sass/logo.scss */
.mylogo {
  padding-left: 30px;
  padding-right: 30px;
  font-family: lobster two;
  color: rgba(256, 256, 256, 0.8);
  text-shadow: 0 4px 0 #587e3de0;
  font-size: 50px;
  cursor: default;
}
</style>

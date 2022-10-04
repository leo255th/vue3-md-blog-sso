<template></template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { get_ticket_token } from "../api/user.api";
import store from "store2";
@Options({})
export default class Home extends Vue {
  async created() {
    // 请求ticket_token
    const url = this.$route.query.redirect as string;
    if (!url) {
      return;
    }
    const get_ticket_res = await get_ticket_token({
      sessionToken: store.get("session_token"),
      userId: store.get("userId"),
      url,
    });
    if (
      get_ticket_res &&
      get_ticket_res.data &&
      get_ticket_res.data.ticketToken
    ) {
      // 获取ticket_token成功
      // 返回原页面
      window.location.href =
        "https://" + url + "?ticket_token=" + get_ticket_res.data.ticketToken;
    } else {
      // 获取失败，重新回到登陆界面
      this.$router.replace({
        path: "/login",
        query: {
          redirect: this.$route.query.redirect as string,
        },
      });
    }
  }
}
</script>
<style lang="less" scoped>
</style>
<template>
  <div class="todo">
    <div class="mask"></div>
    <div class="content">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import Main from "./views/Main";
import Footer from "./views/Footer";

export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.todo {
  height: 100%;
  overflow: hidden;
  .mask,
  .content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .mask {
    background: url("../assets/images/1.jpg") center/cover no-repeat;
    filter: blur(3px);
    z-index: 1;
  }
  .content {
    z-index: 2;
  }
}
</style>

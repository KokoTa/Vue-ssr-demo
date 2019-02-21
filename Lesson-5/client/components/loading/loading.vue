<template>
  <div class="loading">
    <div class="dot dot1" />
    <div class="dot dot2" />
    <div class="dot dot3" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    margin: 20px;
    animation: 1s moving alternate infinite;
  }
  .dot1 {
    animation-delay: 0s;
  }
  .dot2{
    animation-delay: .2s;
  }
  .dot3 {
    animation-delay: .4s;
  }

  @keyframes moving {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>

<template>
  <Layout>
    <div class="home-wrap-main">
      <div class="home-inner">
        <g-image src="~/assets/img/home-big-logo.png" />
        <h1>
          at in tellus integer feugiat scelerisque
          <br />varius morbi enim nunc faucibus a
        </h1>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">
.home-wrap-main {
  height: calc(100vh - 190px);
  @media only screen and (max-width: 1024px) {
      height: auto;
    }
  .home-inner {
    text-align: center;
    transform: translateY(-50%);
    top: 50%;
    position: relative;
    @media only screen and (max-width: 768px) {
      padding: 0 45px;
      left: 0;
      transform: none;
      h1{ 
        font-size: 25px;
      }
    }
    img {
      width: 26%;
      display: block;
      transform: translateX(-50%);
      left: 50%;
      position: relative;
      margin-bottom: 50px;
      @media only screen and (max-width: 768px) {
        width: 100%;
        left: 0;
        transform: none;
      }
    }
  }
}
</style>

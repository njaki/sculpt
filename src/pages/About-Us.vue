<template>
  <Layout>
    <div class="about-wrap-main">
      <div class="about-inner clearfix">
        <div class="about-img">
          <g-image src="~/assets/img/about-us.jpg" />
        </div>

        <div class="about-text">
          <h1>about us.</h1>
          <p>
            <b>sculpt.</b> is a new international agency for scouting models and placing them with model agencies worldwide.
          </p>
          <p>
            Our team is consisted of former professional models with the experience of more than
            <b>twenty successful years</b> in the industry who decided to guide young women and men into their way of becoming new faces of some of the best agencies and brands around the world. Our models are, at the moment, mostly located across Asia and Europe.
            <b>Join us and let’s grow together.</b>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<style lang="scss">
.about-wrap-main {
  height: calc(100vh - 190px);
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
  h1 {
    margin-top: 0;
  }
  .about-inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    @media only screen and (max-width: 600px) {
      top: inherit;
      transform: none;
      padding: 0 20px;
      h1 {
        margin: 40px 0;
      }
    }
    img {
      position: relative;
    }
    .about-img {
      width: 40%;
      float: left;
      @media only screen and (max-width: 600px) {
        width: 100%;
        float: none;
      }
    }
  }
  .about-text {
    float: left;
    width: 50%;
    left: 40%;
    padding-left: 50px;
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding-left: 0;
    }
  }
}
</style>

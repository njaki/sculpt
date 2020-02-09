<template>
  <Layout class="home">
    <div class="home-wrap-main">
      <div class="home-inner">
        <g-image src="~/assets/img/home-big-logo.png" />
        <h1>
          international models <br>scouting agency 
        </h1>
        <h2>News</h2>
        <p>Agencija Sculpt trenutno traži nova lica na teritoriji Srbije. <br>Informacije o kastinzima će uskoro biti objavljene.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "international models scouting agency"
  }
};
</script>

<style lang="scss">
.home {
  header {
    position: relative;
    .sh-logo {
      img {
        display: none;
      }
    }
    .sh-header-wrap .sh-menu-wrap {
      width: 100%;
      text-align: center;
      margin-right: 0;
    }
  }
}
.home-wrap-main {
  margin-top: 60px;
  @media only screen and (max-width: 1024px) {
      height: auto;
    }
  .home-inner {
    text-align: center;
    position: relative;
    @media only screen and (max-width: 768px) {
      padding: 0 45px;
      left: 0;
      transform: none;
      h1{ 
        font-size: 25px;
      }
    }
    p{
      margin: 50px 0;
      padding: 0 15%;
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

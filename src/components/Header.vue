<template>
  <header v-bind:class="{ active: isActive }" class="clearfix">
    <div class="sh-header-wrap clearfix">
      <div class="sh-logo">
        <g-link to="/">
          <g-image src="~/assets/img/logo.png" width="100" />
          <p style="text-align: center">HOME</p>
        </g-link>
      </div>
      <div class="sh-menu-wrap">
        <g-link to="/about-us">about us/o nama</g-link>
        <g-link to="/men">men/muškarci</g-link>
        <g-link to="/women">women/devojke</g-link>
        <g-link>plus size</g-link>
        <g-link to="/become-a-model">become a model/postani model</g-link>
      </div>
      <div class="sc-mobile-opener" v-on:click="menuClick">
        <span>menu</span>
        <g-image class="menu-opener" src="~/assets/img/menu-opener.svg" width="50" />
      </div>
    </div>
    <div class="mobile-menu">
      <g-link to="/about-us">/ about us-o nama /</g-link>
      <g-link to="/men">/ men - muškarci /</g-link>
      <g-link to="/women">/ women - devojke /</g-link>
      <g-link to="/plus-size">/ plus size /</g-link>
      <g-link to="/become-a-model">/ become model - postani model /</g-link>
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    menuClick: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
.models-wrap {
    margin-bottom: 50px;
  .models-gallery {
    width: 70%;
    float: left;
    @media only screen and (max-width: 1024px) {
      width: 100%!important;
    }
    
    .agile__actions {
        position:absolute;
        top:50%;
        width: 100%;
    }
    .nav {
      .slide {
        img {
          display: block;
          margin: 0 auto;
          height: 80px !important;
          width: auto !important;
        }
      }
    }
  }
  .models-info {
    padding-left: 50px;
    width: 30%;
    float: right;
    @media only screen and (max-width: 1024px) {
      width: 100%!important;
    }
    h2 {
      font-size: 35px;
    }
    p {
      text-align: left;
      span {
        display: block;
        width: 150px;
        font-weight: bold;
        margin-right: 40px;
      }
    }
  }
}
header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;
  &.active {
    .mobile-menu {
      display: block;
    }
  }
  .mobile-menu {
    background-color: #fff;
    display: none;
    padding: 20px 0;
    a {
      text-align: center;
      width: 100%;
      display: block;
      padding: 10px 25px;
    }
  }
  .sc-mobile-opener {
    float: right;
    line-height: 88px;
    display: none;
    @media only screen and (max-width: 1024px) {
      display: block;
    }
    img {
      position: relative;
      top: -7px;
    }
  }
  .sh-header-wrap {
    height: 140px;
    width: 100%;
    @media only screen and (max-width: 600px) {
      height: 76px;
    }

    .sh-logo {
      float: left;
      @media only screen and (max-width: 600px) {
        width: 70px !important;
      }
      img {
        margin-top: 18px;
        margin-left: 72px;
        @media only screen and (max-width: 600px) {
          margin-top: 10px;
          margin-left: 22px;
          width: 70px!important;
        }
      }
      p {
        margin-left: 72px;
        @media only screen and (max-width: 600px) {
          margin-left: 22px;
          width: 70px!important;
        }
        @media only screen and (max-width: 1024px) {
          display: none;
        }
      }
    }

    .sh-menu-wrap {
      float: right;
      margin-right: 60px;
      @media only screen and (max-width: 1024px) {
        display: none;
      }
      a {
        padding: 0 41px;
        line-height: 160px;
        @media only screen and (max-width: 1500px) {
          padding: 0 25px;
          font-size: 18px;
        }
        @media only screen and (max-width: 1280px) {
          padding: 0 19px;
          font-size: 14px;
        }
        @media only screen and (max-width: 768px) {
          padding: 0 19px;
        }
        @media only screen and (max-width: 600px) {
          padding: 0 8px;
          font-size: 13px;
          line-height: 77px;
        }
      }
    }

    .menu-opener {
      margin: 0 68px 0 30px;
      position: relative;
      @media only screen and (max-width: 1024px) {
        margin: 0 22px 0 8px;
        height: 17px;
        top: 3px;
      }
    }
  }
}
</style>
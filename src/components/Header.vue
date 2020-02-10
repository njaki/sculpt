<template>
  <header v-bind:class="{ active: isActive }">
    <div class="sh-header-wrap">
      <div class="sh-logo">
        <g-link to="/">
          <g-image src="~/assets/img/logo.png" width="100" />
        </g-link>
      </div>
      <div class="sh-menu-wrap">
        <g-link to="/about-us">about us</g-link>
        <g-link to="/men">men</g-link>
        <g-link to="/women">women</g-link>
        <g-link>plus size</g-link>
        <g-link to="/become-a-model">become a model</g-link>
      </div>
      <div class="sc-mobile-opener" v-on:click="menuClick">
        <span>menu</span>
        <g-image class="menu-opener" src="~/assets/img/menu-opener.svg" width="50" />
      </div>
    </div>
    <div class="mobile-menu">
      <g-link to="/about-us">/ about us /</g-link>
      <g-link to="/men">/ men /</g-link>
      <g-link to="/women">/ women /</g-link>
      <g-link to="/plus-size">/ plus size /</g-link>
      <g-link to="/become-a-model">/ become model /</g-link>
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
    @media only screen and (max-width: 768px) {
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
    }

    .sh-menu-wrap {
      float: right;
      margin-right: 60px;
      @media only screen and (max-width: 768px) {
        display: none;
      }
      a {
        padding: 0 41px;
        line-height: 160px;
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
      @media only screen and (max-width: 600px) {
        margin: 0 22px 0 8px;
        height: 17px;
        top: 3px;
      }
    }
  }
}
</style>
<template>
  <Layout class="models">
    <div class="models-wrap clearfix">
      <div class="models-gallery">
        <ClientOnly>
          <agile ref="main" class="main-slide" :fade="true"  :navButtons="true" :dots="false">
            <div class="slide">
              <g-image src="~/assets/img/zarko/1.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/5.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/6.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/7.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/8.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/9.png" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/10.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/11.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/12.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/13.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/14.png" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/15.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/16.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/17.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/18.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/19.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/zarko/20.jpg" />
            </div>
            
          </agile>
        </ClientOnly>
      </div>
      <div class="models-info">
        <h2>Zarko</h2>
        <p><span>HEIGHT:</span>186 </p>
        <p><span>CHEST:</span>98 </p>
        <p><span>WAIST:</span>79 </p>
        <p><span>HIPS:</span>94 </p>
        <p><span>SHOES:</span>43 </p>
        <p><span>HAIR:</span>Black </p>
        <p><span>EYES:</span>Brown </p>
      </div>
    </div>
  </Layout>
</template>
      
<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile
  }
};
</script>


<style lang="scss">
.models-wrap {
  .models-gallery {
    width: 70%;
    float: left;
    .main-slide {
      .slide {
        img {
          display: block;
          margin: 0 auto;
          height: 600px !important;
          width: auto !important;
        }
      }
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
    width: 30%;
    float: right;
    h2 {
      font-size: 35px;
    }
    p{
      text-align: left;
      span{
        display: block;
        width: 150px;
        font-weight: bold;
        margin-right: 40px;
      }
    }
  }
}
</style>
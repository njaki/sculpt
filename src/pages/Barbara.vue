<template>
  <Layout class="models">
    <div class="models-wrap clearfix">
      <div class="models-gallery">
        <ClientOnly>
          <agile ref="main" class="main-slide" :fade="true"  :navButtons="true" :dots="false">
            <div class="slide">
              <g-image src="~/assets/img/barbara/1.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/2.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/3.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/4.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/5.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/6.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/7.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/8.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/9.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/10.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/11.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/12.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/barbara/13.jpg" />
            </div>
          </agile>
        </ClientOnly>
      </div>
      <div class="models-info">
        <h2>Barbara</h2>
        <p><span>HEIGHT:</span>176 </p>
        <p><span>CHEST:</span>86 </p>
        <p><span>WAIST:</span>60 </p>
        <p><span>HIPS:</span>88 </p>
        <p><span>SHOES:</span>39 </p>
        <p><span>HAIR:</span>Blonde </p>
        <p><span>EYES:</span>Blue </p>
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
<template>
  <Layout class="models">
    <div class="models-wrap clearfix">
      <div class="models-gallery">
        <ClientOnly>
          <agile ref="main" class="main-slide" :fade="true" :navButtons="true" :dots="false">
            <div class="slide">
              <g-image src="~/assets/img/sasa/1.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/2.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/3.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/4.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/5.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/6.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/7.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/8.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/9.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/10.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/11.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/12.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/13.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/14.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/15.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/16.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/17.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/18.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/19.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/20.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/21.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/22.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/23.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/24.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/sasa/25.jpg" />
            </div>
          </agile>
        </ClientOnly>
      </div>
      <div class="models-info">
        <h2>Sasa</h2>
        <p>
          <span>HEIGHT:</span>187
        </p>
        <p>
          <span>CHEST:</span>99
        </p>
        <p>
          <span>WAIST:</span>79
        </p>
        <p>
          <span>HIPS:</span>96
        </p>
        <p>
          <span>SHOES:</span>44
        </p>
        <p>
          <span>HAIR:</span>Black
        </p>
        <p>
          <span>EYES:</span>Black
        </p>
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
    padding-left: 50px;
    width: 30%;
    float: right;
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
</style>
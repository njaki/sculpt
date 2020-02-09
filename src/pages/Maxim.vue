<template>
  <Layout class="models">
    <div class="models-wrap clearfix">
      <div class="models-gallery">
        <ClientOnly>
          <agile ref="main" class="main-slide" :fade="true"  :navButtons="true">
            <div class="slide">
              <g-image src="~/assets/img/maxim/1.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/2.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/3.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/4.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/5.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/6.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/7.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/8.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/9.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/10.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/11.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/12.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/13.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/14.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/15.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/16.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/17.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/18.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/19.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/20.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/21.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/22.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/maxim/23.jpg" />
            </div>
          </agile>
        </ClientOnly>
      </div>
      <div class="models-info">
        <h2>Maxim</h2>
        <p><span>HEIGHT:</span>187 </p>
        <p><span>CHEST:</span>102 </p>
        <p><span>WAIST:</span>82 </p>
        <p><span>HIPS:</span>100 </p>
        <p><span>SHOES:</span>44 </p>
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
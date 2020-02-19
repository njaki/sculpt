<template>
  <Layout class="models">
    <div class="models-wrap clearfix">
      <div class="models-gallery">
        <ClientOnly>
          <agile ref="main" class="main-slide" :fade="true"  :navButtons="true" :dots="false">
            <div class="slide">
              <g-image src="~/assets/img/mira/11.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/1.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/2.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/3.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/4.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/5.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/6.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/7.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/8.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/9.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/10.jpg" />
            </div>
            
            <div class="slide">
              <g-image src="~/assets/img/mira/12.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/13.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/14.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/15.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/16.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/mira/17.jpg" />
            </div>
            </agile>
        </ClientOnly>
      </div>
      <div class="models-info">
        <h2>Mira</h2>
        <p><span>HEIGHT:</span>176 </p>
        <p><span>CHEST:</span>85 </p>
        <p><span>WAIST:</span>59 </p>
        <p><span>HIPS:</span>90 </p>
        <p><span>SHOES:</span>39 </p>
        <p><span>HAIR:</span>Blonde </p>
        <p><span>EYES:</span>Green </p>
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
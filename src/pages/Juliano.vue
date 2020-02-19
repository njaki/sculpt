<template>
  <Layout class="models">
    <div class="models-wrap clearfix">
      <div class="models-gallery">
        <ClientOnly>
          <agile ref="main" class="main-slide" :fade="true" :navButtons="true" :dots="false">
            <div class="slide">
              <g-image src="~/assets/img/juliano/12.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/1.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/2.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/3.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/4.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/5.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/6.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/7.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/8.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/9.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/10.jpg" />
            </div>
            <div class="slide">
              <g-image src="~/assets/img/juliano/11.jpg" />
            </div>
            
            <div class="slide">
              <g-image src="~/assets/img/juliano/13.jpg" />
            </div>
          </agile>
        </ClientOnly>
      </div>
      <div class="models-info">
        <h2>Juliano</h2>
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
          <span>HAIR:</span>Brown
        </p>
        <p>
          <span>EYES:</span>Brown
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
    margin-bottom: 50px;
  .models-gallery {
    width: 70%;
    float: left;
    
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
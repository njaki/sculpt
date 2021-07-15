<template>
  <Layout>
    <div class="about-wrap-main">
      <div class="about-inner clearfix">
        <div class="about-img">
          <g-image src="~/assets/img/zarko-about-us.jpg" />
        </div>

        <div class="about-text">
          <h1>about us / o nama</h1>
          <p>
            <b>Sculpt. scouting</b> je internacionalna skauting agencija koja se bavi pronalaženjem novih modela, razvojem njihovih karijera i internacionalnim angažmanom u saradnji sa modnim agencijama širom sveta.</p>
            <p> <b>Sculpt.</b> tim agenata sastoji se od bivših i aktivnih profesionalnih modela sa višegodišnjim iskustvom uspešnog poslovanja u modnoj industriji, što u Srbiji tako i u inostranstvu.</p> 
            <p> Osnivač <b>Sculpt. scouting</b> agencije je Žarko Živojinović, internacionalni model, koji iza sebe ima iskustvo od četrnaest godina rada u više od trinaest zemalja širom sveta sa nekim od najvećih i najpopularnijih svetskih brendova.</p>
          
            <p><b>Sculpt. scouting</b> is an international agency whose focus is on scouting new models, building their careers and placing them with model agencies worldwide</p>
            <p> <b>Sculpt.</b>team of agents is consisted of former and active professional models with multi-year experience of successful  work in fashion business worldwide.</p> 
            <p> The founder of <b>Sculpt. scouting</b> agency is Zarko Zivojinovic, international model with over fourteen years working experience in more than thirteen different countries all over the world with some of the biggest and most popular brands.</p>
            <h3>Join us and let’s grow together.</h3>
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

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
  h1 {
    margin-top: 0;
    
  }
  .about-inner {
    position: relative;
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
      padding: 0 5%;
      @media only screen and (max-width: 600px) {
        width: 100%;
        float: none;
        margin-top: 50px;
        padding: 0;
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

<template>
  <Layout>
    <div class="models-wrapper">
      <div class="hero-section">
        <h1>models / men</h1>
      </div>
      <div class="models-list">
        <div class="model">
          <g-link to="/Juliano"/>
          <g-image src="~/assets/img/juliano-profilna-c.jpg" />
          <h4>Juliano</h4>
        </div>
        <div class="model">
          <g-link to="/Sasa"/>
          <g-image src="~/assets/img/sale-profilna-c.jpg" />
          <h4>Sasa</h4>
        </div>
        <div class="model">
          <g-link to="/Maxim"/>
          <g-image src="~/assets/img/maxim-profilna-c.jpg" />
          <h4>Maxim</h4>
        </div>
        <div class="model">
          <g-link to="/Zarko"/>
          <g-image src="~/assets/img/zarko-profilna-c.jpg" />
          <h4>Zarko</h4>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.models-wrapper {
    padding: 0 8%;
  .hero-section {
    text-align: right;
    padding: 40px 0;
    @media only screen and (max-width: 600px){
          text-align: center;
          padding: 25px 0;
      }
    h1 {
      font-size: 55px;
      line-height: 1.4em;
    }
  }

  .models-list {
    flex-direction: row;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    .model {
      position: relative;
      padding: 15px;
      width: 25%;
      display: flex;
      flex-direction: column;
      @media only screen and (max-width: 768px) {
        width: 50%;
      }
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
      a{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
      }
      img {
        border-radius: 50%;
        border: 3px solid #000;
      }
    }
  }
}
</style>
<template>
  <Layout>
    <div class="models-wrapper">
      <div class="hero-section">
        <h1>models / men</h1>
      </div>
      <div class="models-list">
        <div class="model">
          <g-image src="~/assets/img/juliano-profilna-c.jpg" />
          <h4>Juliano</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/sale-profilna-c.jpg" />
          <h4>Sasa</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/juliano-profilna-c.jpg" />
          <h4>Model Name</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/model.jpg" />
          <h4>Model Name</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/model.jpg" />
          <h4>Model Name</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/model.jpg" />
          <h4>Model Name</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/model.jpg" />
          <h4>Model Name</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/model.jpg" />
          <h4>Model Name</h4>
        </div>
        <div class="model">
          <g-image src="~/assets/img/model.jpg" />
          <h4>Model Name</h4>
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
      padding: 15px;
      flex: 33.33%;
      display: flex;
      flex-direction: column;
      @media only screen and (max-width: 768px) {
        flex: 50%;
      }
      @media only screen and (max-width: 600px) {
        flex: 100%;
      }
      img {
        border-radius: 50%;
        border: 3px solid #000;
      }
    }
  }
}
</style>
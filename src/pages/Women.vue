<template>
  <Layout>
    <div class="models-wrapper">
      <div class="hero-section">
        <h1>models / women</h1>
      </div>
      <div class="models-list">
        <div class="model">
            <g-link to="/Mira"/>
          <g-image src="~/assets/img/mira-profilna-c.jpg" />
          <h4>Mira</h4>
        </div>
        <div class="model">
            <g-link to="/Mari"/>
          <g-image src="~/assets/img/mari-profilna-c.jpg" />
          <h4>Mari</h4>
        </div>
        <div class="model">
            <g-link to="/Barbara"/>
          <g-image src="~/assets/img/barbara-profilna-c.jpg" />
          <h4>Barbara</h4>
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
      width: 25%;
      display: flex;
      flex-direction: column;
      position: relative;
      a{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
      }
      @media only screen and (max-width: 768px) {
        width: 50%;
      }
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
      img {
        border-radius: 50%;
        border: 3px solid #000;
      }
    }
  }
}
</style>
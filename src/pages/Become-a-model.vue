<template>
  <Layout>
    <div class="becom-model-wrap">
      <h1>become a model</h1>
      <div class="req">
        <div class="req-i">
          <span>
            female models:
            <br />age 16-23 / height 173-180 cm
          </span>
        </div>
        <div class="req-i">
          <span>
            male models:
            <br />age 16-25 / height 184-190 cm
          </span>
        </div>
      </div>
      <div class="form-wrap">
        <form
          action="https://getform.io/f/e7919944-6607-4887-b07c-e6115ba7dc43"
          method="POST"
          enctype="multipart/form-data"
        >
          <div class="input-wrap">
            <label>First name</label>
            <input type="text" name="first-name" />
          </div>
          <div class="input-wrap">
            <label>Last name</label>
            <input type="text" name="last-name" />
          </div>
          <div class="input-wrap">
            <label>Age</label>
            <input type="text" name="age" />
          </div>
          <div class="input-wrap">
            <label>Your email</label>
            <input type="email" name="email" />
          </div>
          <div class="input-wrap">
            <label>Gender</label>
            <select name="gender">
              <option value="male">male</option>
              <option value="saab">female</option>
            </select>
          </div>
          <div class="input-wrap">
            <label>Height</label>
            <input type="text" name="height" placeholder="cm" />
          </div>
          <div class="input-wrap">
            <label>Chest</label>
            <input type="text" name="chest" />
          </div>
          <div class="input-wrap">
            <label>Waist</label>
            <input type="text" name="waist" />
          </div>
          <div class="input-wrap">
            <label>Hips</label>
            <input type="text" name="hips" />
          </div>
          <p style="margin-top: 30px;">4 photos, up to 1mb per photo</p>
          <input class="add-image" type="file" name="photo" multiple>
          <button class="bcm-btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.becom-model-wrap {
  padding: 0 20%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 0 10%;
  }
  h1 {
    text-transform: uppercase;
  }
  .req {
    br {
      display: none;
      @media only screen and (max-width: 600px) {
        display: block;
      }
    }
    .req-i {
      margin-bottom: 15px;
    }
    margin: 10px 0 50px;
  }
  .form-wrap {
    width: 50%;
    margin: 0 auto;
    @media only screen and (max-width: 1366px) {
      width: 60%;
    }
    @media only screen and (max-width: 768px) {
      width: 80%;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    .add-image {
      margin-top: 30px;
    }
    .input-wrap {
      text-align: left;
      margin-bottom: 25px;
      input {
        text-align: right;
        border: 0;
        border-bottom: 1px solid #999;
        margin-left: 50px;
        float: right;
        outline: none;
        @media only screen and (max-width: 600px) {
          float: none;
          width: 100%;
          margin-left: 0;
          margin-top: 10px;
        }
      }
      select {
        float: right;
        padding: 5px 30px;
        @media only screen and (max-width: 600px) {
          float: none;
          margin-left: 40px;
        }
      }
    }
    .bcm-btn {
      margin-top: 50px;
      border: 1px solid #000;
      background-color: #fff;
      padding: 10px 40px;
      margin-bottom: 50px;
    }
  }
}
</style>
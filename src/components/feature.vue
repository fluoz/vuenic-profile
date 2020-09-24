<template>
  <div>
    <h3 class="h3">Fitur Unggulan</h3>
    <div class="bg">
      <div class="container">
        <div class="fiturs">
          <span class="dot">
            <img src="src/assets/iot-plat.svg" alt />
          </span>
          <div class="isi">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="fiturs">
          <span class="dot">
            <img src="src/assets/monit.svg" alt />
          </span>
          <div class="isi">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="fiturs">
          <span class="dot">
            <img src="src/assets/connect.svg" alt />
          </span>
          <div class="isi">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="fiturs">
          <span class="dot">
            <img src="src/assets/device.svg" alt />
          </span>
          <div class="isi">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.isi {
  max-width: 440px;
}
.container {
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* border: 3px solid black; */
}
.heading {
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height */

  color: #373737;
}

.fitur {
  background-color: #f2f2f2;
  flex-wrap: wrap;
  height: auto;
  /* border: 3px solid blue; */
  max-width: 1200px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
}
.fiturs {
  display: flex;
  /* border: 2px solid red; */
  max-width: 1000px;
  margin: 50px 5px;
}

.dot {
  width: 86px;
  height: 86px;
  background-color: #ffff;
  box-shadow: 0px 0px 16px rgba(194, 194, 194, 0.25);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;
  /* identical to box height, or 45px */

  color: #373737;
}
.h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 150%;
  /* identical to box height, or 45px */
  margin-top: 120px;
  color: #373737;
  text-align: center;
}
p {
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  margin-top: 25px;
  color: #6e7177;
}
.answer {
  margin-left: 56px;
}
.bg {
  background-color: #f7f7f7;
  width: 100%;
  position: absolute;

  margin-top: 70px;
  /* border: 2px solid green; */
}
.isi {
  margin-left: 43px;
}
@media only screen and (max-width: 800px) {
  .fiturs {
    /* border: 4px solid blue; */
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .container {
    /* border: 3px solid red; */
    margin-top: 10px;
    display: flex;

    justify-content: center;
  }
  .dot {
    margin-bottom: 30px;
  }
  .isi {
    margin: 0 40px;
  }
}
</style>
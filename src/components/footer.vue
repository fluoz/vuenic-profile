<template>
  <div>
    <div class="background">
      <div class="container">
        <a
          href="https://play.google.com/store/apps/details?id=com.vuenic&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
        <img class="logo" src="src/assets/vuenic.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  background-color: #f5f5f5;
  /* border: 2px solid red; */
  margin-top: 900px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a img {
  width: 200px;

  padding: 20px 0;
}
.logo {
  padding: 20px 0;
}

@media only screen and (max-width: 1050px) {
  .background {
    margin-top: 1850px;
    height: 400px;
  }
  a img {
    width: 170px;
  }
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
}

@media only screen and (max-width: 360px) {
  .background {
    margin-top: 2600px;
  }
}
</style>
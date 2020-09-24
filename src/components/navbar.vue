<template>
  <div class="hg">
    <transition name="view">
      <div v-if="showSidebar == true" class="sidebar">
        <img @click="close()" class="styside" src="src/assets/exit.svg" alt />
        <ul class="sideul">
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li>
            <a href="#">Layanan Kami</a>
          </li>
          <li>
            <a href="#">Dokumentasi</a>
          </li>
          <li>
            <a href="#">Hubungi Kami</a>
          </li>
        </ul>
      </div>
    </transition>
    <div class="nav-mobile" :class="{ 'navbar--hidden': !showNavbar }">
      <div class="container flex-mobile">
        <a href="#">
          <img :src="logo" alt />
        </a>
        <img @click="sidebar()" src="src/assets/burger.svg" alt />
      </div>
    </div>
    <div class="navbar navbar-light" :class="{ 'navbar--hidden': !showNavbar }">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img :src="logo" />
        </a>
        <ul class="navbar-nav">
          <li class="list">
            <a href="#">Tentang Kami</a>
          </li>
          <li class="list">
            <a href="#" class="dropdown-toggle">Layanan Kami</a>
          </li>
          <li class="list">
            <a href="#">Dokumentasi</a>
          </li>
          <li class="list">
            <a href="#">Hubungi Kami</a>
          </li>

          <md-button
            style="text-decoration: none"
            href="https://apps.vuenic.com/signup"
            class="md-primary bg-white daft"
          >
            <span :style="span">Daftar</span>
          </md-button>
          <span class="line"></span>
          <md-button
            style="text-decoration: none"
            href="https://apps.vuenic.com/signin"
            class="md-primary but"
          >
            <span>Masuk</span>
          </md-button>
        </ul>
      </div>
    </div>
    <!-- content -->
    <div class="bag">
      <div class="container">
        <div class="mp">
          <div class="heading">
            <h2>
              Selamat Datang di
              <span class="blue">Vuenic</span> (IoT Platform)
            </h2>
            <br />
            <p>
              Vuenic merupakan IoT (Internet of Things) Platform yang kami
              kembangkan untuk optimalisasi sistem dalam mencapai pengelolaan
              data secara menyeluruh, pengawasan secara penuh, fungsi remote
              control jarak jauh dan juga memberikan informasi berdasarkan data
              historis, sehingga dapat meningkatkan efisiensi dan efektivitas
            </p>
            <br />

            <div class="button">
              <md-button href="https://apps.vuenic.com/signin" class="btn coba">
                <span>Coba Gratis</span>
              </md-button>
            </div>
          </div>

          <img class="img-fluid gambarbesar" src="src/assets/vector.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
export default {
  data: function () {
    return {
      logo: "src/assets/logo-vuenic.png",
      span: {
        color: "#6a6e75",
        padding: "0px 20px",
      },
      showNavbar: true,
      lastScrollPosition: 0,
      showSidebar: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = document.documentElement.scrollTop;
      if (currentScrollPosition > 200) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
    sidebar() {
      this.showSidebar = true;
    },
    close() {
      this.showSidebar = false;
    },
  },
};
</script>

<style scoped>
.getit {
  width: 200px;
  margin: 15px 15px;
}
.sideul {
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */
  align-items: flex-start;
}

.sideul li {
  list-style: none;
  margin: 25px 10px;
}
.sideul li a {
  text-decoration: none;
  color: #6a6e75;
  font-size: 20px;
  font-weight: bold;
}

.styside {
  margin: 20px 20px;
  margin-left: 90%;
}

.nav-mobile {
  width: 100%;
  height: 60px;

  display: none;
  align-items: center;
  justify-content: space-between;
}
.flex-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list span {
  color: #6a6e75;
  text-decoration-line: none;
  font-size: 16px;
}
.list span:hover {
  cursor: pointer;
}
.navbar--hidden {
  background-color: white;
  position: fixed;
  box-shadow: 0px 8px 16px rgba(247, 247, 247, 0.25);
  transition: 0.5s;
}
p {
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #6e7177;
}
.img-fluid {
  max-width: 100%;
  max-height: 100%;
  /* border: 3px solid springgreen; */
}

.daftar {
  margin-left: 30px;
  border: 0.5px solid #3481a1;
  box-sizing: border-box;
  filter: drop-shadow(0px 8px 16px rgba(52, 129, 161, 0.3));
  border-radius: 7px;
  color: #3481a1;
  width: 140px;
}
.button {
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.coba {
  background: #3481a1;
  box-shadow: 0px 8px 16px rgba(52, 129, 161, 0.3);
  border-radius: 6px;
  color: white;
  width: 190px;
  height: 50px;
  transition: 1s;
}
.coba:hover {
  transform: translateY(-15%);
  transition: 1s all;
  filter: drop-shadow(0px 8px 16px rgba(52, 129, 161, 0.25));
}
.blue {
  color: #3481a1;
}
.but span {
  padding: 0 20px;
  color: white;
  text-shadow: 0px 0px 20px #ffffff;
}
.but {
  background: #3481a1;
  border-radius: 6px;
}
ul {
  list-style: none;
}

.list a {
  color: #6a6e75;
  text-decoration-line: none;
  font-size: 16px;
}
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
}
li {
  margin: 0 20px;
}
.navbar {
  display: flex;
  justify-content: space-around;
  transform: translate3d(0, 0, 0);
  transition: 0.5s;
  width: 100%;
  z-index: 1;

  top: 0;
  /* border: 3px solid red; */
}
.daft {
  background-color: white;
  border: 2px solid #3481a1;
  box-sizing: border-box;
  border-radius: 6px;
}
.line {
  border: 1px solid #858688;
  transform: rotate(90deg);
  width: 40px;
  margin: 0 2px;
}

.hg {
  height: 100%;
  border: 3px solid white;

  background: linear-gradient(0deg, #f5f5f5 10%, #ffffff 100%);
}
.mp {
  display: flex;
  justify-content: space-between;
  /* border: 3px solid red; */
  height: 100%;
  top: 0;
  align-items: center;
  margin-top: -35px;
}
.bag {
  max-height: 90%;
}
.heading h2 {
  color: #373737;
  line-height: 41px;
  font-style: normal;
  font-weight: bold;
}
.heading {
  /* border: 2px solid black; */
  width: 45%;
}
@media only screen and (max-width: 800px) {
  .coba:hover {
    transform: translateY(0%);
  }

  .coba {
    width: 230px;
    height: 56px;
    font-size: 18px;
  }
  .navbar {
    display: none;
  }

  .nav-mobile {
    display: flex;
    top: 0;
    z-index: 1;
  }

  .mp {
    /* border: 3px solid green; */
    height: 80vh;
  }
  .heading {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    margin-top: 70px;
    /* 
    border: 2px solid blue; */
    width: 95%;
    text-align: center;
    justify-content: center;
  }
  .heading .button {
    display: flex;
    flex-direction: column;
  }

  .heading h2 {
    font-size: 28px;
  }
  .heading p {
    margin-top: 4px;
  }
  .mp {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sidebar {
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 2;
    position: fixed;
  }
  .view-enter-active,
  .view-leave-active {
    transition: 0.5s ease-in-out;
  }
  .view-enter,
  .view-leave-to {
    transform: translateX(-100%);
  }
  .view-enter-to,
  .view-leave {
    transform: translateX(0);
  }
  .view-enter-active {
    transition: 0.5s ease-in-out;
  }
}
@media only screen and (max-width: 340px) {
  .heading {
    margin-bottom: -100px;
  }
}
@media only screen and (max-width: 1190px) {
  .gambarbesar {
    display: none;
  }
  .mp {
    /* border: 3px solid green; */
    height: 80vh;
  }
  .heading {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    margin-top: 70px;
    /* 
    border: 2px solid blue; */
    width: 95%;
    text-align: center;
    justify-content: center;
  }
  .heading .button {
    display: flex;
    flex-direction: column;
  }

  .heading h2 {
    font-size: 28px;
  }
  .heading p {
    margin-top: 4px;
  }
  .mp {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-mobile {
    display: none;
  }
  .daftar {
    display: none;
  }
}
</style>
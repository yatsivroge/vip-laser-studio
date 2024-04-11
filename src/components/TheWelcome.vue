<script setup>
</script>

<template>
  <div class="main-banner">
    <div class="main-banner__desc">
      <div class="main-banner__desc-title">
        <h2>Чи всі лазери є безпечними для здоров’я?</h2>
      </div>
      <a
          class="detail-btn main-banner__button"
          href="https://www.instagram.com/p/C4ctZ4rIXXl/"
          target="_blank"
      >Детальніше</a>
    </div>
    <div class="main-banner__img">
      <img src="@/assets/main-image.jpg" />
    </div>
  </div>
</template>
<style scoped>

.main-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-banner__img {
  width: 50%;
}

.main-banner__img img {
  width: 100%;
  height: auto;
}

.detail-btn {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-size: -webkit-calc(14px + (16 - 14) * ((100vw - 300px) /(1900 - 300)));
  font-size: -moz-calc(14px + (16 - 14) * ((100vw - 300px) /(1900 - 300)));
  font-size: calc(14px + (16 - 14)*((100vw - 300px) /(1900 - 300)));
  display: inline-block;
  line-height: 1.187;
  padding: 20px 45px;
  min-width: 100px;
  text-align: center;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

.main-banner__button {
  padding: 19px 45px 22px 45px;
  max-width: 250px;
  width: 100%;
  background: #2F4E74;
  text-decoration: unset;
}

.main-banner__desc-title h2 {
  font-size: 36px;
  line-height: 56px;
  font-family: 'Antqua', sans-serif;
  color: #333;
  padding: 0;
  border: 0;
  font-weight: 400;
  margin-bottom: 16px;
}

@media (max-width: 920px) {
  .main-banner {
    flex-direction: column;
  }

  .main-banner__desc {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-banner__desc-title {
    text-align: center;
  }

  .main-banner__desc-title h2 {
    font-size: 26px;
    line-height: 46px;
  }

  .main-banner__button {
    padding: 19px 35px 18px 35px;
    max-width: 250px;
  }

  .main-banner__img {
    order: 1;
  }
}



@media (max-width: 600px) {
  .main-banner__desc-title h2 {
    font-size: 22px;
    line-height: 32px;
  }

  .main-banner__button {
    padding: 19px 25px 18px 25px;
  }
}
</style>

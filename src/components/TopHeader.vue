<script setup>

</script>

<template>
  <div class="top-header">
    <div class="container">
      <div class="top-header__container">

        <div class="logo-container">
          <img class="logo" src="@/assets/logo.jpg" />
          <div class="top-header__address">
            <p>Warszawa, Poland</p>
            <p>Kolejowa 45A, Nowa Wola</p>
          </div>
        </div>
        <div class="address-container">
          <div class="top-header__address">
            <div class="top-header__phone">
              <a class="icons" href="tel:+48793437462">
                <img class="icons__img"
                     src="@/assets/phone-icon.svg"
                     alt="phone-icon"
                />
              </a>
              <a class="top-header__phone-link" href="tel:+48793437462" target="_blank">
                +48793437462
              </a>
            </div>
            <div class="top-header__phone">
              <a
                  class="social-media-icon"
                  href="https://www.instagram.com/vip_laser_studio_pl/?igsh=MTFmZWZqZDl0c2ZhcQ%3D%3D"
                  target="_blank"
              >
                <img class="social-media-icon"
                     src="@/assets/inst-icon.png"
                     alt="phone-icon"
                />
              </a>
              <a
                  class="top-header__phone-link"
                  href="https://www.instagram.com/vip_laser_studio_pl/?igsh=MTFmZWZqZDl0c2ZhcQ%3D%3D"
              >
                Vip Laser Studio
              </a>
            </div>
          </div>
          <p>
            <span class="lang-switch-btn">UA</span> / <span  class="lang-switch-btn">PL</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  gap: 16px;
}

.address-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-switch-btn {
  cursor: pointer;
}

.logo {
  width: 74px;
  height: auto;
  border-radius: 4px;
}

.top-header {
  display: flex;
  padding: 8px 0;
}

.top-header__container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 46px;
}

.top-header__address {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.top-header__address p {
  font-size: 14px;
  font-weight: 400;
  color: #000;
}

.icons {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #2F4E74;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media-icon {
  width: 18px;
  height: 18px;
}

.icons__img {
  width: 12px;
  height: 12px;
}

.top-header__phone {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.top-header__phone-link {
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  opacity: 0.67;
  text-decoration: unset;
}

@media (max-width: 920px) {
  .top-header__container {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .address-container {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
<script setup>

</script>

<template>
  <section>
    <div class="container">
      <div class="price-section__wrapper">
        <h2>Акції</h2>
        <div class="sales__card-wrapper">
          <div class="discounts-item">
            <div class="discounts-info">
              <h3>Знижка для двох</h3>
              <p>Приходи з мамою, подругою, хлопцем, та отримуйте</p>
              <span>-30%</span>
              <a
                  class="detail-btn btn-white btn"
                  href="https://www.instagram.com/stories/highlights/18013985252020501/"
                  target="_blank"
              >Детальніше</a>
            </div>
            <div class="discounts-image">
              <img src="@/assets/discount_1.jpg" alt="discounts-image">
            </div>
          </div>
          <div class="discounts-item">
            <div class="discounts-info">
              <h3>На першу процедуру</h3>
              <p>Найпотужніший сучасний лазер нового покоління 2024р.</p>
              <span>-20%</span>
              <a
                  class="detail-btn btn-white btn"
                  href="https://www.instagram.com/stories/highlights/18013985252020501/"
                  target="_blank"
              >Детальніше</a>
            </div>
            <div class="discounts-image">
              <img src="@/assets/discount_2.jpg" alt="discounts-image">
            </div>
          </div>
          <div class="discounts-item">
            <div class="discounts-info">
              <h3>За відмітку в сторіс</h3>
              <p>Розповідай друзям про нашу студію в сторіс</p>
              <span>-5%</span>
              <a
                  class="detail-btn btn-white btn"
                  href="https://www.instagram.com/stories/highlights/18013985252020501/"
                  target="_blank"
              >Детальніше</a>
            </div>
            <div class="discounts-image">
              <img src="@/assets/discount_3.jpg" alt="discounts-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.price-section__wrapper h2 {
  font-size: 36px;
  line-height: 56px;
  font-family: 'Antqua', sans-serif;
  color: #333;
  padding: 0;
  border: 0;
  font-weight: 700;
  margin-bottom: 16px;
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

.sales__card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.discounts-item {
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  background: linear-gradient(90deg, #2F4E74 0%, rgba(47, 78, 116, 0.5) 100%);
  justify-content: space-between;
  width: calc(50% - 30px);
}

.discounts-info {
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 39px 30px 28px 30px;
  width: 47%;
}

.discounts-info h3 {
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  padding-bottom: 11px;
}

.discounts-info span {
  font-size: 44px;
  margin: 20px 0;
}

.btn-white {
  color: #2F4E74;
  background: #fff;
  border-color: #2F4E74;
  font-weight: 500;
}

.btn {
  padding: 12px 24px;
  text-decoration: unset;
}

.discounts-image {
  width: 40%;
  max-height: 100%;
}

.discounts-image img {
  height: 100%;
  width: 100%;
}

@media (max-width: 1200px) {
  .sales__card-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .discounts-item {
    width: 100%;
    max-height: 650px;
  }
}

@media (max-width: 750px) {
  .discounts-info[data-v-dcbc5360] {
    padding: 18px 15px 14px 15px;
  }

  .discounts-info span {
    font-size: 34px;
    margin: 10px 0;
  }

  .discounts-info h3 {
    font-size: 18px;
    line-height: 1.1;
    padding-bottom: 8px;
  }

  .discounts-image {
    width: 45%;
  }

  .detail-btn {
    line-height: 1.1;
    padding: 12px 25px;
  }

}

@media (max-width: 550px) {
  .discounts-info span {
    font-size: 30px;
    margin: 6px 0;
  }

  .discounts-info p {
    font-size: 12px;
  }
}
</style>
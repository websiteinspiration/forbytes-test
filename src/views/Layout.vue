<template>
  <div class="layout-page">
    <div class="main-container">
      <div class="nav-bar">
        <div class="nav-bar--icon nav-bar--icon__back"><</div>
        <div class="nav-bar--title">i-love-football</div>
        <div class="nav-bar--icon nav-bar--icon__more">|</div>
      </div>
      <div class="header">
        <div class="header--top">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1010px-FC_Barcelona.svg.png"
            alt="this user avatar"
            class="header--avatar"
          >
          <div class="header--folowers-container">
            <div class="header--folower-item">123</div>
            <div class="header--folower-item">123</div>
            <div class="header--folower-item">123</div>
          </div>
        </div>
        <div class="header--bottom">
          <h4>Manchester United</h4>
          <p>TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </div>
      <div class="photos">
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
      </div>
    </div>
    <div class="footer">
      <div class="footer--tab">A</div>
      <div class="footer--tab">B</div>
      <div class="footer--tab">C</div>
      <div class="footer--tab">D</div>
      <div class="footer--tab">E</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {}
</script>

<style scoped lang="scss">
$photo-size: 8em;
.main-container {
  width: 3 * $photo-size;
  margin: 0 auto;
}
.nav-bar {
  background: rgba(0, 0, 0, 0.1);
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &--icon {
    font-size: bold;
    padding: 0 5px;
    &__more {
      float: right;
    }
  }
  &--title {
    flex-grow: 1;
    text-align: left;
  }
}
.header {
  text-align: left;
  padding: 5px;
  &--avatar {
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }
  &--top {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  &--folowers-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  &--folower-item {
    text-align: center;
    font-weight: bold;
    flex-grow: 1;
  }
}
.photos {
  text-align: left;
}
.photo {
  display: inline-block;
  // margin: 2px;
  height: $photo-size;
  width: $photo-size;
  background: url("https://givemesport.azureedge.net/images/18/01/22/b2f4315e00578c3ac32118d9cb137f8b/960.jpg")
    center;
  background-size: cover;
  vertical-align: bottom;
  box-sizing: border-box;
  border: 1px solid #fff;
}
.footer {
  position: fixed;
  background: #fff;
  font-weight: bold;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 3 * $photo-size;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 -2px 9px -2px rgba(0, 0, 0, 0.3);
  &--tab {
    flex-grow: 1;
  }
}

@media screen and (min-width: 1200px) {
  .main-container,
  .footer {
    width: 4 * $photo-size;
  }
}
</style>
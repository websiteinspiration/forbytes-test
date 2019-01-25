<template>
  <div class="layout-page">
    <div class="main-container">
      <div class="nav-bar">
        <div class="nav-bar--icon nav-bar--icon__back">
          <i class="fas fa-arrow-left"></i>
        </div>
        <div class="nav-bar--title">manchesterunited</div>
        <div class="nav-bar--icon nav-bar--icon__more">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div class="header">
        <div class="header--top">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1010px-FC_Barcelona.svg.png"
            alt="this user avatar"
            class="header--avatar"
          >
          <div class="header--activity-container">
            <div class="header--folowers-container">
              <div class="header--folower-item">
                <div>359</div> 
                <div class="label">posts</div>
              </div>
              <div class="header--folower-item">
                <div>1243</div> 
                <div class="label">followers</div>
              </div>
              <div class="header--folower-item">
                <div>635</div>
                <div class="label">folowing</div>
              </div>
            </div>
            <div class="header--actions">
              <button class="header--action-button header--action-button__main"> Message</button>
              <button class="header--action-button">
                <i class="fas fa-user-plus"></i>
              </button>
              <button class="header--action-button">
                <i class="fas fa-caret-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="header--bottom">
          <div class="header--bottom-title">Manchester United</div>
          <div class="text__secondary-color text__regular">Sports Team</div>
          <div class="text__regular">TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
          <div class="header--stories-container">
            <div class="header--stories-list">
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
              <div class="header--story">
                <div class="image"></div>
                <div class="header--story-title">MUTV</div>
              </div>
            </div>
          </div>
          <div class="header--direct-container">
            <div class="header--direct">Shop</div>
            <div class="header--direct">Directions</div>
          </div>
          <div class="header--views-container">
            <div class="header--view-option">
              <i class="fas fa-th"></i>
            </div>
            <div class="header--view-option">
              <i class="far fa-list-alt"></i>
            </div>
            <div class="header--view-option">
              <i class="far fa-image"></i>
            </div>
          </div>
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
      <div class="footer--tab">
        <i class="fas fa-home"></i>
      </div>
      <div class="footer--tab">
        <i class="fas fa-search"></i>
      </div>
      <div class="footer--tab">
        <i class="far fa-plus-square"></i>
      </div>
      <div class="footer--tab">
        <i class="far fa-heart"></i>
      </div>
      <div class="footer--tab">
        <i class="fas fa-user-circle"></i>
      </div>
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
  max-width: 3 * $photo-size;
  margin: 0 auto;
}
.text{
  &__secondary-color{
    color: #b6b6b6;
  }
}
.nav-bar {
  background: rgb(251, 251, 251);
  height: 50px;
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
    padding-left: 10px;
    font-weight: bold;
  }
}
.header {
  text-align: left;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;

  &--avatar {
    display: inline-block;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }
  &--top {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  &--activity-container{
    flex-grow: 1;
  }
  &--actions{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding: 0 5px;
  }
  &--action-button{
    border: 1px solid #e8e8e8;
    font-size: 1em;
    padding: 4px 9px;
    border-radius: 2px;
    margin-left: 5px;
    background: #fff;
    &__main{
      font-weight: bold;
      flex-grow: 1;
    }
  }
  &--folowers-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin-top: 10px;
    padding-left: 15px;
  }
  &--folower-item {
    text-align: center;
    font-weight: bold;
    flex-grow: 1;
    .label{
      font-weight: 400;
      font-size: 0.8em;
      color: #AFAFAF;
    }
  }
  &--bottom-title{
    font-weight: bold;
    margin-top: 9px;
  }
  &--bottom{
    .text__regular{
      font-size: 0.9em;
      line-height: 1.3;
    }
  }
  &--stories-container{
    width: 100%;
    overflow: auto;
    margin-top: 15px;
    padding-bottom: 25px;
  }
  &--stories-list{
    display: flex;
  }
  &--story{
    position: relative;
    flex-shrink: 0;
    padding: 2px;
    border: 1px solid #dedede;
    border-radius: 50%;
    margin-right: 15px;
    .image{
      background: url("https://givemesport.azureedge.net/images/18/01/22/b2f4315e00578c3ac32118d9cb137f8b/960.jpg")
          center;
      background-size: cover;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  &--story-title{
    position: absolute;
    bottom: -17px;
    font-size: 0.7em;
    left: 30px;
    transform: translate(-50%);
  }
  // dedede
  &--direct-container{
    display: flex;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    padding: 10px 0;
  }
  &--direct{
    flex-grow: 1;
    flex-shrink: 0;
    color: #31a2fe;
    text-align: center;
    border-left: 1px solid #f4f4f4;
    width: 50%;
  }
  &--direct:first-child{
    border: 0;
  }
  &--views-container{
    display: flex;
    padding: 8px 0;
  }
  &--view-option{
    flex-grow: 1;
    text-align: center;
    font-size: 1.5em;
    color: #a9a9a9;
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
  height: 60px;
  display: flex;
  flex-direction: row;
  width: 3 * $photo-size;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%);
  background-color: #fbfbfb;
  box-shadow: 0 -2px 9px -2px rgba(0, 0, 0, 0.3);
  &--tab {
    flex-grow: 1;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

// @media screen and (min-width: 1200px) {
//   .main-container,
//   .footer {
//     width: 4 * $photo-size;
//   }
// }
</style>
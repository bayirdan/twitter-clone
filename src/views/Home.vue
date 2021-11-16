<script setup>
import Navbar from "../components/Navbar.vue";
import TimeLine from "../components/TimeLine.vue";
import RightBar from "../components/RightBar.vue";
import SearchBar from "../components/Any/SearchBar.vue";
import Trends from "../components/RightBar/Trends.vue";
import Follow from "../components/RightBar/WhoFollow.vue";
import Policy from "../components/RightBar/Policy.vue";
import TopTitle from "../components/TimeLine/TopTitle.vue";
import NewTweet from "../components/TimeLine/NewTweet.vue";
import Tweets from "../components/TimeLine/Tweets.vue";

//SVG
import svgFeature from "../components/svg/svgFeature.vue";
</script>

<template>
  <div class="home-box">
    <Navbar class="navbar" />
    <time-line>
      <template v-slot:topTitle>
        <top-title>
          <div class="top">
            <span class="top-title">Latest Tweets</span>
            <div class="svg-top">
              <svg-feature width="20px" height="20px" />
            </div>
          </div>
        </top-title>
      </template>
      <template v-slot:main>
        <NewTweet />
      </template>

      <template v-slot:tweets>
        <Tweets />
      </template>
    </time-line>
    <right-bar class="right">
      <SearchBar />
      <Trends />
      <Follow />
      <Policy />
    </right-bar>
  </div>
</template>

<style lang="scss" scoped>
.home-box {
  display: flex;
  justify-content: center;

  .top {
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .top-title {
      font-size: 19px;
      line-height: 24px;
      font-weight: 700;
    }
    .svg-top {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: var(--t2);

      &:hover {
        background-color: var(--item-hover);
      }
    }
  }
}

@media (max-width: 1050px) {
  .right {
    display: none;
  }
}

@media (max-width: 415px) {
  .home-box {
    display: block;
    width: 100%;

    .top {
      width: 85%;
      margin-left: auto;
      position: absolute;
      right: 0;
      .top-title {
        font-size: 17px;
      }
    }
  }
}
</style>

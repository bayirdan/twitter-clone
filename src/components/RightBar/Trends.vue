<script setup>
import svgSettings from "../svg/svgSettings.vue";
import Item from "./TrendItem.vue";

const data = [
  {
    topic: "Business & Finance",
    title: "#usdtry",
    tweet_count: 5_300,
  },
  {
    topic: "Trending in World",
    title: "COVID-19",
    tweet_count: 872_250,
  },
  {
    topic: "Sports",
    title: "#galatasaray",
    tweet_count: 8_340,
  },
  {
    topic: "Finance",
    title: "Bitcoin",
    tweet_count: 244_800,
  },
  {
    topic: "Trending in Turkey",
    title: "#istanbulsozlesmesiyasatir",
    tweet_count: 102_100,
  },
];
</script>

<template>
  <div class="trend-box">
    <div class="title">
      <span>Trends for you</span>
      <div class="setting-svg">
        <svgSettings width="20px" height="20px" />
      </div>
    </div>
    <ul v-for="(item, index) in data" :key="index">
      <Item :item="item" />
    </ul>
    <div class="show-more">
      <a>Show more</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trend-box {
  width: 100%;
  background-color: var(--right-item-color2);
  margin-top: 65px;
  border-radius: 16px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 48px;

    span {
      color: var(--item-text-color);
      font-size: 19px;
      font-weight: 800;
    }
    .setting-svg {
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      transition: var(--t2);

      &:hover {
        background-color: var(--item-hover);
      }
    }
  }

  .show-more {
    width: 100%;
    height: 52px;
    padding: 16px;
    transition: var(--t2);
    cursor: pointer;

    a {
      font-size: 15px;
      font-weight: 400;
    }

    &:hover {
      background-color: var(--right-hover);
    }
  }
}
</style>

<script setup>
import Item from "./WhoFollowItem.vue";

const follow_data = [
  {
    pp_route: "src/assets/img/follow1-pp.jpg",
    name: "Brad Traversy",
    username: "@traversymedia",
  },
  {
    pp_route: "src/assets/img/follow2-pp.jpg",
    name: "Dev Ed",
    username: "@developedbyed",
  },
];
</script>

<template>
  <div class="follow-box">
    <span>Who to follow</span>
    <ul v-for="(item, index) in follow_data" :key="index">
      <Item :item="item" />
    </ul>

    <div class="show-more">
      <a>Show more</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.follow-box {
  width: 100%;
  height: 244px;
  border-radius: 16px;
  background-color: var(--right-item-color2);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 19px;
    font-weight: 800;
    padding: 12px 16px;
    color: var(--item-text-color);
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

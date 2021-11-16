<script setup>
import { computed } from "@vue/reactivity";
import svgDots from "../svg/svgDots.vue";

const props = defineProps({
  item: Object,
});

const setTweetCount = (tweet) => {
  return tweet.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1" + ".");
};
</script>

<template>
  <li>
    <div class="title">
      <small>{{ props.item.topic }}</small>
      <span>{{ props.item.title }}</span>
      <small>{{ setTweetCount(props.item.tweet_count) }} Tweets</small>
    </div>
    <div class="svg">
      <svgDots width="18px" height="18px" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: var(--t2);
  line-height: 19px;

  .title {
    display: flex;
    flex-direction: column;

    small {
      color: var(--text-color-profile);
      font-size: 13px;
    }

    span {
      font-size: 15px;
      font-weight: 700;
      color: var(--item-text-color);
    }
  }

  .svg {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--t2);

    * {
      fill: var(--text-color-profile);
      transition: fill 0.2s;
    }

    &:hover {
      background-color: var(--blue-hover-light);

      * {
        fill: var(--blue);
      }
    }
  }

  &:hover {
    background-color: var(--right-hover);
  }
}
</style>

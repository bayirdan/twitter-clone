<script setup>
import { ref } from "vue";
import svgSearch from "../svg/svgSearch.vue";

const inputChange = ref(false);
</script>

<template>
  <div :class="inputChange ? 'search-box input-focus' : 'search-box'">
    <div class="search-svg">
      <svgSearch
        class="svg"
        :fill="inputChange ? 'var(--blue)' : '#6e767d'"
        width="19px"
        height="19px"
      />
    </div>
    <input
      @focus="inputChange = true"
      @blur="inputChange = false"
      type="text"
      name="searcBar"
      id=""
      placeholder="Search Twitter"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  // width: 350px;
  width: 100%;
  height: 44px;
  background-color: var(--right-item-color);
  border: 1px solid var(--right-item-color);
  display: flex;
  align-items: center;
  border-radius: 100px;
  overflow: hidden;

  .search-svg {
    width: 44px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 12px;
    font-size: 15px;
    color: var(--item-text-color);
  }
}

.input-focus {
  border: 1px solid var(--blue);
  background-color: transparent;
}
</style>

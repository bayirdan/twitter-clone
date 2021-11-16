<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <li>
    <div class="info">
      <div class="pp">
        <img :src="props.item.pp_route" alt="" srcset="" />
      </div>
      <div class="name">
        <small> {{ props.item.name }} </small>
        <small class="username"> {{ props.item.username }} </small>
      </div>
    </div>
    <button class="btn">Follow</button>
  </li>
</template>

<style lang="scss" scoped>
li {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: var(--t2);

  .info {
    display: flex;
    align-items: center;
    column-gap: 12px;

    .pp {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
    }

    .name {
      display: flex;
      flex-direction: column;

      small {
        font-size: 15px;
        font-weight: 700;
        color: var(--item-text-color);

        &:hover {
          text-decoration: underline;
        }
      }
      small.username {
        font-weight: 400;
        color: var(--text-color-profile);

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .btn {
    min-height: 32px;
    min-width: 32px;
    padding: 0 16px;
    border-radius: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
  }

  &:hover {
    background-color: var(--right-hover);
  }
}
</style>

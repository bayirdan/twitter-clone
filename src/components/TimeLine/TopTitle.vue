<template>
  <div class="top-header">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.top-header {
  width: 100%;
  min-height: 53px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  color: var(--item-text-color);
}

@media (max-width: 415px) {
  .top-header {
    height: 53px;
    position: fixed;
    top: 0;
    background-color: var(--bg-color);
    z-index: 1;
  }
}
</style>

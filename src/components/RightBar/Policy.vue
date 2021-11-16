<template>
  <div>
    <a>Terms of Service</a>
    <a>Privacy Policy</a>
    <a>Cookie Policy</a>
    <a>Imprint</a>
    <a>Ads into</a>
    <a>More...</a>
    <a class="no-cursor">© 2021 Bayirdan, Inc</a>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;

  a {
    font-size: 13px;
    font-weight: 400;
    color: var(--text-color-profile);
    padding-right: 12px;
    cursor: pointer;

    &:hover:not(:last-child) {
      text-decoration: underline;
    }

    &.no-cursor {
      cursor: text;
    }
  }
}
</style>

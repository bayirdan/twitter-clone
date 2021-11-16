<script></script>

<template>
  <div class="profile">
    <div class="pp">
      <img src="src/assets/img/pp.jpg" alt="" />
    </div>
    <div class="info">
      <span class="name">Burkay</span>
      <span class="username">@bayirdan</span>
    </div>
    <div class="more">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  width: 250px;
  min-height: 64px;
  margin: auto 0 12px 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.08);
  }

  .pp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 700;
    color: #d9d9d9;
    margin: 0 12px;
    row-gap: 2px;

    .username {
      color: #6e767d;
      font-weight: 400;
    }
  }

  .more {
    margin-left: auto;
  }
}

@media (max-width: 1300px) {
  .profile {
    width: fit-content;
    .info,
    .more {
      display: none;
    }
  }
}

@media (max-width: 415px) {
  .profile {
    position: fixed;
    top: 12px;
    left: 16px;
    padding: 0;
    min-height: 0;
    z-index: 99;

    .pp {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

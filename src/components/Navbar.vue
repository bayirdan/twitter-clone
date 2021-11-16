<script setup>
// Svg
import svgTwitter from "./svg/svgTwitter.vue";
import svgHome from "./svg/svgHome.vue";
import svgExplore from "./svg/svgExplore.vue";
import svgNotification from "./svg/svgNotification.vue";
import svgMessage from "./svg/svgMessage.vue";
import svgBookmark from "./svg/svgBookmark.vue";
import svgList from "./svg/svgList.vue";
import svgProfile from "./svg/svgProfile.vue";
import svgMore from "./svg/svgMore.vue";
import svgNew from "./svg/svgNew.vue";
import svgDots from "./svg/svgDots.vue";
import svgSearch from "./svg/svgSearch.vue";
// Svg

import Profile from "./Navbar/Profile.vue";
</script>

<template>
  <div class="navbar-box">
    <div class="menu-box">
      <div class="menu">
        <div class="logo mobile">
          <svg-twitter width="30px" height="30px"></svg-twitter>
        </div>
        <div class="items">
          <div class="item active">
            <svg-home />
            <span>Home</span>
          </div>
          <div class="item mobile no-tablet">
            <svg-explore />
            <span>Explore</span>
          </div>
          <div class="item no-mobile tablet">
            <svg-search />
            <span>Search</span>
          </div>
          <div class="item">
            <svg-notification />
            <span>Notifications</span>
          </div>
          <div class="item">
            <svg-message />
            <span>Messages</span>
          </div>
          <div class="item mobile">
            <svg-bookmark />
            <span>Bookmarks</span>
          </div>
          <div class="item mobile">
            <svg-list />
            <span>Lists</span>
          </div>
          <div class="item mobile">
            <svg-profile />
            <span>Profile</span>
          </div>
          <div class="item mobile">
            <svg-more />
            <span>More</span>
          </div>
        </div>
        <button class="btn">
          <div class="btn-mobile">
            <svg-new />
          </div>
          <span class="btn-title">Tweet</span>
        </button>
        <Profile class="profile">
          <svg-dots width="18px" height="18px" />
        </Profile>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active span {
  color: var(--active-color);
  font-weight: 700;
}

.navbar-box {
  min-width: 88px;
  max-width: 280px;
  width: 100%;
  position: relative;

  .menu-box {
    max-width: 275px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    .menu {
      display: flex;
      flex-direction: column;
      height: 100vh;
      padding: 0 12px;
      position: fixed;

      .logo {
        width: fit-content;
        padding: 12px;
        border-radius: 100px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
          background-color: var(--logo-hover);
        }
      }

      .items {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        width: 100%;

        .item {
          width: min-content;
          display: inline-flex;
          align-items: center;
          height: 50px;
          padding: 0 20px 0 12px;
          font-size: 19px;
          border-radius: 100px;
          cursor: pointer;
          font-weight: 400;
          transition: background-color 0.2s;

          &:hover {
            background-color: var(--item-hover);
          }

          span {
            padding-left: 20px;
            color: var(--item-text-color);
          }
        }

        .no-mobile {
          display: none;
        }
      }

      .btn {
        // width: 225px;
        width: 90%;
        min-width: 52px;
        min-height: 52px;
        padding: 0px 32px;
        margin: 24px 0 16px 0;
        font-size: 17px;
        background-color: var(--blue);
        font-weight: 700;
        border: none;
        border-radius: 100px;
        color: var(--btn-color);
        cursor: pointer;
        box-shadow: rgba(217, 217, 217, 0.2) 0px 0px 5px,
          rgba(217, 217, 217, 0.25) 0px 1px 4px 1px;
        transition: background-color 0.2s;

        &:hover {
          background-color: var(--blue-hover);
        }

        .btn-mobile {
          display: none;
        }
      }
    }
  }
}

// Media Queries
@media (max-width: 1300px) {
  .navbar-box {
    max-width: 88px;

    .menu-box {
      max-width: 88px;

      .menu {
        padding: 0;

        .items {
          span {
            display: none;
          }
          .item {
            padding: 12px;
          }
        }

        .btn {
          width: fit-content;
          padding: 10px;
          margin: 24px 0 16px 0;
          .btn-mobile {
            display: block;
          }
          span {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 1050px) {
  .navbar-box .menu-box .menu .items .tablet {
    display: block;
  }

  .navbar-box .menu-box .menu .items .no-tablet {
    display: none;
  }
}

@media (max-height: 715px) {
  .navbar-box .menu-box .menu .items {
    row-gap: 2px;
  }
}

@media (max-height: 630px) {
  .navbar-box .menu-box .menu .items .item:nth-child(5),
  .navbar-box .menu-box .menu .items .item:nth-child(6) {
    display: none;
  }
}

// MOBILE
@media (max-width: 415px) {
  .navbar-box {
    max-width: none;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 54px;
    background-color: var(--bg-color);
    z-index: 99;
    .menu-box {
      max-width: none;
      width: 100%;
      position: block;
      flex-direction: row;

      .menu {
        width: 100%;
        max-width: none;
        position: relative;
        flex-direction: row;

        .btn {
          position: fixed;
          right: 24px;
          bottom: 60px;
        }

        .items {
          width: 100%;
          flex-direction: row;
          justify-content: space-around;
          background-color: var(--bg-color);
          border-top: 1px solid var(--border);

          .mobile {
            display: none;
          }

          .no-mobile {
            display: block;
          }
        }

        .mobile {
          display: none;
        }
      }
    }
  }
}
// MOBILE
// Media Queries
</style>

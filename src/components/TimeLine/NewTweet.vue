<script setup>
//SVG
import svgWorld from "../svg/svgWorld.vue";
import svgMedia from "../svg/svgMedia.vue";
import svgGif from "../svg/svgGif.vue";
import svgSurvey from "../svg/svgSurvey.vue";
import svgEmoji from "../svg/svgEmoji.vue";
import svgDate from "../svg/svgDate.vue";
//SVG

import { computed, ref } from "vue";

const tweet = ref("");
let changeWho = ref(false);
</script>

<template>
  <div class="pp-and-tweet">
    <div class="pp-box">
      <div class="pp">
        <img src="src/assets/img/pp.jpg" alt="" />
      </div>
    </div>

    <div class="tweet">
      <input
        type="text"
        name="newTweet"
        id=""
        placeholder="What's happening?"
        v-model="tweet"
        @focus="changeWho = true"
      />
      <div :class="!changeWho ? 'who-reply-box' : 'who-reply-box change-who'">
        <div class="who-reply">
          <svg-world width="16px" hight="16px" fill="var(--blue-hover)" />
          <span>Everyone can reply</span>
        </div>
      </div>
      <div class="add-other-box">
        <div class="add-other">
          <div class="item">
            <svg-media width="20px" height="20px" fill="var(--blue)" />
          </div>
          <div class="item">
            <svg-gif width="20px" height="20px" fill="var(--blue)" />
          </div>
          <div class="item invisible">
            <svg-survey width="20px" height="20px" fill="var(--blue)" />
          </div>
          <div class="item">
            <svg-emoji width="20px" height="20px" fill="var(--blue)" />
          </div>
          <div class="item invisible">
            <svg-date width="20px" height="20px" fill="var(--blue)" />
          </div>
        </div>
        <button
          class="btn"
          :style="
            tweet.length > 0
              ? { opacity: 1, cursor: 'pointer' }
              : { opacity: 0.5 }
          "
        >
          Tweet
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pp-and-tweet {
  width: 100%;
  min-height: 116px;
  max-height: 158px;
  height: auto;
  padding: 8px 16px;
  display: flex;
  border-bottom: 1px solid var(--border);

  .pp-box {
    width: 50px;
    height: 100%;
    position: relative;
    .pp {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .tweet {
    flex: 1;

    input {
      width: 100%;
      height: 56px;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 12px;
      font-size: 20px;
      line-height: 24px;
      color: var(--item-text-color);

      &::placeholder {
        color: var(--text-color-profile);
        font-weight: 400;
      }
    }

    .who-reply-box {
      display: none;
      width: 100%;
      height: 37px;
      border-bottom: 1px solid var(--border);
      .who-reply {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        column-gap: 5px;
        padding: 0 10px;
        border-radius: 16px;

        span {
          color: var(--blue);
          font-size: 14px;
          line-height: 16px;
        }

        &:hover {
          background-color: var(--blue-hover-light);
        }
      }
    }
    .change-who {
      display: block;
    }

    .add-other-box {
      width: 100%;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .add-other {
        display: flex;

        .item {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--t2);

          &:hover {
            background-color: var(--blue-hover-light);
          }
        }
      }

      .btn {
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 16px;
        background-color: var(--blue);
        border: none;
        outline: none;
        color: var(--item-text-color);
        opacity: 0.5;
      }
    }
  }
}

@media (max-width: 769px) {
  .pp-and-tweet .tweet .add-other-box .add-other .invisible {
    display: none;
  }
}

@media (max-width: 415px) {
  .pp-and-tweet {
    display: none;
  }
}
</style>

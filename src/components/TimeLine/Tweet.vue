<script setup>
// SVG
import svgComment from "../svg/svgComment.vue";
import svgRetweet from "../svg/svgRetweet.vue";
import svgLike from "../svg/svgLike.vue";
import svgShare from "../svg/svgShare.vue";
import svgDots from "../svg/svgDots.vue";
import svgBadge from "../svg/svgBadge.vue";
// SVG

const props = defineProps({
  tweet: Object,
});
</script>

<template>
  <div class="tweet-box">
    <div class="left">
      <div class="pp">
        <img :src="props.tweet.pp_route" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="info">
        <div class="info__left">
          <div class="name">
            <span>{{ props.tweet.name }}</span>
          </div>
          <div class="badge" v-if="props.tweet.badge">
            <svg-badge width="17px" height="17px" />
          </div>
          <div class="username">
            <span> {{ props.tweet.username }} </span>
          </div>
          <div class="dot">·</div>
          <div class="time">
            <span> {{ props.tweet.time }}</span>
          </div>
        </div>
        <div class="info__right">
          <svg-dots class="dots" width="18px" height="18px" />
        </div>
      </div>
      <div class="tweet">
        <span>
          {{ props.tweet.text }}
        </span>
      </div>
      <div class="tweet-image" v-if="props.tweet.image_route !== false">
        <img :src="props.tweet.image_route" alt="" />
      </div>
      <div class="tools">
        <div class="comment tools-item">
          <div class="svg-box">
            <svg-comment class="svg" width="18px" height="18px" />
          </div>
          <span> {{ props.tweet.comment }} </span>
        </div>
        <div class="re-tweet tools-item">
          <div class="svg-box">
            <svg-retweet class="svg" width="18px" height="18px" />
          </div>
          <span> {{ props.tweet.retweet }} </span>
        </div>
        <div class="like tools-item">
          <div class="svg-box">
            <svg-like class="svg" width="18px" height="18px" />
          </div>
          <span> {{ props.tweet.like }} </span>
        </div>
        <div class="share tools-item">
          <div class="svg-box">
            <svg-share class="svg" width="18px" height="18px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweet-box {
  width: 100%;
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  transition: var(--t2);

  .left {
    position: relative;
    width: 60px;
    height: auto;

    .pp {
      top: 0;
      left: 0;
      position: absolute;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .right {
    flex: 1;

    .info {
      display: flex;
      height: 22px;
      align-items: center;
      justify-content: space-between;

      .info__left {
        display: flex;
        column-gap: 5px;
        flex-wrap: wrap;
        align-items: center;

        .name span {
          font-size: 15px;
          font-weight: 700;

          &:hover {
            text-decoration: underline;
          }
        }

        .badge {
          display: flex;
        }

        .username span {
          font-size: 15px;
          line-height: 20px;
          font-weight: 400;
          color: var(--text-color-profile);
        }

        .dot {
          font-size: 20px;
          line-height: 20px;
          font-weight: 400;
          color: var(--text-color-profile);
        }
        .time span {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--text-color-profile);

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .info__right {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: var(--t2);

        .dots {
          transition: all 0.2s;
          fill: var(--text-color-profile);
        }

        &:hover {
          background-color: var(--blue-hover-light);

          .dots {
            fill: var(--blue);
          }
        }
      }
    }
  }

  .tweet {
    height: auto;
    padding-right: 18px;

    span {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
    }
  }

  .tweet-image {
    border-radius: 16px;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
  }

  .tools {
    width: 85%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;

    .tools-item {
      height: 20px;
      display: flex;
      align-items: center;
      column-gap: 5px;
      border-radius: 16px;

      .svg-box {
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: var(--t2);
        .svg {
          fill: var(--text-color-profile);
        }
      }

      span {
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;
        color: var(--text-color-profile);
        transition: color 0.2s;
      }
    }

    .comment:hover {
      span {
        color: var(--blue);
      }

      .svg-box {
        background-color: var(--blue-hover-light);

        .svg {
          fill: var(--blue);
        }
      }
    }
    .re-tweet:hover {
      span {
        color: var(--green);
      }

      .svg-box {
        background-color: var(--green-hover);

        .svg {
          fill: var(--green);
        }
      }
    }
    .like:hover {
      span {
        color: var(--red);
      }

      .svg-box {
        background-color: var(--red-hover);

        .svg {
          fill: var(--red);
        }
      }
    }
    .share:hover {
      .svg-box {
        background-color: var(--blue-hover-light);

        .svg {
          fill: var(--blue);
        }
      }
    }
  }

  &:hover {
    background-color: var(--logo-hover);
    cursor: pointer;
  }
}

@media (max-width: 769px) {
  .tweet-box .tools {
    width: 100%;
  }
}

@media (max-width: 569px) {
  .tweet-box .right .info .info__left .username span {
    display: none;
  }

  .tweet-box .tweet {
    padding-right: 0;
  }
}
</style>

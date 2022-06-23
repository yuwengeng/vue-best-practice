<template>
  <ul class="content">
    <li v-for="(item, index) in activityList" :key="index" class="pc-case-item">
      <div class="casebg">
        <img
          src='https://oss.oact.net/Banner/0-1557470949982744970.jpg?x-oss-process=image/resize,w_350,/format,jpg/quality,Q_80'
          :alt="item.Name" class="case-img" />
        <div class="shade" style="display: none">
          <div class="qr-code">
            <img
              src="data:image/png;base64,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"
              alt="二维码" />
            <p>* 扫码查看效果 *</p>
          </div>
        </div>
      </div>
      <div class="casetitle">
        <a :href="item.ViewUrl" class="task" :title="item.Name">{{ item.Name }}</a>
        <div class="volume">
          <div class="volume1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADKUlEQVRYR+2YS2gUQRCG/+qYTaL4OAgB30qQgMGdmkSNIuImHhRPCuYgim9EPAki6lXQgydB8KJoRBE8KIgQUCIRRONjp2cht+ADRdSAYUUQcXempOMENsvuTJLNSg7Tx+2uqa//rurtKsI0HzTN+RAJ6LruRhE5DGAJgDwAmaJN1QL4SERXLct6Vu6boYBa6zMAzk8RUNhnTjHzxVILygKm0+l2pdSLAqMcEXkiEql61IaISESkBoBRcWQopTqTyeSTYtuyzrTWDwFsDwyO5nK5B0qpfG1trYoCiJr3PE/y+XxNIpHYJiJXDR8RXbMsy4TSmBEGqAFYAL4z8/wop5OddxzHxOFiADeZed9EAF8DaCOir8lkcoE5lslChNlprd8CWAHgBjMfmAjgSwBrAQxls9mFqVTKZPCYkU6nVxPRSgB/ykEopWqIKF9XV9fX3Nz8s3id1voDgKUArjPzwSkDzGQyHb7v945XVRH5lEgkmlpaWsZspmqAruvuEJF74wU067LZbEMqlfpdaFM1QONEa72PiJrDjtj3/ZGsJ6IeZn7+3454IspFJEl1YjAGDBQIu6gjr5mpULGqSRIDmuwvp4LWOj7i4C6Nr5mKciXO4ork+/d/HsdgRSLGClYkXxyDgXwDAwOJXC63C8AqEWlUSpkK8LPv+/22bfdU68H6CsAaAN8GBwcXdnV1eaUcOY5zjIjOAlhUBuQREZ0r13/RWr8HsGwyZedo4T7EzI2lnGutLwM4XjT3BcAsAHMKfyeinZZl3S9Rk7wDsHwyhftTAJsAeES0uVgBrfVJAIUNnytKqe7h4eF0Q0PDzPr6+q0icgTAllEoz/Oa2traTKE+MjKZzDoR6RORegDdzLy/eANhzy0TU3cLDMzzKxc80Uyltj6YE9/3N7S2tvaXUtl13QsicjqY+wXgTdCLmSEi7QU2e5j59rgBzULXdW+KyN6wIBeR3bZt3wlb4zhOLxF1hKy5xcwl/US20lzXPSEinQDmAvCDBqbpnxnbQdu2D0XdhVrreUR0R0RmB01QY2tO4QeAx8x8qdw3IgGjnFd7PgasVOFpr+BfEfM4Rx+C82gAAAAASUVORK5CYII="
              alt="票数" class="vote-icon" />{{ item.ViewNum }}
          </div>
          <div class="volume1">
            <img src="../assets/peoples.png" alt="选手数" class="vote-icon" />{{ item.VoteItemNum }}
          </div>
          <div class="volume1">
            <img src="../assets/viewed.png" alt="浏览量" class="vote-icon" />{{ item.VoteNum }}
          </div>
        </div>
      </div>
    </li>
    <h2 class="noData" v-if="this.$store.state.activityList.length == 0">暂无数据...</h2>

    <p class="noMore" v-if="length">没有更多了</p>
    <p class="noMore more" v-else-if="this.$store.state.activityList.length && !length" @click="handleMore">
      点击加载更多</p>

  </ul>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "ListCard",
  props: {
    // msg: String,
  },
  data() {
    return {
      pageIndex: 1,
    }
  },
  computed: {
    length() {
      const _ = this.$store.state.activityList;
      console.log('_', _);

      // 判断分页：
      if (_) {
        return _.length < 12 && _.length > 0
      }
      return false;
    },
    ...mapState(["activityList"]),

  },
  methods: {
    handleMore() {
      const index = this.$store.state.pageIndex + 1
      this.$store.dispatch("loadData", { id: this.$store.state.id, index: index })
    }
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  left: calc(6% + 118px);
  /* top: 50%;
  transform: translateY(-50%); */
  width: 80vw;
  min-height: -webkit-fill-available;
  display: flex;
  min-inline-size: 300px;
  flex-wrap: wrap;

}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.pc-case-item {
  width: 276px;
  height: 238px;
  background: #fff;
  box-shadow: 1px 10px 10px 0 rgb(0 0 0 / 4%);
  margin-bottom: 40px;
  padding-top: 13px;
  border-radius: 6px;
  margin-right: 28px;
  margin-left: 8px;

  /* flex: 1 0 20%; */
}

.casebg {
  width: 250px;
  height: 144px;
  background-color: #fafafa;
  border-radius: 6px 6px 0 0;
  background-size: cover;
  position: relative;
  margin: 0 auto;
}

.case-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
}

.casetitle {
  text-align: left;
}

.task {
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 0.58667rem;
  font-family: Microsoft YaHei, PingFangSC, Source Han Sans CN, Microsoft Yahei,
    sans-serif;
  text-align: left;
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 0;
  width: 250px;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #343434;
  margin: 16px auto 0;
  cursor: pointer;
  display: inline-block;
  margin-left: 6%;
  text-decoration: none;
  text-overflow: ellipsis;
}

.task:hover {
  color: #2196f3;
}

.volume {
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 0.58667rem;
  font-family: Microsoft YaHei, PingFangSC, Source Han Sans CN, Microsoft Yahei,
    sans-serif;
  color: #666;
  font-size: 12px;
  text-align: left;
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 0;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto 0;
}

.volume1 {
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 0.58667rem;
  font-family: Microsoft YaHei, PingFangSC, Source Han Sans CN, Microsoft Yahei,
    sans-serif;
  text-align: left;
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #9c9c9c;
}

.vote-icon {
  width: 20px;
  height: 20px;
}

.noData {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.noMore {
  font-size: 12px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
}

.more {
  color: #0078ff;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .content {
    margin-top: 77px;
    position: relative;
    justify-content: center;
    width: 100%;
    left: 0;
    height: calc(100% - 77px);
    overflow: auto;
  }

  .noMore {
    font-size: 12px;
    width: 100vw;
    text-align: center;
    transform: none;
    position: initial;
  }
}
</style>

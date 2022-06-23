<template>
  <!-- <div > -->
  <ul :class="{ nav: !navShow, tableLayout: navShow, }">
    <li v-for="(item, index) in navList" :key="index" @click="handleClickNav(index)"
      :class="{ active: currentNav === index }">
      {{ item }}
    </li>
    <div :class="{ 'tbl-list': !navShow, 'tbl-list-show': navShow }" @click="handleNavSwitch"><img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAABB0lEQVRIS+2UMUvEQBSE571lSSFcI8IV11lZWGhjJ0S4ImkCafyl2c1ZaOuvEOVAQc/i4CAS73Ykiohomc01tz9gPmZ23oj3/g1AgvhvKSJH4r1nfNYXQUQuO+AcwCQ2lOSdtfZUnHMjkmfGGBMRuk6S5DZN05VEhPwrvQP2nvjwkTrnDlV1CiBaS0muAcyyLLvv7nAFYK/37P4KLkIIx1tZmicA4wEcPojI59IcALggGe0PVfW9aZrrsixfh2/pAFH+Quwc9p5419IJyamqau/qP4Kbtm2viqJ47A5/CWAUEfYt/ayqW1iauq4XJPcHcDi31p5IVVVjY8x5zKUJIWxE5CbP85cPQQ1jDeqW/S8AAAAASUVORK5CYII="
        alt="更多"></div>
  </ul>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Nav",
  props: {
    // msg: String,
  },
  data() {
    return {
      currentNav: 0,
      navList: [
        "全部",
        "最热",
        "金融",
        "事业单位",
        "医疗",
        "教育",
        "建筑",
        "集团企业",
        "行业协会",
        "大型活动",
      ],
      navShow: false
    };
  },
  created() {
    this.currentNav = 0;
  },
  methods: {
    changeIndex(i) {
      const _ = this.navList[i];
      this.navList.splice(i, 1)
      this.navList.unshift(_)
    },
    handleClickNav(i) {
      if (this.currentNav !== i) {
        this.currentNav = i;
        this.$store.dispatch("loadData", { id: i - 1, index: 1 });

        this.navShow && this.changeIndex(i)
      }
      this.navShow = false;

    },
    handleNavSwitch() {
      this.navShow = true;
    }
  },
};
</script>

<style scoped>
ul.nav {
  list-style-type: none;
  padding: 0;
  width: 118px;
  max-height: 95%;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 10px 20px 0 hsl(0deg 0% 67% / 10%);
  border-radius: 6px;
  overflow: hidden;

  position: fixed;
  left: 4%;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;

}

li {
  display: inline-block;
  word-break: keep-all;
  margin: 0 10px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  margin: 0;
}

li.active {
  color: #fff !important;
  background: #2196f3;
  /* border-radius: 6px; */
}

li:hover {
  color: #2296f3;
  cursor: pointer;
}

.tbl-list {
  display: none;
}


@media screen and (max-width: 800px) {
  ul.nav {
    list-style-type: none;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 10px 20px 0 hsl(0deg 0% 67% / 10%);
    /* overflow: hidden; */
    /* display: inline-block; */
    padding: 3%;
    box-sizing: border-box;
    width: 100%;
    height: 61px;
    line-height: 61px;
    /* max-height: 60vh; */
    border-radius: 0;
    transform: translateY(0);
    position: fixed;
    left: 0;
    top: 0;
    display: grid;
    justify-content: space-between;
    z-index: 2;
  }

  .tableLayout {
    /* display: table !important; */
    /* height: unset !important; */
    overflow: auto;
    justify-content: center;
    /* display: flex !important;
    flex-direction: column; */
    line-height: 61px;
    height: 88vh;
    position: fixed;
    left: 0;
    top: 0;
    transform: translateY(0);
    z-index: 2;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 20px 0 hsl(0deg 0% 67% / 10%);
    max-height: 88vh;
    padding: 0;
    margin: 0;
  }

  .tbl-list-show {
    display: none;
  }

  .tbl-list {
    color: #666;
    font-size: 12px;
    outline: 0;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    margin: 0;
    padding: 0;
    width: 52px;
    text-align: right;
    position: absolute;
    right: 3%;
    display: block;
  }

  .tbl-list>img {
    color: #666;
    font-size: 12px;
    text-align: right;
    outline: 0;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border: 0;
    width: 16px;
    height: 16px;
  }

  li {
    margin: 0 5%;
  }

  li.active {
    color: #2196f3 !important;
    background: unset;
  }
}
</style>

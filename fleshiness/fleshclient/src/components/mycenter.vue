<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo navbox"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="6">
        <template slot="title">个人中心</template>
        <el-menu-item index="6-1">购物车</el-menu-item>
        <el-menu-item index="6-2">我的收藏</el-menu-item>
        <el-menu-item index="6-3">我的问答</el-menu-item>
        <el-menu-item index="6-4">我的评价</el-menu-item>
        <el-menu-item index="6-5">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">帮助中心</el-menu-item>
      <el-menu-item index="4">在线客服</el-menu-item>
      <el-menu-item index="3">会员中心</el-menu-item>
      <el-menu-item index="2">我的订单</el-menu-item>
      <div class="notice">
        <ul>
          <li v-for="(item,index) in items" :key="index">{{ item.message }}</li>
        </ul>
      </div>
    </el-menu>
    <div class="headimg">
      <img src="https://m.duorou.com/content_web/img/logonew.png" alt />
    </div>
    <div class="littlenav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="多肉植物" name="second"></el-tab-pane>
        <el-tab-pane label="绿植盆栽" name="third"></el-tab-pane>
        <el-tab-pane label="园艺资材" name="fourth"></el-tab-pane>
        <el-tab-pane label="经销商加盟" name="fiveth"></el-tab-pane>
        <el-tab-pane label="园艺布景培训" name="sixth"></el-tab-pane>
      </el-tabs>
      <div class="search">
        <input type="text" placeholder="请输入关键字" />
        <a href class="searchimg">
          <img src="https://m.duorou.com/Content_web/img/smallImg.png" alt />
        </a>
        <a href class="shopcar">
          <img src="https://m.duorou.com/Content_web/img/gouwuche.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeIndex: "1",
      activeIndex2: "1",
      items: [
        { message: "公告：Foo" },
        { message: "公告：Poo" },
        { message: "公告：Ioo" },
        { message: "公告：Koo" },
        { message: "公告：Bar" },
        { message: "公告：Foo" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 5 || key == 4) {
        this.$router.push({
          path: `/help?index=2`
        });
      } else if (key == 3) {
        this.$router.push({
          // path: `/`
        });
      }
      console.log(key, keyPath, "456");
    },
    handleClick(tab, event) {
      if (tab.index == "0") {
        this.$router.push({
          path: `/`
        });
      }else if(tab.index == "1"){
        this.$router.push({
          path:"/plants"
        });
      }else if(tab.index =="2"){
        this.$router.push({
          path:"/potting"
        });
      }else if(tab.index == "3"){
        this.$router.push({
          path:"/materials"
        });
      }
      console.log(tab, event);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.navbox {
  display: flex;
  flex-direction: row-reverse;
  padding: 0px 150px;
  background-color: black !important;
  height: 40px;
}
.notice {
  width: 55%;
  min-width: 300px;
  height: 40px;
  overflow: hidden;
  line-height: 40px;
}
.notice ul {
  color: white;
  animation: vertical 8s infinite;
}
.notice ul li {
  list-style: none;
  text-align: left;
}
.headimg {
  text-align: center;
  height: 180px;
  line-height: 228px;
}
.littlenav {
  margin: 0px 100px;
}
.el-menu--horizontal > .el-menu-item {
  height: 40px !important;
  background-color: black !important;
  line-height: 40px !important;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  background-color: black !important;
  height: 40px !important;
  line-height: 40px !important;
}
.el-menu--horizontal .el-menu .el-menu-item {
  width: 100px;
  text-align: center;
  color: black !important;
  background-color: white !important;
}
.el-menu--popup {
  min-width: 0 !important;
}
.el-menu--popup {
  padding: 0 !important;
}
.el-tabs__item.is-active {
  color: #71b64c !important;
}
.el-tabs__item:hover {
  color: #71b64c !important;
}
.el-tabs__active-bar {
  background-color: #71b64c !important;
}
.search {
  height: 30px;
  width: 290px;
  position: relative;
  top: -72px;
  right: -67vw;
  display: flex;
}
.search input {
  padding: 10px;
  border: none;
  margin-right: 15px;
  border-bottom: 1px solid #c0bbbb;
}
.searchimg {
  width: 30px;
  height: 30px;
  overflow: hidden;
}
.searchimg img {
  margin-top: -128px;
  width: 70px;
}
.shopcar img {
  margin-top: 10px;
  width: 20px;
  height: 20px;
}
@keyframes vertical {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-40px);
  }
  40% {
    transform: translateY(-80px);
  }
  60% {
    transform: translateY(-120px);
  }
  80% {
    transform: translateY(-160px);
  }
  100% {
    transform: translateY(-200px);
  }
}
</style>
<template>
  <div>
    <div class="cu-bar bg-white search flex" >
      <div class="search-form round">
        <text class="cuIcon-search"></text>
        <input type="text" placeholder="搜索" confirm-type="search" @input="searchIcon">
      </div>
    </div>
    <div class="cu-list menu bg-white flex">
      <div class="cu-item arrow solid-bottom">
        <div class="content">
          <text class="text-black text-df text-bold">新朋友</text>
        </div>
      </div>
      <div class="cu-item arrow solid-bottom">
        <div class="content">
          <text class="text-black text-df text-bold">创建群聊</text>
            <div class="cu-tag round bg-red sm fr">新</div>
        </div>
      </div>
    </div>

    <van-tabs 
    @active="active" 
    @change="onChange"
    swipe-threshold="5"
    swipeable="true"
    animated="true"
    color="#00aeef"
    >
        <van-tab tab-active-class="color:#00aeef" title="好友">内容 1</van-tab>
        <van-tab title="群聊">内容 2</van-tab>
        <van-tab title="设备">内容 3</van-tab>
        <van-tab title="通讯录">内容 4</van-tab>
        <van-tab title="公众号">内容 5</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    // searchIcon (e) {
    //   let key = e.detail.value.toLowerCase()
    //   let list = this.icon
    //   for (let i = 0; i < list.length; i++) {
    //     let a = key
    //     let b = list[i].name.toLowerCase()
    //     if (b.search(a) !== -1) {
    //       list[i].isShow = true
    //     } else {
    //       list[i].isShow = false
    //     }
    //   }
    //   this.icon = list
    // }

    onChange (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.cu-list.menu>.cu-item .content .cu-tag.sm {
  display:inline-block;
  margin-left:5px;
  height:18px;
  font-size:9px;
  line-height:19px;
  margin-top:3px;
}

</style>

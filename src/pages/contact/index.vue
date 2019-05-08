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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
  }
}
</script>

<style scoped>
</style>

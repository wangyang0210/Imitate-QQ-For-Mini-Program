<template>
  <div>
    <div class="cu-bar bg-white search flex" >
      <div class="search-form round">
        <text class="cuIcon-search"></text>
        <input type="text" placeholder="搜索" confirm-type="search" @input="searchIcon">
      </div>
    </div>
    <div class="cu-list menu bg-white flex margin-bottom-lg">
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

    <van-tabs color="#00aeef" animated="true" swipeable="true" swipe-threshold="5" @active="active">
        <van-tab tab-active-class="color:#00aeef" title="好友">
           <van-collapse :value="activeNames" @change="onChange" >
            <van-collapse-item title="特别关心" name="1">
              <div class="cu-list menu-avatar">
                <div class="cu-item" @click="enterChat"
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,index) in 4"
                :key="index"
                @touchstart="ListTouchStart"
                @touchmove="ListTouchMove"
                @touchend="ListTouchEnd"
                :data-target="'move-box-' + index"
                >
                <div class="cu-avatar round lg"
                    :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"
                ></div>
                <div class="content">
                    <div class="text-grey">王洋</div>
                    <div class="text-gray text-sm">
                    <text class=" margin-right-xs">学无止境,谦卑而行</text>
                    </div>
                </div>
                </div>
            </div>
            </van-collapse-item>
            <van-collapse-item title="我的好友" name="2">
             <div class="cu-list menu-avatar">
                <div class="cu-item"
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,index) in 4"
                :key="index"
                @touchstart="ListTouchStart"
                @touchmove="ListTouchMove"
                @touchend="ListTouchEnd"
                :data-target="'move-box-' + index"
                @click="enterChat"
                >
                <div class="cu-avatar round lg"
                    :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"
                ></div>
                <div class="content">
                    <div class="text-grey">明月</div>
                    <div class="text-gray text-sm">
                    <text class=" margin-right-xs">生活与你都不可缺少</text>
                    </div>
                </div>
                </div>
            </div>
            </van-collapse-item>
            <van-collapse-item title="朋友" name="3">
              <div class="cu-list menu-avatar">
                <div class="cu-item"
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,index) in 4"
                :key="index"
                @touchstart="ListTouchStart"
                @touchmove="ListTouchMove"
                @touchend="ListTouchEnd"
                :data-target="'move-box-' + index"
                @click="enterChat"
                >
                <div class="cu-avatar round lg"
                    :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"
                ></div>
                <div class="content">
                    <div class="text-grey">李四</div>
                    <div class="text-gray text-sm">
                    <text class=" margin-right-xs">想念和张三搞基的生活~</text>
                    </div>
                </div>
                </div>
            </div>
            </van-collapse-item>
            <van-collapse-item title="同学" name="4">
              <div class="cu-list menu-avatar">
                <div class="cu-item"
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,index) in 4"
                :key="index"
                @touchstart="ListTouchStart"
                @touchmove="ListTouchMove"
                @touchend="ListTouchEnd"
                :data-target="'move-box-' + index"
                @click="enterChat"
                >
                <div class="cu-avatar round lg"
                    :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"
                ></div>
                <div class="content">
                    <div class="text-grey">伊泽瑞尔</div>
                    <div class="text-gray text-sm">
                    <text class=" margin-right-xs">等我回来一个打十个</text>
                    </div>
                </div>
                </div>
            </div>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
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
      active: 0,
      activeNames: ['1']
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
    onChange (event) {
      this.activeNames = event.mp.detail
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

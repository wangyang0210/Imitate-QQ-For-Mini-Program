<template>
  <div>
    <scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
      <div class="cu-list menu-avatar">
        <div
          class="cu-item"
          :class="modalName=='move-box-'+ index?'move-cur':''"
          v-for="(item,index) in 8"
          :key="index"
          @touchstart="ListTouchStart"
          @touchmove="ListTouchMove"
          @touchend="ListTouchEnd"
          :data-target="'move-box-' + index"
          @click="enterChat"
        >
          <div
            class="cu-avatar round lg"
            :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"
          ></div>
          <div class="content">
            <div class="text-grey">王洋</div>
            <div class="text-gray text-sm">
              <text class="cuIcon-infofill text-red margin-right-xs"></text>消息未送达
            </div>
          </div>
          <div class="action">
            <div class="text-grey text-xs">22:20</div>
            <div class="cu-tag round bg-grey sm">5</div>
          </div>
          <div class="move">
            <div class="bg-grey">置顶</div>
            <div class="bg-red">删除</div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalName: null,
      listTouchStart: 0,
      listTouchDirection: null
    }
  },
  methods: {
    showModal (e) {
      this.modalName = e.currentTarget.dataset.target
    },
    hideModal (e) {
      this.modalName = null
    },

    // ListTouch触摸开始
    ListTouchStart (e) {
      this.listTouchStart = e.touches[0].pageX
    },

    // ListTouch计算方向
    ListTouchMove (e) {
      this.listTouchDirection =
        e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
    },

    // ListTouch计算滚动
    ListTouchEnd (e) {
      if (this.listTouchDirection === 'left') {
        this.modalName = e.currentTarget.dataset.target
      } else {
        this.modalName = null
      }
      this.listTouchDirection = null
    },

    // 进入聊天界面
    enterChat () {
      mpvue.navigateTo({url: '/pages/chat/main'})
    }
  }
}
</script>

<style scoped>
.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>

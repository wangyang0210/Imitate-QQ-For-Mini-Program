<template>
  <div>
    <div class="cu-bar bg-white search flex" >
      <div class="search-form round">
        <text class="cuIcon-search"></text>
        <input type="text" placeholder="搜索" confirm-type="search" @input="searchIcon">
      </div>
    </div>
    <scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
      <div class="cu-list menu-avatar">
        <div
          class="cu-item"
          :class="modalName=='move-box-'+ index?'move-cur':''"
          v-for="(item,index) in messageList"
          :key="index"
          @touchstart="ListTouchStart"
          @touchmove="ListTouchMove"
          @touchend="ListTouchEnd"
          :data-target="'move-box-' + index"
        >
            <div class="cu-avatar round lg" :style="[{backgroundImage:'url('+item.avatar+')'}]"></div>
            <div class="content" @click="enterChat">
              <div class="text-blank">{{item.nickname}}</div>
              <div class="text-grey text-sm">
                <text class="margin-right-xs" >{{item.content}}</text>
              </div>
            </div>
            <div class="action">
              <div class="text-grey text-xs text-time " >{{item.time}}</div>
              <div class="cu-tag round bg-red sm" v-if="item.read != 0" >{{item.read}}</div>
            </div>
          <div class="move">
            <div class="bg-grey" @click="listTop" >置顶</div>
            <div class="bg-red" @click="listDel">删除</div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import { baseUrl } from '@/utils/http'
export default {
  data () {
    return {
      modalName: null,
      listTouchStart: 0,
      listTouchDirection: null,
      id: 1,
      messageList: []
    }
  },
  mounted () {
    this.query()
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
    },

    listTop (e) {
      const that = this
      let index = e.currentTarget.dataset.eventid.substr(e.currentTarget.dataset.eventid.length - 1, 1)
      that.messageList.unshift(that.messageList[index])
      that.messageList.splice(++index, 1)
    },

    listDel (e) {
      console.log(e)
    },
    // 搜索框
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
    // },
    query () {
      const that = this
      that.http({
        url: baseUrl + 'get_list',
        data: {
          id: that.id
        }
      }).then(res => {
        that.messageList = res.data
        console.log(that.messageList)
      })
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
  .text-time {
    font-size: 9px;
  }

</style>

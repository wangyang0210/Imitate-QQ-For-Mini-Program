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
           <van-collapse :value="activeNames" @change="onChange" v-for="(item, index) in friendList" :key="index">
            <van-collapse-item :title="item.group" :name="item.groupId" class="solid-bottom">
              <div class="cu-list menu-avatar ">
                <div 
                class="cu-item solid-bottom" 
                @click="enterChat"
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,_index) in item.list"
                :key="_index"
                @touchstart="ListTouchStart"
                @touchmove="ListTouchMove"
                @touchend="ListTouchEnd"
                :data-target="'move-box-' + _index"
                >
                <div class="cu-avatar round lg"
                    :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (_index+2) +'.jpg)'}]"
                ></div>
                <div class="content">
                    <div class="text-grey">{{item.nickname}}</div>
                    <div class="text-gray text-sm">
                    <text class=" margin-right-xs">{{item.desc}}</text>
                    </div>
                </div>
                </div>
            </div>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title="群聊"></van-tab>
        <van-tab title="设备">
            <div class="cu-list menu-avatar">
                <div class="cu-item"
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,index) in device"
                :key="index"
                @touchstart="ListTouchStart"
                @touchmove="ListTouchMove"
                @touchend="ListTouchEnd"
                :data-target="'move-box-' + index"
                @click="enterChat"
                >
                <div class="cu-avatar round lg"
                    :class="item.icon"
                ></div>
                <div class="content">
                    <div class="text-grey">{{item.name}}</div>
                    <div class="text-gray text-sm">
                    <text class=" margin-right-xs">{{item.desc}}</text>
                    </div>
                </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="通讯录">
            <div class="cu-list menu bg-white">
                <div class="cu-item arrow solid-bottom">
                    <div class="content">
                    <text class="text-black text-df text-bold">通讯录</text>
                    </div>
                    <div class="action">
						<text class="text-grey text-sm">未启用</text>
					</div>
                </div>
            </div>
        </van-tab>
        <van-tab title="公众号">
            
            <div class="cu-list menu-avatar bg-white margin-fix" v-for="(val,key) in accounts"  :key="key">
              <div class="padding">{{val.index}}</div>
                <div class="cu-item "
                :class="modalName=='move-box-'+ index?'move-cur':''"
                v-for="(item,index) in val.content"
                :key="index"
                :data-target="'move-box-' + index"
                @click="enterChat"
                >
                <div class="cu-avatar round "
                     :class="item.icon"
                ></div>
                <div class="content">
                    <div class="text-grey">{{item.text}} <span :class="item.auth"></span>
                    </div>
                </div>
                </div>
            </div>
        </van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      activeNames: [],
      device: [
        {
          'icon': 'iconfont icon-diannao1',
          'name': '我的电脑',
          'desc': '[离线]无需数据线,手机轻松传文件到电脑'
        },
        {
          'icon': 'iconfont icon-device',
          'name': '发现新设备',
          'desc': '搜索附近的设备,用QQ轻松连接设备'
        }
      ],
      accounts: [
        {
          'index': 'H',
          'content': [
            {
              'icon': 'iconfont icon-dong',
              'text': '好友动态'
            }
          ]
        },
        {
          'index': 'Q',
          'content': [
            {
              'icon': 'iconfont icon-qq',
              'text': 'QQ团队',
              'auth': 'iconfont icon-renzheng'
            },
            {
              'icon': 'iconfont icon-musics',
              'text': 'QQ音乐',
              'auth': 'iconfont icon-renzheng'
            },
            {
              'icon': 'iconfont icon-yundong',
              'text': 'QQ运动',
              'auth': 'iconfont icon-renzheng'
            },
            {
              'icon': 'iconfont icon-youxi',
              'text': 'QQ运动',
              'auth': 'iconfont icon-renzheng'
            }
          ]
        },
        {
          'index': 'T',
          'content': [
            {
              'icon': 'iconfont icon-tengxunketang',
              'text': '腾讯课堂',
              'auth': 'iconfont icon-renzheng'
            }
          ]
        },
        {
          'index': 'Y',
          'content': [
            {
              'icon': 'iconfont icon-yingyong',
              'text': '应用中心',
              'auth': 'iconfont icon-renzheng'
            }
          ]
        }
      ],
      friendList: [
        {
          'group': '特别关心',
          'groupId': 1,
          'list': [
            {
              'avatar': '',
              'nickname': '小名',
              'desc': '小了白了兔,白了白又白~'
            }
          ]
        },
        {
          'group': '我的好友',
          'groupId': 2,
          'list': [
            {
              'avatar': '',
              'nickname': '小王',
              'desc': '123,木头人不许说话不许动'
            },
            {
              'avatar': '',
              'nickname': '小李',
              'desc': '学无止境,谦卑而行'
            },
            {
              'avatar': '',
              'nickname': '小赵',
              'desc': '学无止境,谦卑而行'
            }
          ]
        },
        {
          'group': '朋友',
          'groupId': 3,
          'list': [
            {
              'avatar': '',
              'nickname': '小王',
              'desc': '学无止境,谦卑而行'
            }
          ]
        },
        {
          'group': '同学',
          'groupId': 4,
          'list': [
            {
              'avatar': '',
              'nickname': '小王',
              'desc': '学无止境,谦卑而行'
            }
          ]
        }
      ]
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

.icon-diannao1, .icon-device{
  color:#12b7f4;
  font-size: 48px;
}

.cu-avatar {
  background-color: #fff;
}

.icon-dong, 
.icon-tengxunketang,
.icon-yundong, 
.icon-youxi,
.icon-musics,
.icon-qq,
.icon-yingyong {
  font-size: 32px;
}
.icon-dong,
.icon-yingyong {
  color: #ffd700;
}

.icon-renzheng {
  color: #ff9800;
}

.icon-youxi,
.icon-tengxunketang,
.icon-yundong,
.icon-qq {
  color: #00aeef;
}

.icon-musics {
  color: #31c27c;
}

.margin-fix {
  margin-top:-15px;
}


</style>

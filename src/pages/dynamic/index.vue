<template>
  <div>
    <div class="flex  p-xs margin-bottom-sm bg-white mb-sm">
      <div class="flex-sub text-center padding-sm margin-xs radius iconfont icon-dong">
          <div class="text-lg padding text-black">好友动态</div>
      </div>
      <div class="flex-sub text-center padding-sm margin-xs radius iconfont icon-fujin">
          <div class="text-lg padding text-black">附近</div>
      </div>
      <div class="flex-sub text-center padding-sm margin-xs radius iconfont icon-shouqbula">
          <div class="text-lg padding text-black">兴趣部落</div>
      </div>
    </div>

    <div class="cu-list menu bg-white">
        <div class="cu-item arrow solid-bottom" >
            <div class="content">
                <text class="iconfont icon-youxi margin-right-lg"></text>
                <text class="text-black text-df text-bold"> 游戏</text>
            </div>
        </div>
        <div class="cu-item arrow solid-bottom" >
            <div class="content">
                <text class="iconfont icon-musics margin-right-lg"></text>
                <text class="text-black text-df text-bold">音乐</text>
            </div>
        </div>
        <div class="cu-item arrow solid-bottom" >
            <div class="content">
                <text class=" iconfont icon-shexiangji1 margin-right-lg "></text>
                <text class="text-black text-df text-bold">直播</text>
            </div>
        </div>
    </div>

    <div class="cu-list menu bg-white">
        <div class="cu-item arrow solid-bottom" >
            <div class="content">
                <text class="iconfont icon-qiqiu margin-right-lg"></text>
                <text class="text-black text-df text-bold"> 同城服务</text>
            </div>
        </div>
        <div class="cu-item arrow solid-bottom" >
            <div class="content">
                <text class="iconfont icon-yundong margin-right-lg"></text>
                <text class="text-black text-df text-bold">运动</text>
            </div>
        </div>
        <div class="cu-item arrow solid-bottom" >
            <div class="content">
                <text class="iconfont icon-tengxunketang margin-right-lg"></text>
                <text class="text-black text-df text-bold">腾讯课堂</text>
            </div>
        </div>
    </div>
  </div>
</template>



<style scoped>

/** 
 *字体图标 
 */

/** 第一部分 **/
.icon-dong, .icon-fujin, .icon-shouqbula {
    font-size: 36px;
}
.icon-dong, .icon-shouqbula {
    color: #FFD700;
}
.icon-fujin {
    color:#f36666;
}

/** 第二部分 **/
.icon-tengxunketang, .icon-musics, .icon-yundong {
    font-size: 23px;
}

.icon-youxi, .icon-qiqiu, .icon-shexiangji1 {
    font-size: 20px;
}

.icon-youxi, .icon-tengxunketang, .icon-yundong {
    color: #00aeef;
}
.icon-musics {
    color: #31c27c;
}
.icon-shexiangji1 {
    color: #f64e78;
    display: inline-block;
    -moz-transform:scaleX(-1);
    -webkit-transform:scaleX(-1);
    -o-transform:scaleX(-1);
    transform:scaleX(-1);
}
.icon-qiqiu {
    color:#f0664b;
    display: inline-block;
    -moz-transform:scaleX(-1);
    -webkit-transform:scaleX(-1);
    -o-transform:scaleX(-1);
    transform:scaleX(-1);
}




</style>

<template>
  <div class="m-hmhot">
    <div class="hotop">
      <div class="hotopct">
        <div class="u-hmsprt hoticon"></div>
        <div class="hottime">更新日期：09月16日</div>
      </div>
    </div>
    <SongList :data="data"></SongList>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { ref, onMounted } from 'vue'
import SongList from '../common/SongList.vue';

const data = ref<any>([])
onMounted(() => {
  request('/playlist/detail', {
    method: 'POST'
  }).then((res: any) => {
    data.value = res.playlist.tracks
    // console.log('request:', res.playlist.tracks)
  })
})
</script>

<style scoped>
.m-hmhot .hotop {
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
  background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252…=) no-repeat;
  background-size: contain;
}

.m-hmhot .hotopct {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  padding-left: 20px;
  box-sizing: border-box;
}

.m-hmhot .hoticon {
  width: 142px;
  height: 67px;
  background-position: -24px -30px;
}

.u-hmsprt {
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
  background-size: 166px 97px;
}

.u-hmsprt {
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
  background-size: 166px 97px;
}

.m-hmhot .hottime {
  margin-top: 10px;
  color: hsla(0, 0%, 100%, 0.8);
  font-size: 12px;
  transform: scale(0.91);
  transform-origin: left top;
}
</style>

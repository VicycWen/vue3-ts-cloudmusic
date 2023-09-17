<template>
  <div>
    <van-tabs class="tabs" v-model:active="active">
      <van-tab title="推荐音乐"
        >
        <div class="m-homeremd">
          <Playlist></Playlist>
          <Songs></Songs>
        </div>
      </van-tab>
      <van-tab title="热歌榜"><HotSong></HotSong></van-tab>
      <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Tab, Tabs } from 'vant'
import { defineComponent } from 'vue'
import Playlist from '@/components/recommend/Playlist.vue'
import Songs from '@/components/recommend/Songs.vue'
import HotSong from '@/components/toplist/HotSong.vue'

export default defineComponent({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Playlist: Playlist,
    Songs: Songs
  },
  setup() {
    return {
      active: 0
    }
  }
})
</script>

<style scoped>
.tabs {
  --van-tab-font-size: 15px;
  --van-tab-active-text-color: #dd001b;
  --van-font-bold: 400;
  --van-tabs-bottom-bar-color: #dd001b;
}
.m-homeremd {
    padding-top: 20px;
}
</style>

<template>
  <div>
    <van-tabs class="tabs" v-model:active="active">
      <van-tab title="推荐音乐"
        >
        <div class="m-homeremd">
          <Playlist></Playlist>
        </div>
      </van-tab>
      <van-tab title="热歌榜">热歌榜</van-tab>
      <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Tab, Tabs } from 'vant'
import { defineComponent } from 'vue'
import Playlist from '@/components/recommend/Playlist.vue'

export default defineComponent({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
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

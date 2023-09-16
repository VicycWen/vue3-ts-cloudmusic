<template>
  <h2 class="remd_tl">最新音乐</h2>
  <div class="remd_newsg">
    <div class="m-sglst">
      <a class="m-sgitem" v-for="item in data" :href="`//music.163.com/m/song?id=${item?.song?.id}`">
        <div class="sgfr f-bd f-bd-btm">
          <div class="sgchfl">
            <div class="f-thide sgtl">{{ item.name }}</div>
            <div class="f-thide sginfo">
              <i class="u-hmsprt sghot"></i>{{ item?.song?.album?.artists?.[0]?.name }} -
              {{ item.song.name }}
            </div>
          </div>
          <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { ref, onMounted } from 'vue'
const data = ref<any>([])
onMounted(() => {
  request('/newsong', {
    method: 'POST'
  }).then((res) => {
    data.value = res.result
    // console.log('request:', res)
  })
})
</script>

<style scoped>
.m-sglst {
  position: relative;
}

.m-sgitem,
.m-sgitem .sgfl {
  display: flex;
}

.m-sgitem {
  padding-left: 10px;
}

.m-sgitem .sgchfl,
.m-sgitem .sgfr {
  flex: 1 1 auto;
}

.m-sgitem .sgfr {
  display: flex;
  position: relative;
}

.f-bd {
  position: relative;
}

.m-sgitem .sgchfl {
  padding: 6px 0;
  width: 0;
}

.m-sgitem .sgchfl,
.m-sgitem .sgfr {
  flex: 1 1 auto;
}

.m-sgitem .sgtl {
  font-size: 17px;
}

.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
}

.m-sgitem .sginfo {
  font-size: 12px;
  color: #888;
}

.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
}

.m-sgitem .sghot {
  display: inline-block;
  width: 12px;
  height: 8px;
  margin-right: 4px;
}

.u-hmsprt {
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
  background-size: 166px 97px;
}

.u-hmsprt {
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
  background-size: 166px 97px;
}

.m-sgitem .sgchfr {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 10px;
}

.m-sgitem .sgchply {
  display: inline-block;
  width: 22px;
  height: 22px;
  background-position: -24px 0;
}

.u-hmsprt {
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
  background-size: 166px 97px;
}

.u-hmsprt {
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
  background-size: 166px 97px;
}
</style>

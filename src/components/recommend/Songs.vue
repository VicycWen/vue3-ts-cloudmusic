<template>
  <h2 class="remd_tl">最新音乐</h2>
  <div class="remd_newsg">
    <div class="m-sglst">
      <RouterLink
        class="m-sgitem"
        v-for="item in data"
        :to="`/play?id=${item?.song?.id || item?.id}`"
      >
        <div class="sgfr f-bd f-bd-btm">
          <div class="sgchfl">
            <div class="f-thide sgtl">{{ item?.name }}</div>
            <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>{{ getAuthor(item) }}</div>
          </div>
          <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { ref, onMounted, onUpdated } from 'vue'
import { RouterLink } from 'vue-router'

interface IArtists {
  id: number
  name: string
  picUrl: string
}
interface IAlbum {
  id: number
  name: string
  picUrl: string
  artists: IArtists[]
}

interface ISong {
  id: number
  name: string
  picUrl: string
  alias: string[]
  artists: IArtists[]
  album?: IAlbum
}

interface INewSongItem {
  id: number
  name: string
  picUrl: string
  song?: ISong
  album?: IAlbum
  alias?: string[]
}

const data = ref<INewSongItem[]>([])
function getAuthor(item: INewSongItem) {
  let author = item?.song?.album?.artists?.[0]?.name
  let alias = item?.song?.alias?.[0]
  if (!author) {
    author = item?.album?.artists?.[0]?.name
    alias = item?.alias?.[0]
  }
  if (author && alias) {
    return author + ' - ' + alias
  } else if (author) {
    return author
  } else if (alias) {
    return alias
  }
}

const fetchData = (url: string, defaultUrl: string, defaultMock = true) => {
  request(url, {
    method: 'GET'
  })
    .then((res: any) => {
      data.value = res.data || res.result
      if ((res.code !== 200 || !res?.data?.length) && defaultMock) {
        defaultUrl && fetchData(defaultUrl, '', false)
      }
    })
    .catch(() => {
      defaultUrl && fetchData(defaultUrl, '', false)
    })
}
onMounted(() => {
  fetchData('/top/song', '/newsong')
  // fetchData('/newsong','',false)
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

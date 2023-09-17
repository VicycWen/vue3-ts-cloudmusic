<template>
    <div class="m-hmhot">
        <div class="hotop">
            <div class="hotopct">
                <div class="u-hmsprt hoticon"></div>
                <div class="hottime">更新日期：09月16日</div>
            </div>
        </div>
        <div class="hotcont">
            <div class="m-sglst">
                    <RouterLink class="m-sgitem" v-for="(item, idx) in data" :key="item.id" :to="`/play?id=${item.id}`">
                    <div class="sgfl sgfl-cred">{{ idx < 9 ? '0' + (idx + 1) : idx + 1 }}</div>
                    <div class="sgfr f-bd f-bd-btm">
                        <div class="sgchfl">
                            <div class="f-thide sgtl">{{ item.name }}</div>
                            <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>{{ item?.ar?.[0]?.name }} - {{ item?.al?.name }}</div>
                        </div>
                        <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
const data = ref<any>([])
onMounted(() => {
  request('/playlist/detail', {
    method: 'POST'
  }).then((res: any) => {
    data.value = res.playlist.tracks;
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

.m-sgitem .sgfl-cred {
    color: #df3436 !important;
}

.m-sgitem .sgfl {
    align-items: center;
    justify-content: center;
    width: 40px;
    font-size: 17px;
    color: #999;
    margin-left: -10px;
}

.m-sgitem,
.m-sgitem .sgfl {
    display: flex;
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
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
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
    display: flex;
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
}</style>

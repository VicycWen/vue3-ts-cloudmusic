<template>
    <div>
        <section class="official_pylst_header">
            <div class="ofplheader_bg" :style="
          `background-image: url(${data?.playlist?.backgroundCoverUrl + '?param=170y170'})`
        "></div>
            <div class="ofplheader_mask"></div>
            <div class="ofplheader_wrap">
                <div class="ofplheader_name f-brk f-thide2">{{ data?.playlist?.name }}</div>
                <div>
                    <div class="ofplheader_tag">{{ data?.playlist?.updateFrequency }}</div>
                </div>
                <div>
                    <div class="ofplheader_content f-brk f-thide3">
                        <span v-for="desc in description"><i>{{ desc }}</i><br/></span>
                        <span class="arrow"></span>
                    </div>
                    <div class="overflow" display="none"></div>
                </div>
            </div>
        </section>
        <h3 class="u-smtitle">歌曲列表</h3>
        <SongList :data="data?.playlist?.tracks" :isGray="true"></SongList>
    </div>
</template>

<script setup lang="ts">
import SongList from '@/components/common/SongList.vue'
import request from '@/utils/request'
import { ref, onMounted, watch } from 'vue'

const data = ref<any>([]);
let description = []
onMounted(() => {
    request('/playlist/detail?id=3136952023', {
        method: 'POST'
    }).then((res: any) => {
        data.value = res
        description = res?.playlist?.description?.split('\n');
        // console.log('request:', res.playlist.tracks)
    })
})
</script>

<style scoped>
section {
    display: block;
}

.official_pylst_header {
    position: relative;
    padding: 40px 20px;
    overflow: hidden;
    height: 130px;
}

.official_pylst_header .ofplheader_bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}

.official_pylst_header .ofplheader_mask {
    z-index: 10;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: .25;
    background: #000;
}

.official_pylst_header .ofplheader_wrap {
    position: relative;
    z-index: 100;
    color: #fff;
}

.official_pylst_header .ofplheader_wrap .ofplheader_name {
    font-size: 18px;
}

.f-thide2,
.f-thide3,
.f-thide4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.f-brk {
    word-wrap: break-word;
    white-space: normal;
}

.official_pylst_header .ofplheader_wrap .ofplheader_tag {
    padding-left: 3px;
    padding-right: 3px;
    margin-top: 10px;
    display: inline-block;
    background-color: hsla(0, 0%, 100%, .2);
    border-radius: 2px;
    font-size: 10px;
    color: hsla(0, 0%, 100%, .6);
}

.official_pylst_header .ofplheader_wrap .ofplheader_content {
    margin-top: 20px;
    font-size: 14px;
    color: hsla(0, 0%, 100%, .8);
}



.f-thide2,
.f-thide3,
.f-thide4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.f-thide3 {
    -webkit-line-clamp: 3;
}

.f-brk {
    word-wrap: break-word;
    white-space: normal;
}

.u-smtitle {
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
}

.official_pylst_header .ofplheader_wrap .arrow,
.official_pylst_header .ofplheader_wrap .overflow:not([display=none]) {
    width: .4em;
    height: .4em;
    border-top: 1px solid hsla(0, 0%, 100%, .8);
    border-right: 1px solid hsla(0, 0%, 100%, .8);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.official_pylst_header .ofplheader_wrap .arrow {
    display: inline-block;
    margin-bottom: 1px;
}</style>

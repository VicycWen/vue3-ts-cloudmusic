<template>
  <div class="hotcont">
    <div class="m-sglst">
      <RouterLink
        class="m-sgitem"
        :class="{ 'm-sgitem-gray': isGray }"
        v-for="(item, idx) in data"
        :key="item.id"
        :to="`/play?id=${item.id}`"
      >
        <div class="sgfl sgfl-cred" v-if="!isGray">{{ idx < 9 ? '0' + (idx + 1) : idx + 1 }}</div>
        <div class="sgfl sgfl-cred" v-else>{{ idx + 1 }}</div>
        <div class="sgfr f-bd f-bd-btm">
          <div class="sgchfl">
            <div class="f-thide sgtl">{{ item.name }}</div>
            <div class="f-thide sginfo">
              <i class="u-hmsprt sghot" v-if="!isGray"></i>{{ item?.ar?.[0]?.name }} -
              {{ item?.al?.name }}
            </div>
          </div>
          <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'
import type { PropType } from 'vue'

type SongList = { id: string; name: string; ar: { name: string }[]; al: { name: string } }[]
defineProps({
  data: Array as PropType<SongList>,
  isGray: {
    type: Boolean,
    required: false,
    default: false
  }
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

.m-sgitem .sgfl {
  align-items: center;
  justify-content: center;
  width: 40px;
  font-size: 17px;
  color: #999;
  margin-left: -10px;
}

.m-sgitem:nth-child(-n + 3) .sgfl-cred {
  color: #df3436;
}
.m-sgitem-gray:nth-child(-n + 3) .sgfl-cred {
  color: #999;
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
.m-sgitem-gray .sgchfl {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.m-sgitem-gray .sgchfr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
}
</style>

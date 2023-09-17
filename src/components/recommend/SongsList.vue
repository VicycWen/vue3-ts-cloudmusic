<template>
  <h2 class="remd_tl">编辑推荐</h2>
  <div class="remd_songs">
    <div class="remd_ul" v-if="!apiAvailable.available">
      <RouterLink class="remd_li" to="/list?id=7692044224">
        <div class="remd_img">
          <img class="u-img"
            src="https://p1.music.126.net/4WfHQQTaKu7pPtPrx3_g3g==/109951168722344005.jpg?imageView=1&type=webp&thumbnail=253x0" />
          <span class="u-earp remd_lnum">171.6万</span>
        </div>
        <p class="remd_text">全网超燃的英文歌曲BGM</p>
      </RouterLink>
      <RouterLink class="remd_li" to="/list?id=7360197193">
        <div class="remd_img">
          <img class="u-img"
            src="http://p2.music.126.net/9dcChKthkDbtqQcOChbhaw==/109951167226161428.jpg?imageView=1&amp;thumbnail=80x0" />
          <span class="u-earp remd_lnum">119.4万</span>
        </div>
        <p class="remd_text">华语 | 我试着把孤独藏进耳机 用回忆代替</p>
      </RouterLink>
      <RouterLink class="remd_li" to="/list?id=7723266718">
        <div class="remd_img">
          <img class="u-img"
            src="http://p2.music.126.net/KKEM3j8DJYV9OgDojBejgg==/109951168253523533.jpg?imageView=1&amp;thumbnail=80x0" />
          <span class="u-earp remd_lnum">93.2万</span>
        </div>
        <p class="remd_text">2023年网易云热搜最好听的歌曲(持续持续)</p>
      </RouterLink>
      <RouterLink class="remd_li" to="/list?id=6804726357">
        <div class="remd_img">
          <img class="u-img"
            src="http://p2.music.126.net/kOOW_Pk6QEhP8DB_HhSToQ==/109951166081924955.jpg?imageView=1&amp;thumbnail=80x0" />
          <span class="u-earp remd_lnum">221.9万</span>
        </div>
        <p class="remd_text">开心到爆炸的歌曲</p>
      </RouterLink>
      <RouterLink class="remd_li" to="/list?id=2829883282">
        <div class="remd_img">
          <img class="u-img"
            src="http://p2.music.126.net/elYaXOurgT2bxbrosS6AUw==/109951165665031973.jpg?imageView=1&amp;thumbnail=80x0" />
          <span class="u-earp remd_lnum">17.7亿</span>
        </div>
        <p class="remd_text">李行亮的歌,总令人心动|华语私人雷达</p>
      </RouterLink>
      <RouterLink class="remd_li" to="/list?id=6893864535">
        <div class="remd_img">
          <img class="u-img"
            src="http://p2.music.126.net/QzjUExiYP_g4_HE8j7IPFA==/109951166236920018.jpg?imageView=1&amp;thumbnail=80x0" />
          <span class="u-earp remd_lnum">229.5万</span>
        </div>
        <p class="remd_text">中文R &amp;B/.喜欢慵懒的感觉</p>
      </RouterLink>
    </div>
    <div class="remd_ul" v-else>
      <RouterLink class="remd_li" v-for="item in data" :key="item.id" :to="`/list?id=${item.id}`">
        <div class="remd_img">
          <img class="u-img" :src="item.picUrl" />
          <span class="u-earp remd_lnum">{{ formatPlayCount(item.playCount) }}</span>
        </div>
        <p class="remd_text">{{ item.name }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import request from '@/utils/request'
import { formatPlayCount } from '@/utils/index'
import { useApiAvailable } from "@/stores/apiAvailable"

const data = ref([])
const apiAvailable = useApiAvailable()
onMounted(() => {
  request('/personalized?limit=6', { method: 'GET' }).then((res: any) => {
    // console.log('personalized:', res)
    if (res?.code == 200 && res?.result?.length) {
      apiAvailable.setApiAvailable(true);
      data.value = res.result
    }
  })
})
</script>

<style lang="scss">
.m-homeremd .remd_tl {
  position: relative;
  padding-left: 9px;
  margin-bottom: 14px;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
}

.m-homeremd .remd_tl:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -9px;
  width: 2px;
  height: 16px;
  background-color: #d33a31;
}

.m-homeremd .remd_songs {
  position: relative;
  padding-bottom: 24px;
}

.m-homeremd .remd_ul {
  display: flex;
  flex-wrap: wrap;
}

.m-homeremd .remd_li:first-child {
  padding-left: 0;
  padding-right: 2px;
}

.m-homeremd .remd_li {
  display: block;
  margin-bottom: 16px;
  float: left;
  width: 33.3%;
  padding-left: 1px;
  padding-right: 1px;
  box-sizing: border-box;
}

.m-homeremd .remd_li {
  flex: none;
}

.m-homeremd .remd_img {
  position: relative;
  padding-bottom: 100%;
}

.m-homeremd .remd_img > .u-img {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}

.u-img {
  width: 100%;
  vertical-align: middle;
}

.m-homeremd .remd_lnum {
  position: absolute;
  right: 5px;
  top: 2px;
  z-index: 3;
  padding-left: 13px;
  color: #fff;
  font-size: 12px;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: 11px 10px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);
}

.u-earp {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);
}

.u-earp {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+);
}

.m-homeremd .remd_text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 6px 2px 0 6px;
  min-height: 30px;
  line-height: 1.2;
  font-size: 13px;
}
</style>

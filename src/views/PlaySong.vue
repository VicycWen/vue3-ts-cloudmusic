<template>
  <div>
    <iframe
      class="song-detail"
      :src="`https://music.163.com/m/song?id=${id}`"
      ref="iframe"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router' //1.先在需要跳转的页面引入useRouter
const { query, params } = useRoute()
// console.log('query:', query, params)
const id = ref(query.id)
// const iframe = ref(null)

// onMounted(() => {
//   console.log('onMounted')

//   if (iframe.value) {
//     iframe.value.addEventListener('load', () => {
//       console.log('iframe load')
//       if (iframe.value) {
//             iframe.value.style.height = '200px'
//     }
//     })
//   }
// })
</script>

<style scoped>
body {
    background-color: #fcfcfd;
}
.song-detail {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 2vh 0;
  background-color: #fcfcfd;
}
.u-lderror {
  box-sizing: border-box;
}
</style>

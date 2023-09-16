// import Mock from 'mockjs'
import newSong from './data/newSong'
import { Mock,mockFetch } from 'mockjs-fetch';
// mockFetch(Mock);

// mock的配置
Mock.setup({
  // 随机延时50-1000毫秒
  timeout: '50-1000',
//   debug: true
})

Mock.mock(/\/newsong/, () => {
  return newSong
})

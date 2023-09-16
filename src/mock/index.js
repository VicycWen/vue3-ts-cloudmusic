
import { Mock,mockFetch } from 'mockjs-fetch';
import newSong from './data/newSong'
import hotSong from './data/hotSong';

// mock的配置
Mock.setup({
  // 随机延时50-1000毫秒
  timeout: '50-1000',
//   debug: true
})

Mock.mock(/\/newsong/, () => {
  return newSong
})
Mock.mock(/\/playlist\/detail/, () => {
    return hotSong
  })

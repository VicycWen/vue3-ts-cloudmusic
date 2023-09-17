import { Mock, mockFetch } from 'mockjs-fetch'
import newSong from './data/newSong'
import hotSong from './data/hotSong'
import playlistDetail from './data/playlistDetail'

// mock的配置
Mock.setup({
  // 随机延时50-1000毫秒
  timeout: '50-1000'
  //   debug: true
})

Mock.mock(/\/newsong/, () => {
  return newSong
})
Mock.mock(/\/mock\/playlist\/detail/, ({params,url,...rest}) => {
  let id;
  url.split('?')?.[1]?.split('&')?.map(item => {
    const [key, value] = item.split('=')
    if (key === 'id') {
      id = value
    }
  })
  // console.log(params,url,rest,id);
  const data = playlistDetail[id]
  return data || hotSong
})

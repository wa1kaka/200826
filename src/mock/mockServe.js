import Mock from 'mockjs'
import floors from './floors.json'
import banner from './banner.json'
// import search from './search.json'

Mock.mock('/mock/floors',{code:200,data:floors})

Mock.mock('/mock/banner',{code:200,data:banner})

// Mock.mock('/mock/list',{code:200,data:search})
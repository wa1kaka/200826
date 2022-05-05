<template>
  <div class="home">        
        <!-- 商品分类导航 -->
        <TypeNav/>

        <!--列表-->
       <ListContainer></ListContainer>

        <!--今日推荐-->
        <TodayRecommend></TodayRecommend>

        <!-- 商品排行 -->
        <Rank></Rank>

        <!-- 猜你喜欢 -->
        <Like></Like>

        <!--楼层-->
        <Floor v-for="floor in floors" :key="floor.id" :floor='floor'></Floor>

        <!--商标-->
        <Brand></Brand>
    </div>
</template>

<script>
// import TypeNav from '../../component/TypeNav'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
    
  name: 'Home',
  
  mounted(){
      this.$store.dispatch('getFloorsList')
    //   this.$store.dispatch('getBannerList')
  },
  components:{     
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
  },
  computed:{
      ...mapState({
          floors:state=>state.home.floors
      }),
    //   ...mapState({
    //       banners:state=>state.home.bannerList
    //   })
  }
}
</script>

<style lang="less" scoped>
  .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
           margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

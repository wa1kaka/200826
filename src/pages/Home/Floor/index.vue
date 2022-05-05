<template>
  <div> <div class="floor">
            <div class="py-container">
                <div class="title clearfix">
                    <h3 class="fl">{{floor.name}}</h3>
                    <div class="fr">
                        <ul class="nav-tabs clearfix">
                            <li class="active" v-for="nav in floor.navList" :key="nav.index">
                                <a href="#tab1" data-toggle="tab">{{nav.text}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane">
                        <div class="floor-1">
                            <div class="blockgary">
                                <ul class="jd-list">
                                    <li v-for="keyword in floor.keywords" :key="keyword.index">{{keyword}}</li>                               
                                </ul>
                                <img :src="floor.imgUrl" />
                            </div>
                            <div class="floorBanner">   
                                 <swiper  :options="swiperOptions">
                                    <swiper-slide><img src="./images/home/floor-1-b01.png"></swiper-slide>
                                    <swiper-slide><img src="./images/home/floor-1-b02.png"></swiper-slide>
                                    <swiper-slide><img src="./images/home/floor-1-b03.png"></swiper-slide>
                                    <div class="swiper-pagination" slot="pagination"></div>
                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                    <div class="swiper-button-next" slot="button-next"></div>
                                </swiper>




<!-- 
                               <div class="swiper-container" id="floor1Swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b01.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b02.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/home/floor-1-b03.png">
                                        </div>
                                    </div> -->
                                   <!-- 如果需要分页器 -->
                                    <!-- <div class="swiper-pagination"></div> -->

                                    <!-- 如果需要导航按钮 -->
                                    <!-- <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div> -->
                                <!-- </div> -->
                            </div> 
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-2.png" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-3.png" />
                                </div>
                            </div>
                            <div class="split center">
                                <img src="./images/home/floor-1-4.png" />
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-5.png" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img src="./images/home/floor-1-6.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

  
export default {
  name: "Floor",
  props: { floor: Object },
  data(){
      return{
             swiperOptions:{
                    loop: true, // 循环模式选项  
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                    
                    // 如果需要前进后退按钮
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    },
                
                    } 
                }
        }
      }
  


     
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>

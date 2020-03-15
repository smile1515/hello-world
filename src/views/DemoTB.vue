<template>
    <!-- 淘宝首页 -->
    <div class="view">
        <div class="view-header">
            <span class="icon iconfont vue-iconiconfonttaobao"></span>
            <a class="placeholder">
                <span class="text">寻找宝贝店铺</span>
            </a>
        </div>
        <div class="view-content">
            <div class="slider" style="height: 120px;">
                <div class="banner slider-wrap" style="position: relative;width: 100%;height: 100%;overflow: hidden;line-height: 0;">
                    <!-- <div class="slider-item" style="">
                        <a href="javascript:void(0)">
                            <img src=""/>
                        </a>
                    </div> -->
                </div>
            </div>
            <div class="page-menu">
                <div class="menu-bg"></div>
                <div class="menu-wrap">
                    <div class="menu-item" v-for="(menu,index) in menuList" v-bind:key="index">
                        <a href="javascript:void(0)" >
                            <img :src="menu.imgSrc"/>
                            <p>{{menu.name}}</p>
                        </a>
                        <a href="javascript:void(0)" >
                            <img :src="menu.imgSrc"/>
                            <p>{{menu.name}}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="recommend">
                <div class="recommend-container">
                    <div class="recommend-hd">
                        <img src="../assets/image/recommend_bg.png" />
                    </div>
                    <div class="recommend-item" v-for="(recommend,index) in recommendList" v-bind:key="index">
                        <a href="javascript:void(0)">
                            <img :src="recommend.img"/>
                        </a>
                        <a class="recommend-info" href="javascript:void(0)">
                            <div class="recommend-title">{{recommend.name}}</div>
                            <div class="recommend-price-box">
                                <span class="recommend-sign recommend-h">{{recommend.sign}}</span>
                                <span class="recommend-price">{{recommend.price}}</span>
                                <span class="recommend-payed">{{recommend.payed}}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="toolbar-container">
                <span class="tab">
                    <span class="icon iconfont vue-iconfanhuishouye"></span>
                    <p class="text">首页</p>
                </span>
                <span class="tab">
                    <span class="icon iconfont vue-iconwujieshejishigongju-"></span>
                    <p class="text">购物车</p>
                </span>
                <span class="tab">
                    <span class="icon iconfont vue-icondingdanliebiao"></span>
                    <p class="text">订单列表</p>
                </span>
                <span class="tab">
                    <span class="icon iconfont vue-iconfanhuishouye"></span>
                    <p class="text">我的淘宝</p>
                </span>
                <span class="tab">
                    <span class="icon iconfont vue-icongengduo"></span>
                    <p class="text">更多</p>
                </span>
            </div>
        </div>
        <div class="view-foter"></div>
    </div>
</template>

<script>
    import banner from '../plugins/banner.js'
    import img1 from '../assets/image/banner01.jpg'
    import img2 from '../assets/image/banner02.jpg'
    import img3 from '../assets/image/banner05.jpg'
    import img4 from '../assets/image/banner06.jpg'
    import menu01 from '../assets/image/menu01.png'
    import menu02 from '../assets/image/menu02.png'
    import menu03 from '../assets/image/menu03.png'
    import menu04 from '../assets/image/menu04.png'
    import recommend01 from '../assets/image/recommend01.webp'
    export default {
        name:'fontSize',
        created() {
            document.title = 'clientWidth rem';
        },
        data(){
            return{                
                menuList:[{
                    imgSrc:menu01,
                    name:'天猫新品'
                },{
                    imgSrc:menu02,
                    name:'充值中心'
                },{
                    imgSrc:menu03,
                    name:'今日爆款'
                },{
                    imgSrc:menu04,
                    name:'机票酒店'
                },{
                    imgSrc:menu01,
                    name:'天猫新品'
                },{
                    imgSrc:menu02,
                    name:'充值中心'
                },{
                    imgSrc:menu03,
                    name:'今日爆款'
                },{
                    imgSrc:menu04,
                    name:'机票酒店'
                }],
                recommendList:[{
                    img:recommend01,
                    name:'简易电脑桌台式书桌家用简约写字台临时办公桌子特价出租房公寓桌',
                    sign:'￥',
                    price:'104',
                    payed:'1287人已购买',
                },{
                    img:recommend01,
                    name:'简易电脑桌台式书桌家用简约写字台临时办公桌子特价出租房公寓桌',
                    sign:'￥',
                    price:'104',
                    payed:'1287人已购买',
                },{
                    img:recommend01,
                    name:'简易电脑桌台式书桌家用简约写字台临时办公桌子特价出租房公寓桌',
                    sign:'￥',
                    price:'104',
                    payed:'1287人已购买',
                },{
                    img:recommend01,
                    name:'简易电脑桌台式书桌家用简约写字台临时办公桌子特价出租房公寓桌',
                    sign:'￥',
                    price:'104',
                    payed:'1287人已购买',
                }]
            }
        },
        mounted(){
            banner({
                targetEle:'.banner',
                'runTime':3,
                'moveTime':'2',
                'image':[img1,img2,img3,img4],
                'dom-group':'center',
                'auto':'0',
            })
        },
        method:{}
    }
</script>

<style scoped lang="scss">
    $headerColor:rgba(240,224,220,1);
    $headerSize:24px;
    .view {
        padding-top: 37px;
        padding-bottom: 45px;
    }
    .view-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        color:$headerColor;
        background-color: rgba(255,133,42,1);
        display: flex;
        padding: 6px 9px 6px 0;
        .placeholder {
            display:block;
            line-height: 25px;
            background-color: rgba(255,78,34,1);
            flex: 1;
            border-radius: 4px;
            font-size: 13px;
        }
        & > span {
            font-size: $headerSize;
            height: 25px;
            line-height: 25px;
            width: 42px;
            text-align: center;
        }
    }
    .banner-cursor-active{
         background-color:rgb(255, 80, 0);
    }
    .page-menu {
        height: 186px;
        width:100%;
        position: relative;
        margin-top:-10px;
        z-index: 100;
        .menu-bg {
            background-image:url('../assets/image/menu_bg.png');
            height: 10px;
            width: 100%;
            background-size: 100%;
            margin-bottom: -2px;
            background-repeat: no-repeat;
            background-position: center center;
        }
        & > .menu-wrap {
            display: flex;
            flex-direction: row;
            height: 156px;
            width: 100%;
            overflow-x: auto;
            background-color: #fff;
            &::-webkit-scrollbar {
                display: none;
            }
            .menu-item{
                margin-left:11.5px;
                a{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 3px;
                    text-decoration: none;
                    height: 67px;
                    width: 61px;
                    img {
                        height: 48px;
                        width: 61px;
                    }
                    p {
                        font-size: 11px;
                        color: rgba(102,102,102,1);
                    }
                }
            }
        }
    }
    .recommend-container {
        display: -webkit-flex;
        display: flex;
        position: relative;
        box-sizing: border-box;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        place-content: flex-start space-between;
        flex-shrink: 0;
        overflow: hidden;
        -webkit-box-pack: justify;
        -webkit-box-lines: multiple;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0 6.4px;
        background: #f2f2f2;
        padding-bottom: 10.24px;
        .recommend-hd{
           text-align: center;
           padding:10.24px 0;
           width: 100%;
           font-size: 16px;
           line-height: 0;
           img {
               width: 35%;
           }
        }
        .recommend-item {
            display: flex;
            flex-direction: column;
            margin:8px 3px 0 3px;
            width: 48%;
            line-height: 0;
            background-color: #fff;
            img {
                width:100%;
            }
            .recommend-info {
                margin-top: 10px;
                padding:0 8px 5px 8px;
                font-size:12px;
                line-height: 16px;
                .recommend-price-box {
                    padding-top:5px;
                }
                .recommend-sign {
                    color: #ff5500;
                }
                .recommend-price {
                    color: #ff5500;
                    margin-left: 3px;
                    margin-right: 3px;
                }
                .recommend-payed {
                    color: #666;
                }
            }
        }
    }
    .toolbar-container {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1001;
        background-color: #ffffff;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #f8f8f8;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 0 20px;
        padding-top: 2px;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
        .tab {
            display: block;
            text-align: center;
            font-size: 16px;
            .icon {
                font-size: 22px;
                height: 22px;
                line-height: 22px;
            }
            .text {
                font-size: 12px;
                transform: scale(0.83333333);
            }
        }
    }
</style>

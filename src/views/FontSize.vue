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
    export default {
        name:'fontSize',
        created() {
            document.title = 'clientWidth rem';
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
        padding-top: 37px;;
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
</style>

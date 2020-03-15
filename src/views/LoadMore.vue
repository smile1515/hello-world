<template>
    <!-- loadmore -->
    <div class="view">
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
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
        </v-scroll>
    </div>
</template>

<script>
    import Scroll from '../components/scroll.vue'
    import recommend01 from '../assets/image/recommend01.webp'
    export default {
        name:'fontSize',
        created() {
            document.title = 'clientWidth rem';
        },
        components: {
            'v-scroll':Scroll
        },
        data(){
            return{
                counter:1,
                num:15,
                pageStart:0,
                pagEnd:0,
                listData:[],
                downdata:[],
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
            this.getList();
        },
        methods:{
            getList(){
                /* let vm = this;
                    vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
                            vm.listdata = response.data.slice(0,15);
                        }, (response) => {
                            console.log('error',response);
                        }); */
            },
            onRefresh(done) {
                this.getList();
                done()
            },
            onInfinite() {
                /* let vm = this;
                vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
                    vm.counter++;
                    vm.pageEnd = vm.num * vm.counter;
                    vm.pageStart = vm.pageEnd - vm.num;
                    let arr = response.data;
                    let i = vm.pageStart;
                    let end = vm.pageEnd;
                    for(; i<end; i++){
                        let obj ={};
                        obj["name"] = arr[i].name;
                        vm.downdata.push(obj);
                        if((i + 1) >= response.data.length){
                            this.$el.querySelector('.load-more').style.display = 'none';
                                return;
                            }
                    }
                    done() // call done
                }, (response) => {
                    console.log('error',response);
                }); */
            }
        }
    }
</script>

<style scoped lang="scss">
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

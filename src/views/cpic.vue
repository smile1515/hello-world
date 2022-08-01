<template>
    <div>
        <div class="" style="display: none;">
            <cell title="is-link" is-link></cell>
            <cell title="label" label="描述信息"></cell>
            <cell title="value" value="内容"></cell>
            <cell title="to" is-link to="/FilterDemo"></cell>
            <cell title="icon more" icon="more"></cell>
            <cell title="icon back" icon="back"></cell>
            <cell>
                <span>Title-1</span>
                <!-- <span slot="title">Title</span>
                <span slot="icon">Title</span> -->
            </cell>
        </div>
        <div class="index">
            <div class="index-header">
                <div class="header-user">
                    <div class="user-info">
                        <h3 class="font24 bold">Hi,nier</h3>
                        <p class="font12 mt15">你已加入大家庭<span class="bold">100</span>天</p>
                    </div>
                    <div class="user-signin font14">
                        <Badge>签到</Badge>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="header-point">
                        <p>积分 56 去兑换 ></p>
                    </div>
                    <div class="headet-right">
                        <Badge class="mr10">权益礼包领取</Badge>
                        <Badge>一键续保</Badge>
                    </div>
                </div>
            </div>
            <div class="index-news">
                <ul class="news-wrap">
                    <li>家庭购买保险如何挑选？听听专家怎么说，听听专家怎么说太有用</li>
                </ul>
            </div>
            <!-- 常用权益 -->
            <div class="index-right">
                <div class="right-header">
                    <span class="font16 flex1">常用权益</span>
                    <span class="font12">编辑</span>
                </div>   
                <!-- <mt-cell title="标题文字" value="说明文字"></mt-cell> -->
                <div class="right-content">
                    <ul>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">道路救援</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">出险代步车</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">安全停靠</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">代为驾驶</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">安全检测</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">出险代步车</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">安全停靠</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">代为驾驶</div>
                        </li>
                        <li>
                            <div class="image-icon"></div>
                            <div class="label-icon">安全检测</div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 特色活动 -->
            <div class="index-exercire">
                <div class="font16">特色活动</div>
                <div class="exercire-content">
                    <div class="exercire-item"></div>
                </div>
            </div>
            <!-- 车管家 -->
            <div class="index-steward">
                
            </div>
            <!-- 车生活 -->
            <div class="index-life">
                
            </div>
            <div v-html="$xss(testa)"></div>
            <div v-html="testHtml"></div>
            <input v-model="valueB" />
            {{valueB}}
            <div @click="getValueB">获取元素</div>
        </div>
    </div>
</template>

<script>
    import { Cell,Badge } from 'mint-ui'
    // import Vue from 'vue'
    // Vue.component(Cell.name, Cell);
    export default {
        name:'cpic',
        data () {
            return {
                valueB:`alert('12')`,
                testa:'<a onclick=\'alert("xss攻击")\'>链接</a><p>我是一个p标签</p>',
                testHtml:'<p>我是一个p标签</p>'
            }
        },
        components:{
            Cell,
            // Cell[name],
            Badge,
        },
        methods:{
            getValueB () {
                console.log(this.valueB)
            }
        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
    .index-header {
        padding:25px 15px;
        font-size: 0.42rem;
        background-color: #3383dc;
        color: #fff;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 20px;        
        .header-user {
            display: flex;  
            padding-bottom: 0.4rem;
            border-bottom: 1px solid rgba(255,255,255,0.3);
            .user-info {
                flex: 1;
            }
            .user-signin {
                display: inline-block;
                text-align: right;
                margin: auto;
                width: 100px;
                span {
                    background-color: #f0ce91;
                    color: #a87f30;
                    font-size: 0.37rem;
                    // padding: 6px 15px;
                }
            }
        }
        .header-bottom {
            display: flex;
            font-size: 0.32rem;
            padding-top: 0.4rem;
            .header-point{
                flex: 1;
                p {
                    margin: auto;
                }
            }
            .headet-right {
                flex: 2;
                text-align: right;
                span {
                    font-size: 0.32rem;
                    background-color: transparent;
                    color: #fff;
                    border: 1px solid #fff;
                }
            }
        }
    }
    .index-news {
        position: relative;
        padding: 0 15px;
        height: 1.12rem;
        .news-wrap {
            list-style: none;
            position: absolute;
            top: -0.56rem;
            height: 1.12rem;
            left: 15px;
            right: 15px;
            font-size: 0.32rem;
            background-color: #fff;
            padding: 0.27rem;
            border-radius: 5px;
            li {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
            }
        }
    }
    .index-right {
        font-size: 0.37rem;
        padding: 0 15px;
        .right-header {
            display: flex;
            .right-header-left {
                flex: 1;
            }
            .right-header-right {
                width: 100px;
            }
        }
        .right-content {
            ul {
                list-style: none;
                overflow: hidden;
                li {
                    float: left;
                    width: 20%;
                    text-align: center;
                    margin-top: 10px;
                    .image-icon {
                        display: inline-block;
                        width: 42px;
                        height: 42px;
                        border-radius: 50%;
                        background-color: #77b5fe;
                    }
                    .label-icon{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;
                    }
                }
            }
        }
    }
    .exercire-content {
        display: flex;
    }
    .font12 {
        font-size: 0.32rem;
    }
    .font14 {
        font-size: 0.37rem;
    }
    .font16 {
        font-size: 0.42rem;
    }
    .font24 {
        font-size: 0.64rem;
    }
    .font32 {
        font-size: 0.84rem;
    }
    .bold {
        font-weight: bolder;
    }
    .mt15 {
        margin-top: 0.4rem;
    }
    .mr10 {
        margin-right: 0.27rem;
    }
    .flex1 {
        flex: 1;
    }
</style>

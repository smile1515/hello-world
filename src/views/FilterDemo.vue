<template>
    <div style="font-size: 16px;">
        <h3>组件内过滤器</h3>
        {{ msg | toUpperCase }}
        <h3>全局过滤器</h3>
        {{ msg | capitalize }}
        <h3>v-for 指令 数组</h3>
        <div v-for="item in list" :key="item" ref="child">
            {{item}}
        </div>
        <h3>v-for 指令 对象</h3>
        <div v-for="(value, name) in object" :key="name">
            {{name}}:{{value}}<br/>
        </div>
        <input type="text" ref="input"><span @click="setValue">ref</span>
        <div style="cursor: pointer;" @click="gotoVuex">gotoVuex</div>
        <h3></h3>
        <div v-html="unescape(vHtmlData)"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import '../utils/filter'
    export default {
        name:'FilterDemo',
        data () {
            return {
                'msg':'hello',
                'money':10000,
                'list':['苹果','香蕉','葡萄','猕猴桃'],
                'object':{
                    'title':'HOW to do lists in vue',
                    'author': 'Jane Doe',
                    'publishedAt': '2016-04-10'
                },
                vHtmlData:'进入&lt;span class="therm-blue"&gt;太平洋产险公众号&lt;&#x2F;span&gt;点击<span class="therm-blue">权益中心</span>进行使用'
            }
        },
        filters:{
            toUpperCase:function(value){
                if(!value) return ''
                value = value.toString()
                return value.toUpperCase()            
            }
        },
        watch:{
            list:function(oldValue,newValue) {
                console.log(newValue)
            }
        },
        methods:{
            setValue(){
                this.$refs.input.value = 'test';
                console.log(this.$refs.input)
                var capitalize = Vue.filter('capitalize');
                console.log(capitalize('test'))
                var toUpperCase = this.$options.filters['toUpperCase'];
                console.log(toUpperCase('ComponentFilters'))
                this.list.replace(2);
            },
            gotoVuex() {
                // this.$router.push({
                //     name:'VuexDemoById',
                //     params:{
                //         id:'text'
                //     }
                // })
                // this.$router.push({
                //     name:'VuexDemoById',
                //     query:{
                //         id:'text'
                //     }
                // })
                this.$router.push({
                    path:'/VuexDemo',
                    params:{
                        id:'text'
                    }
                })
            },
            unescape:function (html) {
                return html
                    .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, "\"")
                    .replace(/&#39;/g, "'")
                    .replace(/&#x2F;/g, "/");
            }
        },
        created(){
            console.log(this.$refs)
            
        },
    }
</script>

<style>
</style>

<template>
    <div>
        <div v-for="item in listData" v-bind:key="item.key">
            <span>{{item.text}}</span>
            <template v-if='item.type === "text" '>
                <input :type="item.type" :name="item.key"  v-model="saveObject[item.key]" >
            </template>
            <template v-if='item.type === "number" '>
                <input :type="item.type" :name="item.key"  v-model="saveObject[item.key]" >
            </template>
            <template v-if='item.type === "select" '>
                <select :name="item.key"  v-model="saveObject[item.key]">
                    <option v-for="(value,key) in item.selectData" :key="key" :value="key">{{value}}</option>
                </select>
            </template>
        </div>
        <div class="" @click="getData()">打印</div>
    </div>
</template>

<script>
    // text number select textarea date datetimper picker position onclick事件(省 请求url 请求结果字段 请求入参 市区)  页面跳转
    /**
     * 日历选择范围 calendar 是否日期范围(日期范围多少天) max min（max:多少天之后  min:可选的最小值 某天不可选）
     * 时间选择  DateTime   datetime-年月日时分秒 date-年月日 time-时分秒 year-month年月
     * picker 后台给出选择范围  并给出是否可选择标识
     * 时间选择范围（几点到几点）
     * 图片上传 是否压缩 压缩大小
     * 是否需要定位 - 百度/腾讯/高德地图定位   
     * 地图定位页面
     * 省->市->区->网点  picker type:'province'  params:[key] // 入参关联的key  通过saveObject[key]赋值
     * onclick -> 地图定位 - 页面跳转   通用地图页面-高德/百度/腾讯
     * picker值是否可选择
     * 是否有温馨提示
     * 是否只读（有值只读 无值录入 后端处理该逻辑）
     * 选择时间段  type:'timestart' 'timeend' 
     */
    export default {
        created() {
            this.listData.forEach(data => {
                this.saveObject[data.key] = data.value;
            })
        },
        data () {
            return {
                listData:[{
                    key:'phone',
                    text:'手机号',
                    rules:{
                        required:'1',
                        range:'' 
                    },
                    type:'text',
                    value:'18300694315',//当前值
                },{
                    key:'age',
                    text:'年龄',
                    type:'number',
                },{
                    key:'sex',
                    text:'性别',
                    type:'select',
                    selectData:{
                        '0':'女',
                        '1':'男'
                        
                    }
                }],
                saveObject:{
                }
            }
        },
        methods:{
            getData () {
                console.log(this.saveObject)
            }
        }
    }
</script>

<style>
</style>

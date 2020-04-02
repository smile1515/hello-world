<template>
    <div>
        <draggable class="line-grid-wrapper"
        element="ul"
        :value="syllable"
        :options="{group:'title',animation:150}"
        :no-transition-on-drag="false"
        @change="change"
        @start="start"
        @end="end"
        :move="move"
        v-model="syllable">
            <!-- <transition-group type="transition" :name="!drag ? 'syll_li':null" :css="true">
                <li style="display: inline-block;width: 25%;list-style: none;" v-for="(item , index) in syllable" :key="index">{{item.title}}</li>
            </transition-group> -->
            <div class="line-grid-item" style="display: inline-block;width: 25%;" v-for="(item , index) in syllable" :key="index">
                <div class="image-icon"></div>
                <div class="text-ellipsis font12">{{item.title}}</div>
            </div>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name:'dragview',
        data () {
            return {
                drag:false,
                syllable:[{
                    title:'道路救援1'
                },{
                    title:'道路救援2'
                },{
                    title:'道路救援3'
                },{
                    title:'道路救援4'
                },{
                    title:'道路救援5'
                },{
                    title:'道路救援6'
                }]
            }
        },
        components:{
            draggable
        },
        methods:{
            change(evt) {
                console.log(evt , 'change...')
            },
            //start ,end ,add,update, sort, remove 得到的都差不多
            start(evt) {
                this.drag = true
                console.log(evt , 'start...')
            },
            end(evt) {
                console.log(evt , 'end....')
                this.drag = false
                // console.log(this.syllable);
                // let target = this.syllable[evt.newIndex]
                // let removeItem = this.syllable[evt.oldIndex]
                // this.syllable[evt.oldIndex] = target
                // this.syllable[evt.newIndex] = removeItem
                // evt.item //可以知道拖动的本身
                // evt.to    // 可以知道拖动的目标列表
                // evt.from  // 可以知道之前的列表
                // evt.oldIndex  // 可以知道拖动前的位置
                // evt.newIndex  // 可以知道拖动后的位置
                
            },
            move(evt, originalEvent) {
                console.log(evt , 'move')
                console.log(originalEvent) //鼠标位置
            }
        },
        created() {
            
        }
    }
</script>

<style scoped lang="scss">
   
</style>

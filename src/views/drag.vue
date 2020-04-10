<template>
    <div>
        <!-- <transition-group  name="drog" tag="ul">
            <li draggable="true" v-for="(item, index) in lists" 
            @touchstart="handleTouchstart($event, index)" 
            @touchmove="handleTouchmove($event, index)" 
            @touchend="touchEnd($event, index)" 
            v-bind:key="item">{{item}}</li>
        </transition-group> -->
        <div class="" style="height: 400px;"></div>
        <div class="wrapper" ref="dragwrap" style="touch-action: none;">
            <transition-group name="flip-list" tag="div" >
                <div class="m-content-box" v-for="(item, index) in contentArrC" 
                    :key="item.id"
                    :class="[{dark: dark == 'dark'}, {light: light == item}]" 
                    @touchstart="touchstart($event, item, index)"
                    @touchend="touchend" @touchmove="touchmove($event, item, index)"
                    :style="{transform: (index == moveIndex ? transforms : '')}"
                >
                  <div class="m-content-left">
                    <div class="image-icon">{{index}} </div>
                    <div class="m-content">{{moveIndex}} {{item.title}}</div>
                  </div>
                  <!-- <div class="m-content-btn"></div> -->
                </div>
            </transition-group>
        </div>
        <div>
            <span @click="copy()">点击赋值</span>
        </div>
        <div class="" style="height: 400px;"></div>
    </div>
</template>

<script>
    export default {
        name:'drag',
        data () {
            return {
                lists: ['1: apple', '2: banana', '3: orange', '4: melon'],
                transform:'',
                source:{
                    client:{
                        x:'',
                        y:''
                    }
                },
                contentArr: [{
                    id:0,
                    title:'选项A'
                },{
                    id:1,
                    title:'选项B'
                },{
                    id:2,
                    title:'选项C'
                },{
                    id:3,
                    title:'选项D'
                },{
                    id:4,
                    title:'选项E'
                }],
                light: '',
                dark: '',
                itemName: '',
                pageY: 0,
                pageX:0,
                startX:0,
                startY:0,
                disX:0,
                disY:0,
                moveIndex:0,
                moveItem:'',
                targetIndex:0,
                targetItem:'',
                isRemove: false,
                transforms: 'translate(0px, 0px)',
                itemWidth:0,
                itemHeight:0
                
            }
        },
        computed:{
            contentArrC () {
                return this.contentArr.filter(function (number) {
                  return number
                })
            }
        },
        components:{
            
        },
        mounted() {
            // document.body.addEventListener('touchmove' , function(e){
            //     e=e||window.event;
            //     e.preventDefault();
            // },{ passive: false })
            this.itemHeight = this.$refs.dragwrap.offsetHeight/2;
            console.log(this.$refs.dragwrap.offsetHeight)
        },
        methods:{
            copy (message) {
                var aux = document.createElement("input"); 
                aux.setAttribute("value", '我是复制文本：18300694315'); 
                document.body.appendChild(aux); 
                aux.select();
                document.execCommand("copy"); 
                document.body.removeChild(aux);
                if (message == null) {
                    alert("复制成功");
                } else{
                    alert(message);
                }
            },
            // handleTouchstart (e) {
            //     let element = e.targetTouches[0]
            //     this.source.client = {
            //         x:element.clientX,
            //         y:element.clientY
            //     }
            // },
            // handleTouchmove (e) {
            //     let element = e.targetTouches[0]
            //     let x = element.clientX - this.source.client.x;
            //     let y = element.clientY - this.source.client.y;
            //     // this.transform = `transform:translate(${x}px, ${y}px);`
            //     element.target.style.cssText = `transform: translate(${x}px, ${y}px);`
            // },
            // touchEnd(){
                
            // }
            
            touchstart($event, item,i) {
                // this.heighLight(item)
                this.moveIndex = i;
                this.moveItem = item;
                this.startX = $event.targetTouches[0].clientX; 
                this.startY = $event.targetTouches[0].clientY;
            },
            touchmove($, item, index) {
                this.itemWidth = document.documentElement.clientWidth / 4;
                this.itemName = item
                this.isRemove = true
                this.pageY = $.targetTouches[0].pageY - 23
                this.disX = $.targetTouches[0].clientX - this.startX
                this.disY = $.targetTouches[0].clientY - this.startY
                
                this.transforms = 'translate('+this.disX+'px,'+this.disY+'px)';
                let num = Math.round(this.disX/this.itemWidth)
                let y = Math.round(this.disY/this.itemHeight) * 4
                console.log(index)
                console.log(num + y)
                if(index + num + y > this.contentArr.length -1) {
                    this.targetIndex = this.contentArr.length -1
                } else if(index + num + y < 0) {
                    this.targetIndex  = 0
                } else {
                    this.targetIndex = index + num + y
                }
            },
            touchend() {
                console.log(this.targetIndex);
                let tempArr = this.contentArr
                let moveItem = tempArr[this.moveIndex]
                let target = tempArr[this.targetIndex]
                this.$set(this.contentArr,this.targetIndex,moveItem)
                this.$set(this.contentArr,this.moveIndex,target)
                this.moveIndex = '';
                this.moveItem = '';
                this.transforms = '';
                console.log(this.contentArr,this.moveIndex);
            },
            heighLight(item) {
              this.light = item
              this.dark = 'dark'
            },
            changeHeightLight() {
              this.light = ''
              this.dark = ''
            },
            changePageY($, item, i) {
                // this.moveIndex = this.moveIndex ? this.moveIndex : i;
                // this.moveItem = this.moveItem ? this.moveItem : item;
                this.itemWidth = document.documentElement.clientWidth / 4;
                this.itemName = item
                this.isRemove = true
                this.pageY = $.targetTouches[0].pageY - 23
                this.disX = $.targetTouches[0].clientX - this.startX
                this.disY = $.targetTouches[0].clientY - this.startY
                // console.log($.targetTouches[0].clientX,this.startX)
                // console.log($.targetTouches[0].clientY,this.startY)
                // let element = $.targetTouches[0]
                // element.target.style.cssText = `transform: translate(${this.disX}px, ${this.disY}px);`
                // this.transforms = `transform: translate(${this.disX}px, ${this.disY}px);`
                this.transforms = 'translate('+this.disX+'px,'+this.disY+'px)';
                // console.log(this.transforms);
                let num = Math.round(this.disX/this.itemWidth)
                if(num > 0) {
                    console.log(i)
                    console.log(num)
                    this.targetIndex = i + num
                    // let tempOption = this.contentArr[num]
                    // this.contentArr[this.moveIndex] = tempOption
                    // this.contentArr[num] = this.moveItem
                    // this.moveIndex = num;
                    // this.moveItem = this.contentArr[this.moveIndex];
                    // // this.startX = $.targetTouches[0].clientX
                    // console.log(this.contentArr);
                }
                // 移动到第几个
                // if (this.pageX < (46 * i - 23) && i > 0) {
                //     let tempOption = this.contentArr[i - 1]
                //     this.contentArr[i] = tempOption
                //     this.contentArr[i - 1] = item
                // } else if (this.pageY > (46 * i + 23) && i < this.contentArr.length - 1) {
                //     let tempOption = this.contentArr[i + 1]
                //     this.contentArr[i] = tempOption
                //     this.contentArr[i + 1] = item
                // }
            },
            listSort() {
              this.itemName = ''
            },
        },
        created() {
            
        }
    }
</script>

<style scoped lang="scss">
    ul {
    min-height: 100px;
    width: 200px;
    margin: 20px auto;
    background: #eee;
    }
    
    li {
    min-height: 2em;
    margin-top: 10px;
    background: #abcded;
    }
    
    /组件过渡类/
    
    .drog-move {
    transition: transform 1s;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: #f3f3f3;
    }
    #app {
        background: #fff;
    }
    .m-content-box {
        border-top: 1px solid #e4e4e4;
        padding: 10px 0 10px 20px;
        line-height: 25px;
        position: relative;
        display: inline-block;
        width: 25%;
    }
    .m-content-left {
        display: flex;
    }
    .m-content-index {
        background: #0771e2;
        font-size: 13px;
        color: #fff;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        text-align: center;
        margin-right: 15px;
    }
    .m-content-btn {
    
    }
    .m-content-btn {
        display: block;
        position: relative;
        font-size: 0;
        width: 25px;
        height: 48px;
        border: none;
        cursor: pointer;
    }
    .m-content-btn:focus {
        outline: none;
    }
    .m-content-btn {
        display: block;
        position: absolute;
        height: 2px;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        background-color: #d8d7d7;
    }
    .m-content-btn:before,
    .m-content-btn:after {/*before和after与span重合，需要进行上移和下移*/
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #d8d7d7;
    }
    .m-content-btn:before {
        top: -8px;/*相对于中间的span上移10px*/
    }
    .m-content-btn:after {
        bottom: -8px;/*相对于中间的span下移10px*/
    }
    .m-content-box.light {
        background: #0771e2;
        box-shadow: 0px 0px 7px #7b7b7b;
        z-index: 1000;
    }
    .m-content-box.light .m-content-index {
        background: #fff;
        color: #0771e2;
    }
    .dark .m-content-index {
        background: #999
    }
    .dark .m-content-btn {
        display: none;
    }
    .m-content-box {
      // position: absolute;
      // background: #fff;
      // width: 100%;
      box-sizing: border-box;
    }
</style>

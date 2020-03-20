<template>
    <div>   
         <span @click="del"> - </span>{{num}}<span @click="updateNum"> + </span>
         <div v-for="todo in doneTodos" v-bind:key="todo.id">{{todo}}</div>
    </div>
</template>

<script>
    /* this.$store.state 获取状态state对象  this.$store.commit触发mutations
    * this.$store.dispatch 触发actions
    */
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Vuex',
        created() {            
        },
        data (){
            return {
                
            }
        },
        computed:{
            ...mapState({
                num:state => state.num
            }),
            ...mapGetters([
                'doneTodos',
            ])
        },
        /* computed:mapState([
           'num' 
        ]), */
        methods:{
            ...mapMutations([
                'increment', //将this.increment映射为this.$store.commit('incrment')
                'reduce'
            ]),
            ...mapActions([
                'increment', // 将this.increment 映射为 this.$store.dispatch('increment')
            ]),
            updateNum () {
                console.log('123');
                this.$store.commit('increment')
            },
            del(){
                this.$store.commit('reduce')
            }
        }
    }
</script>

<style scoped lang="scss">
</style>

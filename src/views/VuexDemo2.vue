<template>
    <div>
        {{itemNum}}
        <div class="" @click="initializeData">initinalize</div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        created () {
            
        },
        data () {
            return {
                
            }
        },
        computed:{
            ...mapState(['itemNum','allTime'])
            // ...mapState({
            //     itemNum: state => state.itemNum
            // })
        },
        methods:{
            ...mapMutations([]),
            ...mapActions([
                'addNum',
                'initializeData'
            ])
        }
    }
</script>

<style>
</style>

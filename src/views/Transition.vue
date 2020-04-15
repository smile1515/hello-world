<template>
    <div>
        <button v-on:click="show = !show">
            transition css过渡
         </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <button v-on:click="animationClick">
            animation css动画
        </button>
         <transition name="bounce">
            <p v-if="animationShow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'TransitionCom',
        data () {
            return {
                show:true,
                animationShow:true
            }
        },
        computed:{
            
        },
        components:{
            
        },
        mounted() {
            
        },
        methods:{
            animationClick () {
                this.animationShow = !this.animationShow;
                console.log(this.animationShow)
            }
        },
        created() {
            
        }
    }
</script>

<style scoped lang="scss">
    // css过渡
    .fade-enter-active,.fade-leave-active {
        transition:opacity .5s;
    }
    .fade-enter,.fade-leave-to {
        opacity: 0;
    }
    // css动画
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation:bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>

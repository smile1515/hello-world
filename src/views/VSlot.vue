<template>
    <!-- v-slot的学习demo -->
    <div class="view">
        <navigation-link>
            <template v-slot:header>
                <h1>I am header slot</h1>
            </template>
            <p>default slot</p>
            <template v-slot:footer>
                <p>this is foot slot</p>
            </template>
        </navigation-link>
    </div>
</template>

<script>
    import navigationLink from '../components/VSlot.vue'
    export default {
        name:'VSlot',
        components:{
            navigationLink
        },
        created() {
        },
        data(){
            return{   
                url:'/test'
            }
        },
        mounted(){            
        },
        methods:{
        }
    }
</script>

<style scoped lang="scss">
</style>

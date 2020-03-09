<template>
	<div class="font-size">
		<h1>我是标题一</h1>
        <h2>我是标题二</h2>
	</div>
</template>

<script>
    export default {
        name:'fontSize',
        created() {
            document.title = 'clientWidth rem'
        }
    }
</script>

<style scoped>
    h1,h2,font-size{
        font-weight: normal;
    }
    h1 {
        font-size: 1rem;
    }
    h2 {
        font-size: 0.5rem;
    }
</style>

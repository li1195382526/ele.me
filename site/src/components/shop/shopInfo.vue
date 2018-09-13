<template>
    <div class = "shop">
        <shop></shop>
        <goodsList></goodsList>
     
    </div>
</template>

<script>
    import shop from "@/components/shop/shop"
    import goodsList from "@/components/goodsList/goods"
    export default {
        name: "shop-info",
        components:{
            shop,
            goodsList
        }
    }
</script>

<style scoped>
	

</style>

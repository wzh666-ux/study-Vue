<template>
    <div class="imgs" @mouseenter="showButton()" @mouseleave="showButton()">
            这里是图片区域<br>
        <input type="button" value="收藏" v-show="isShowButton" @click="collect()">
    </div>
</template>

<script>
export default {
    name:'imgCompo',
    data:function(){
        return {
            isShowButton:false
        }
    },
    methods:{
        showButton:function(){
            this.isShowButton = !this.isShowButton;
            
        },
        collect:function(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style scoped>
.imgs{
    width: 200px;
    height: 200px;
    text-align: center;
    border: 2px solid black;
}
</style>
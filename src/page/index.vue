<template>
    <div>
        <img-compo class="imgbox"></img-compo>
        <img-compo class="imgbox"></img-compo>
        <img-compo class="imgbox"></img-compo>
        
    </div>
</template>

<script>
import imgCompo from '../components/indexCompo/imgCompo';

export default {
  
    name:'index',
    components: { imgCompo }
}
</script>

<style scoped>
.imgbox{
    margin: 20px auto;
}
</style>
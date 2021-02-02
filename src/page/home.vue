<template>
    <div>
        <headtip></headtip>
        <router-view></router-view>
        <footertip></footertip>
    </div>
</template>

<script>
import Footertip from '../components/footertip'
import headtip from '../components/headtip'

export default {
    components: { headtip, Footertip},
    name:'home'
}
</script>

<style scoped>

</style>
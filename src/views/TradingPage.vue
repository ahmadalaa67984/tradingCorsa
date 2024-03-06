<template>
    <div>
        <NavBar/>
        <TraidingMain/>
        <FooterBar/>
    </div>
</template>
<script>
import NavBar from '@/components/global/NavBar.vue';
import FooterBar from '@/components/global/FooterBar.vue';
import TraidingMain from '@/components/tradingComponents/TraidingMain.vue';

export default{
    name:'TradingPage',
    components:{NavBar,FooterBar,TraidingMain}
}
</script>
<style scoped>

</style>

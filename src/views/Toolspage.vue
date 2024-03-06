<template>
    <div>
        <NavBar/>
        <OurTools/>
        <FooterBar/>
    </div>
</template>
<script>
import NavBar from '../components/global/NavBar.vue';
import FooterBar from '@/components/global/FooterBar.vue';
import OurTools from '@/components/toolsComponents/OurTools.vue';
export default{
    name:'ToolsPage',
    components:{NavBar,FooterBar,OurTools}
}
</script>
<style scoped>

</style>
<template>
    <div>
       <NavBar/> 
       <LogosHeader/>
       <ForexCourses/>
       <OurServices/>
       <AboutAuthor/>
       <TrinSurvy/>
       <StatisticsNum/>
       <FooterBar/>
    </div>
</template>
<script>
import NavBar from '@/components/global/NavBar.vue';
import LogosHeader from '../components/homeComponents/LogosHeader.vue'
import ForexCourses from '../components/homeComponents/ForexCourses.vue'
import OurServices from '../components/homeComponents/our-services/OurServices.vue'
import AboutAuthor from '../components/homeComponents/AboutAuthor.vue'
import TrinSurvy from '../components/homeComponents/Trinee-survey/TrinSurvy.vue'
import StatisticsNum from '../components/homeComponents/StatisticsNum.vue'
import FooterBar from '@/components/global/FooterBar.vue';

export default{
    name: 'HomePage',
    components: {   NavBar,
                    LogosHeader,
                    ForexCourses,
                    OurServices,
                    AboutAuthor,
                    TrinSurvy,
                    StatisticsNum,
                    FooterBar
                }
}
</script>
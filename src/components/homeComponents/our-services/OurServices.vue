<template>
    <div class="services-container">
        <div class="service-title">
            <h1>
                خدماتنا
            </h1>
        </div>
        <div class="service-container">
            <div class="generated-card" v-for="(service, index) in services" :key="index">
                <ServiceCard :service="service"/>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceCard from './ServiceCard.vue';
import services from '../../../stores/services.js'
export default{
    name:'OurServices',
    components:{ServiceCard},
    data(){
        return{
            services:services,
        }
    },
}
</script>
<style scoped>
.service-title
{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:23px;
}
.services-container
{
    margin-top:50px;
    display:flex;
    border-bottom:3px solid var(--color-primary);
    flex-direction:column;
}
.service-container
{
    width:90%;
    margin:auto;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
}
.generated-card{
    width:25%;
}
@media screen and (max-width: 768px) {
    .service-container
    {
        flex-direction:column;
        justify-content:center;
    }
    .generated-card{
        width:100%;
    }
}
</style>
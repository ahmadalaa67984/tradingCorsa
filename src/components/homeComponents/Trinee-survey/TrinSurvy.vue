<template>
    <div class="trin-wrapper">
        <div calss="trin-title">
            <h1>آراء المتدربين</h1>
        </div>
            <div class="trin-container-normal">
                <div class="trin-cards-container">
                    <div class="trin-card-generated" v-for="(review, index) in reviews" :key="index">
                        <TrinSurvyCard :review="review"/>
                    </div>
                </div>
            </div>
        <div class="trin-carousel">
            <TrinCarousel/>
        </div>
    </div>
</template>
<script>
import TrinSurvyCard from './TrinSurvyCard.vue';
import TrinCarousel from './TrinCarousel.vue';
import reviews from '../../../stores/reviews.js';

export default {
    name:'TrinSurvy',
    components:{
        TrinSurvyCard,
        TrinCarousel
     },
     data() {
        return {
            reviews:reviews
        };
    }
}
</script>
<style scoped>

.trin-wrapper
{
    border-bottom:3px solid var(--color-primary);
    background-color:#efefef;
}
.trin-title
{
    display:flex;
    justify-content:center;
    align-items:center;
}
.trin-title h1
{
    font-size:50px;
}
.trin-cards-container
{
    display:flex;
    width:90%;
    margin:auto;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap
}
.trin-card-generated
{
    width:30%;
    margin:10px;
}
.trin-carousel
{
    display:none;
}

@media screen and (max-width:760px)
{
    .trin-carousel
    {
        display:block;
    }
    .trin-container-normal
    {
        display:none;
    }
}
</style>
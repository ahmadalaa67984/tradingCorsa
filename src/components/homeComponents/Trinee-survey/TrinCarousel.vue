<template>
   <v-carousel class="carousel-contain" height="auto" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(review, i) in reviews" :key="i">
        <div class="carousel-item">
            <div class="d-flex justify-space-around">
                <div class="carousel-generated-comp">
                    <TrinSurvyCard :review="review" />
                </div>
            </div>   
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import TrinSurvyCard from './TrinSurvyCard.vue';
import reviews from '../../../stores/reviews.js'
export default{
    name:'TrinCarousel',
    components: {
        TrinSurvyCard
    },
    data() {
        return {
            reviews: reviews
        };
    }
}
</script>
<style scoped>
.carousel-item
{
    width:80%;
    margin: auto;
    align-items: center;
}
.carousel-contain
{
    padding: 50px;
}
</style>
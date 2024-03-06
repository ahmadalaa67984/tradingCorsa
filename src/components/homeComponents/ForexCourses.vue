<template>
    <div class="forex-courses-container">
        <div class="course-title">
            <div class="writen-title">
                دورات تداول الفوركس
            </div>
        </div>
        <div class="courses-container">
            <div class="generated-card" v-for="(item, index) in items" :key="index">
                <CourseCard :item="item"/>
            </div>
        </div>
    </div>
</template>
<script>
import CourseCard from './forx-courses/CourseCard.vue';
import items from '../../stores/itemes.js';
export default{
    name:'ForexCourses',
    components:{CourseCard},
    data() {
    return {
        items:items
    };
  }
}
</script>
<style scoped>
.forex-courses-container
{
    padding-top:20px;
    background-color:#efefef;
    border-bottom:3px solid var(--color-primary);
}
.course-title{
    display:flex;
    justify-content:center;
    align-items:center;
}
.forex-courses-container .course-title .writen-title
{
    background-color:var(--color-primary);
    padding:10px 20px;
    color:#ffff;
    border-radius:var(--box-border-radius);
    font-size:35px;
    font-weight:700;
    display:flex;
    align-items:center;
}
.courses-container
{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
}
.generated-card
{
    max-width:450px;

}
@media screen and (max-width: 768px){
 
    .generated-card
    {
        height: auto;
        width: auto;
    }

}

</style>
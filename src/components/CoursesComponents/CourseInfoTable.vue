<template>
    <div class="course-info-wrapper">
        <div class="course-table-container">
           <div class="crs-info-table">
                <div class="crs-info-table-upper">
                    <div class="testing-title"
                         :class="selectedTitle==='Description'?'active':''" 
                         @click="selectedTitle = 'Description'">
                        Description
                    </div>
                    <div class="testing-title"
                        :class="selectedTitle==='Curriculum'?'active':''" 
                         @click="selectedTitle = 'Curriculum'">        
                        Curriculum
                    </div>
                    <div class="testing-title"
                        :class="selectedTitle==='FAQ'?'active':''" 
                         @click="selectedTitle = 'FAQ'"
                    >
                        FAQ
                    </div>
                    <div class="testing-title"
                        :class="selectedTitle==='Reviews'?'active':''" 
                         @click="selectedTitle = 'Reviews'"
                    >
                        Reviews
                    </div>
                </div>
                <div class="course-lower-table">
                    <div v-if="selectedTitle === 'Description'">
                        <CourseDesc/>
                    </div>
                    <div v-if="selectedTitle ==='Curriculum'">
                        <CurriculumSec/>
                    </div>
                    <div v-if="selectedTitle === 'FAQ'">
                        <CourseFaq/>
                    </div>
                    <div v-if="selectedTitle === 'Reviews'">
                        <CourseReviews/>
                    </div>
                </div>
           </div>
           <div class="thrteen-div" style="width:30% ;height:20px;padding: 30px;"></div>
        </div>
    </div>
</template>
<script>
import CourseDesc from './CourseDesc.vue'
import CurriculumSec from './CurriculumSec.vue'
import CourseFaq from './CourseFaq.vue'
import CourseReviews from './CourseReviews.vue'

export default{
    name:'CourseInfoTable',
    data() {
        return {
            selectedTitle: 'Description' // Track the selected title
            };
    },
    components:{CourseDesc,CurriculumSec,CourseFaq,CourseReviews}
}
</script>
<style scoped>
.course-info-wrapper
{
    z-index:100;
    background-color: inherit;
}
.course-table-container
{
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: end;
    padding-right: 60px;
}
.crs-info-table
{
    display: flex;
   flex-direction: column;
   margin: 20px 0;
   width: 60%;
}
.crs-info-table-upper
{
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
}
.testing-title
{
    background-color: black;
    padding: 15px 40px;
    color: #ffff;
    font-weight: 600;
    cursor: pointer;
    width: 25%;
    display: flex;
    justify-content: center;
}
.active
{
    background-color: var(--color-primary);
}
@media screen and (max-width: 760px) {
    .crs-info-table-upper
    {
        flex-direction: column;
    }
    .testing-title
    {
        width: 100%;
    }
    .course-info-wrapper
    {
        flex-direction: column;
    }
    .course-table-container
    {
        width: 100%;
        flex: 1;
        margin: auto;
        justify-content: center;
    }
    .thrteen-div
    {
       display: none;
    }
}

</style>
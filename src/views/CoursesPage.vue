<template>
    <div>
        <NavBar/>
        <div style="z-index: -10;">
            <CourseMain/>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/global/NavBar.vue';
import CourseMain from '../components/CoursesComponents/CourseMain.vue';
export default{
    name:'coursesPage',
    components:{
        NavBar,
        CourseMain,
    }
}
</script>
<style scoped> 

</style>
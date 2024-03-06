<template>
    <div style="position: relative;">
        <div class="upper-container">
            <div class="upper-content-wrapper">
                <div class="left-upper-box">
                    <div style="text-align: right;">
                        <i 
                                v-for="n in numberOfIcons" :key="n"
                                style="padding-left:3px;font-size:15px;color:rgb(255, 230, 0)" 
                                class="fa-solid fa-star"></i>
                    </div>
                    <div class="course-title">
                        دورة التحليل الفنى (للمبتدئين)
                    </div>
                    <div class="course-desc">
                        حصل على فرصة تعلم التحليل الفني من الصفر وصولاً إلى مستوى متقدم في هذا الكورس المبسط والشامل حيث ستتعلم كيفية تحليل حركات أسعار الأصول وفهمها بشكل عميق وواضح. لا تقلق إذا كنت جديدًا في هذا المجال، فهذا الكورس مصمم خصيصًا للطلاب الذين لا يملكون أي خبرة سابقة في التحليل الفني. بدءًا من الأساسيات وصولاً إلى 
                    </div>
                    <div class="left-buttom-sec">
                        <div class="owner-desc">
                            <div class="owner-img">
                                <img alt="" src="https://secure.gravatar.com/avatar/4c968b62ae75d2ad694010bb18da6c0b?s=215&amp;d=mm&amp;r=g" class="avatar avatar-215 photo" width="100%">
                            </div>
                            <div style="text-align: left;">
                                المدرس
                                <br/>
                                ahmed dawod
                            </div>
                        </div>
                        <div class="views-info">
                            <div>
                                <i class="fa-solid fa-user"></i>
                            </div>
                           <div class="views-info-entolled">
                                 3٬035 students enrolled
                           </div>
                        </div>
                    </div>
                </div>
                <div class="right-roll">
                    <div class="right-roll-child"  :class="isFixed?'':'absolute-roll'" ref="child"
                    >
                        <div class="roll-child-img">
                            <img width="100%"  src="https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-1024x576.jpg" class="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-1024x576.jpg 1024w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-300x169.jpg 300w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-768x432.jpg 768w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-1536x864.jpg 1536w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-150x85.jpg 150w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/2-600x338.jpg 600w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/2.jpg 1920w" sizes="(max-width: 1024px) 100vw, 1024px">
                        </div>
                        <div class="enroll-course-btn">
                            ENROLL COURSE
                        </div>
                        <div class="enroll-course-include"> 
                            <div style="color: black;font-weight: 700;text-align: right;font-size: 20px;">
                                INCLUDES
                            </div>
                            <div class="enroll-course-include-info">
                                <div style="color: black;">
                                    Full lifetime access
                                </div>
                                <div style="color: var(--color-primary);">
                                    <i class="fa-regular fa-clock"></i>
                                </div>
                            </div>
                            <div class="enroll-course-include-info">
                                <div style="color: black;">
                                    Access on mobile and TV
                                </div>
                                <div style="color: var(--color-primary);">
                                    <i class="fa-solid fa-tv"></i>
                                </div>
                            </div>
                            <div  ref="container">
                                scroll element
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: #f0f2f5">
            <CourseInfoTable/>
        </div>
        <div ref="footer" style="height:100px;background-color:#f0f2f5;"></div>
        <div style="z-index: 10;position: relative" >
            <FooterBar />
        </div>
    </div>
</template>
<script>
import CourseInfoTable from './CourseInfoTable.vue';
import FooterBar from '../global/FooterBar.vue';
import throttle from 'lodash/throttle';

export default{
    name:'CourseMain',
    computed: {
        numberOfIcons() {
        return Array.from({ length: 5 }, (_, i) => i);
        }
    },
    data() {
        return {
            isFixed: false,
            isStopped: false
        };
    },
    components:{CourseInfoTable,FooterBar},
    mounted() {
        const throttledScroll = throttle(this.handleScroll, 200);
        window.addEventListener('scroll', throttledScroll);
    },
    methods: {
        handleScroll() {
            const containerRef = this.$refs.container;
            const footerRef = this.$refs.footer;
            const screenWidth = window.innerWidth;
            if (screenWidth > 768)
            {
                if (containerRef && footerRef) {
                    const containerRect = this.$refs.container.getBoundingClientRect();
                    const footerRect = this.$refs.footer.getBoundingClientRect();
                    if (containerRect.bottom <= footerRect.top) {
                        this.isFixed = true;
                    } else {
                        this.isFixed = false;
                    }
                }
            }
        }
        
    }
}
</script>
<style scoped>
.upper-container
{
    width: 100%;
    background-color: var(--color-primary);
    padding: 20px;
}
.upper-content-wrapper
{
    width: 100%;
    margin:auto;
    display: flex;
    color: aliceblue;
    flex-direction: row;
}
.left-upper-box
{
    width: 70%;
    display: flex;
    justify-content: end;
    padding: 20px;
    flex-direction: column;
}

.right-roll-child
{
    background-color:#ffffff;
    width: 30%;
    position: fixed;
    border-radius: var(--button-border-radius);
    display: flex;
    flex-direction: column;
}
.absolute-roll
{
    position: absolute;
}
.roll-child-img
{
    width: 90%;
    margin: auto;
    margin-top: 20px;
}
.enroll-course-btn
{
    background-color: var(--color-primary);
    padding: 15px 40px;
    border-radius: var(--button-border-radius);
    width: 60%;
    margin: 30px auto;
    font-weight: 600;
    cursor: pointer;
}
.course-title
{
    font-size: 40px;
    text-align: right;
}
.course-desc
{
    word-wrap: wrap;
    text-align: right;
    font-size: 25px;
    color: #d1d1d1cf;
    font-weight: 200;
}
.left-buttom-sec
{
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row-reverse;
    flex-wrap: wrap;
}
.owner-desc
{
    display: flex;
    margin: 20px;
}
.owner-img
{
    height: 50px;
    width: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
}
.views-info
{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
}
.views-info-entolled
{
    color: #ecececbd;
    font-size: 15px;
    padding-right: 10px;
}
.enroll-course-include
{
    width: 70%;
    margin:20px auto;
}
.enroll-course-include-info
{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-top: 20px;
}
@media screen and (max-width: 760px) {
    .right-roll-child
    {
        position: relative;
    }
    .upper-content-wrapper
    {
        flex-direction: column-reverse;
        flex-wrap: wrap;
    }
    .right-roll-child
    {
        width: 100%;
    }

}
</style>
<template>
<div class="reviews-container">
    <div class="review-upper">
        <div class="review-info">
           <div class="rev-title">
            تقييم مفصل
           </div>
           <div class="review-bar">
                <div> 5 نجوم</div>
                <div class="linear-inside-bar">
                    <v-progress-linear
                        buffer-value="30"
                        model-value="40"
                        color="blue-darken-2"
                        ></v-progress-linear>
                </div>
                <div>1</div>
            </div>
            <div class="review-bar">
                <div> 4 نجوم</div>
                <div class="linear-inside-bar">
                    <v-progress-linear
                        buffer-value="30"
                        model-value="90"
                        color="blue-darken-2"
                        ></v-progress-linear>
                </div>
                <div>1</div>
            </div>
            <div class="review-bar">
                <div> 3 نجوم</div>
                <div class="linear-inside-bar">
                    <v-progress-linear
                        buffer-value="80"
                        model-value="80"
                        color="blue-darken-2"
                        ></v-progress-linear>
                </div>
                <div>1</div>
            </div>
            <div class="review-bar">
                <div> 2 نجوم</div>
                <div class="linear-inside-bar">
                    <v-progress-linear
                        buffer-value="30"
                        model-value="40"
                        color="blue-darken-2"
                        ></v-progress-linear>
                </div>
                <div>1</div>
            </div>
            
        </div>
        <div class="review-info-right">
           <div class="review-number">
            1
           </div>
           <div>
                <i 
                v-for="n in numberOfIcons" :key="n"
                style="padding-left:3px;font-size:15px;color:rgb(255, 230, 0)" 
                class="fa-solid fa-star"></i>
           </div>
           <div>
            1 تقييم
           </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:'CourseReviews',
    data () {
      return {
        skill: 20,
      }
    },
    computed: {
        numberOfIcons() {
        return Array.from({ length: 5 }, (_, i) => i);
        }
    },
}
</script>
<style scoped>
.reviews-container
{
    display: flex;
    background-color: #ffff;
    padding: 30px;
}
.review-upper
{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: row-reverse;
}
.review-info
{
    display: flex;
    flex-direction: column;
    width: 50%;
}
.rev-title
{
    font-weight: 400;
    text-align: right;
}
.review-bar
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
}
.linear-inside-bar
{
    width: 100px;
    height: 20px;
    padding: 10px;
}
.review-info-right
{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d1d1d1;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    flex-direction: column;
}
.review-number
{
    font-size: 90px;
}
</style>
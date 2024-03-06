<template>
    <div class="course-card-container">
        <div class="card-upper-section">
            <div class="icon" v-html="item.icon">
            </div>
            <div class="course-desc">
                <h1>
                    {{item.title}}
                </h1>
                <span>
                    {{item.subTitle}}
                </span>
            </div>
        </div>
        <div class="card-lower-section">
            <div class="course-lower-desc">
                {{ item.desc }}
            </div>
            <div class="button">
                <button>
                    <router-link class="router-link-style"
                                 to="/courses">أبدأ الان</router-link>
                    </button>
            </div>
        </div>
    </div>
</template>
<script>
export default
{
    name:'CourseCard',
    props: {
        item: Object, // Define prop type
  },
}
</script>
<style scoped>
.course-card-container
{
    background-color: var(--color-primary);
    border-radius: var(--box-border-radius);
    display: flex;
    overflow: hidden;
    flex-direction: column;
    margin:20px;
    min-height: 400px;
}
.card-upper-section
{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    flex-direction: row-reverse;
    padding: 20px;
    border-radius: var(--box-border-radius);
}
.course-desc
{
    color: #ffff;
    padding: 10px;
}
.course-desc h1{
    font-size: 40px;
}
.course-desc span
{
    font-size: 20px;
}
.course-lower-desc
{
    padding: 25px 20px;
    color:#ffff;
    font-size: 20px;
    text-align: right;
    word-wrap: break-word;
    align-self: stretch;
   
}
.card-lower-section .button 
{
    margin: 0px 50px 20px;
    display: flex;
    flex-flow: flex-start;
}
.card-lower-section .button button
{
    background-color: #ffff;
    border-radius: var(--button-border-radius);
    padding: 10px 20px;
    font-weight: 600;
}
@media screen and (max-width: 768px){
    .card-upper-section
    {
        flex-direction: column;
    }
    .course-card-container
    {
        height: auto;
        width: auto;
    }

}
</style>
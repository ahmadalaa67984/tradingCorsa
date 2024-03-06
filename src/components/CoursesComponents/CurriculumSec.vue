<template>
    <div class="curr-container">
        <div class="curr-element">
            <div class="icon-circle">
                <i class="fa-solid fa-play"></i>
            </div>
            <div>
                مقدمة الدورة
            </div>
        </div>
        <div class="cur-crs-title">
            دورة التحليل الفنى
        </div>
        <div class="curr-element">
            <div class="icon-circle">
                <i class="fa-solid fa-play"></i>
            </div>
            <div>
                مقدمة الدورة
            </div>
        </div>
        <div class="curr-element">
            <div class="icon-circle">
                <i class="fa-solid fa-play"></i>
            </div>
            <div>
                مقدمة الدورة
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'CurriculumSec'
    }
</script>
<style scoped>
.curr-container
{
    background-color: #ffff;
    padding: 20px;
    word-wrap: wrap;
    text-align: right;
    display: flex;
    flex-direction: column;
}
.curr-element
{
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    width: 100%;
    border-bottom: 1px solid #adadad63;
    padding: 20px;
}
.curr-element> :nth-child(2)
{
    padding-right: 10px;
    font-weight: 600;
}
.cur-crs-title
{
 font-size: 25px;
 padding: 10px 0px;
}
.icon-circle
{
   font-size: 10px;
   justify-content: center;
   display: flex;
   align-items: center;
   color: var(--color-primary) ;
}
</style>
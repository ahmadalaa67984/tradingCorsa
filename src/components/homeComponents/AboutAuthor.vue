<template>
    <div class="author-wrapper">
        <div class="about-author-container">
            <div class="logo-container">
                <div class="company-img">
                    <div style="justify-content: center;display: flex;overflow: hidden;font-size: 20px;">
                                <i class="fa-solid fa-money-bill-trend-up"></i> 
                                <div style="font-weight: 700;">TraiDing Corsa</div>
                            </div>
                </div>
            </div>
            <div class="author-desc">
                <h1>أحمد داوود - مؤسس شركة سفينكس</h1>
                <span>
                “تداول الفوركس هو بوابتك للحرية المالية .<br>المستقبلية،
                يقدم العديد من الفوائد المميزة لكل من يرغب في احترافه.<br>
                فالثقافة المالية، تمنح الأفراد القدرة على استخدام إمكاناتهم 
                والتنقل في الأسواق العالمية<br> بثقة تامة. فلنبدأ الرحلة سويًا،.
                لنحقق لك مستقبل أكثر إشراقاً من خلال <br>التعلم والتحك في تداولك بسوق الفوركس.”
            </span>   
            <div style="text-align:left;font-weight:400;font-size:25px">
                أحمد داوود
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'AboutAuthor',
    data(){

    }
}
</script>
<style scoped>
.author-wrapper
{
    border-bottom:3px solid var(--color-primary);
    padding:50px 0px;
}
.company-img
{
    border:5px solid var(--color-primary);
    border-radius:50%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
}
.about-author-container
{
    display: flex;
    width:80%;
    margin:auto;
    flex-direction:row-reverse;
}
.author-desc
{
    text-align:right;
    padding-right:10px;
}
.author-desc span
{
    font-size:25px;
}
.logo-container
{
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width:760px) {
    .about-author-container
    {
        flex-direction: column;
    }
}
</style>
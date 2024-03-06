<template>
    <div class="statistics-wrapper">
        <div class="ststistics-container">
            <div class="num-box">
                <div class="number">
                    +80K
                </div>
                <div class="title">
                   عدد المتدريبن
                </div>
            </div>
            <div class="num-box">
                <div class="number">
                    +999
                </div>
                <div class="title">
                  أستشارات
                </div>
            </div>
            <div class="num-box">
                <div class="number">
                    +60
                </div>
                <div class="title">
                  عدد فيديوهات التدريب
                </div>
            </div>
            <div class="num-box">
                <div class="number">
                    +150K
                </div>
                <div class="title">
                 مشاهدات
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'StatisticsNum',
}
</script>
<style scoped>
.statistics-wrapper
{
    border-bottom:3px solid var(--color-primary);
}
.ststistics-container
{
    margin: 50px auto;
    display: flex;
    justify-content: space-around;
    width: 80%;
}
.num-box
{
    color: var(--color-primary);
    font-size: 40px;
    box-shadow: 0 0 10px rgba(159, 157, 157, 0.307);
    padding: 20px 40px;
    border-radius: var(--button-border-radius);
    width: 25%;
    margin: 10px 20px;
}
.num-box .number
{
    font-size:  4vw;
    font-weight: 700;
    font-family:  sans-serif;
}
.num-box .title
{
    font-size: 15px;
    font-weight: 700;
    
}
@media screen and (max-width: 760px) {
    .ststistics-container
    {
        flex-direction: column;
    }
    .num-box
    {
        width: 100%;

    }
}
</style>
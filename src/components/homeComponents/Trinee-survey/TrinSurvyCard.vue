<template>
    <div class="card-container">
        <div class="card-cut">
</div>
        <div class="upper-card">
            <div class="card-img">
                <img width="60" height="60" src="https://sphinxtradingfx.com/wp-content/uploads/2023/05/profile.png" class="attachment-full size-full wp-image-7084" alt="" srcset="https://sphinxtradingfx.com/wp-content/uploads/2023/05/profile.png 128w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/profile-75x75.png 75w, https://sphinxtradingfx.com/wp-content/uploads/2023/05/profile-100x100.png 100w" sizes="(max-width: 128px) 100vw, 128px">
            </div>
            <div class="surv-info">
                <diV class="surv-name">
                    {{ review.revname }}
                    
                </diV>
                <div class="surv-work">
                    Student
                </div>
                <div class="surv-card-rate"> 
                        <i 
                            v-for="n in numberOfIcons" :key="n"
                            style="padding-left:3px;font-size:15px;color:rgb(255, 230, 0)" 
                            class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        <div class="lower-card">
            “”حقيقى انا ممتن ليك جدا وبشكرك كتير على كل فيديو انت بتنزله حقيقى بيبقى مبذول فيه كميه طاقه وشغف عشان تفيدنا بعلمك اللانهائى انا عايز اقولك انى اتعلمت ال SMC
        </div>
    </div>
</template>
<script>
    export default{
        name:'TrinSurvyCard',
        computed: {
        numberOfIcons() {
        return Array.from({ length: 5 }, (_, i) => i);
        }
    },
    props: {
        review: Object, // Define prop type
  },
}
</script>
<style scoped>
.card-container
{
    background-color:var(--color-primary);
    padding:20px;
    position:relative;
    overflow:hidden;
}
.upper-card
{
    display:flex;
    flex-direction:row-reverse;
}
.surv-info
{
    display:flex;
    padding-right:20px;
    flex-direction:column;
    text-align:right;
}
.surv-name
{
    font-weight:700;
    color:#fff;
}
.surv-work
{
    color:#90a1e9;
    font-weight:700;
}
.lower-card
{
    color:#fff;
    padding-top:10px;
    word-wrap:wrap;
    text-align:right;
}
.card-cut
{
    background-color:#5c81ff;
    width:500px;
    height:200px;
    position:absolute;
    top:0;
    left:0;
    transform: translate(-50%,-80%)rotateZ(-45deg);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
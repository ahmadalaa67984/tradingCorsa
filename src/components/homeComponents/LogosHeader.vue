<template>
    <div class="logos-container">
       <div class="logo">
            <img loading="lazy" decoding="async" width="250" src="https://sphinxtradingfx.com/wp-content/uploads/2023/06/Horizontal_Exness_Logo_Black-1.png" class="attachment-full size-full wp-image-7410" alt="" srcset="https://sphinxtradingfx.com/wp-content/uploads/2023/06/Horizontal_Exness_Logo_Black-1.png 310w, https://sphinxtradingfx.com/wp-content/uploads/2023/06/Horizontal_Exness_Logo_Black-1-300x39.png 300w" sizes="(max-width: 310px) 100vw, 310px">
        </div> 
        <div>
            <img loading="lazy" decoding="async" width="250" src="https://sphinxtradingfx.com/wp-content/uploads/2023/06/Group-2084.png" class="attachment-full size-full wp-image-7217" alt="" srcset="https://sphinxtradingfx.com/wp-content/uploads/2023/06/Group-2084.png 417w, https://sphinxtradingfx.com/wp-content/uploads/2023/06/Group-2084-300x39.png 300w" sizes="(max-width: 417px) 100vw, 417px">
        </div>
        <div>
            <img decoding="async" width="250"  src="https://sphinxtradingfx.com/wp-content/uploads/2023/06/1-2.png" class="attachment-full size-full wp-image-7411" alt="" srcset="https://sphinxtradingfx.com/wp-content/uploads/2023/06/1-2.png 521w, https://sphinxtradingfx.com/wp-content/uploads/2023/06/1-2-300x54.png 300w" sizes="(max-width: 521px) 100vw, 521px">
        </div>
    </div>
</template>
<script>
export default{
    name:'LogosHeader'
}
</script>
<style scoped>
.logos-container{
    border-bottom:3px solid var(--color-primary);
    display:flex;
    justify-content:space-around;
    align-items:center
}
.logos-container .logo
{
    padding:10px;
}
@media screen and (max-width: 768px)
{
    .logos-container
    {
        flex-direction:column;
    }
}
</style>
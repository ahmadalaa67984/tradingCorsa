<template>
    <div class="service-card">
        <div class="avatar-image" v-html="service.img ">
        </div>
        <div class="service-card-text">
            <div>
                <h1> {{ service.title }} </h1>
            </div>
            <div>
                <span>{{ service.subTitle }}</span>
            </div>    
        </div>
    </div>
</template>
<script>
export default{
    name:'ServiceCard',
    props:{
        service:Object,
    }
}
</script>
<style>
.service-card
{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    flex-direction: column;
    position: relative;
    margin-top:150px;
}
.avatar-image
{
    height:100px;
    background-color: none;
    z-index: 10;
    position: absolute;
    bottom:300px;
    cursor: pointer;
    transition: all 0.4s ease;
}
.avatar-image:hover
{
    transform: scale(0.9);
}
.service-card h1
{
    color: #ffff;
    font-size: 20px;
    display: block;
}
.service-card span
{
    display: block;
    color: #ffff;
}
.service-card-text
{
    height:200px;
    background-color: var(--color-primary);
    border-radius: var(--box-border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    margin: 20px;
    flex-direction: column;
    z-index: -1;
    width: 100%;
}

</style>
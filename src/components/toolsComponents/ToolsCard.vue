<template>
    <div class="tool-card">
        <div class="avatar-image" v-html="tool.img ">
        </div>
        <div class="tool-card-text">
            <div>
                <h1>{{ tool.title }}</h1>
            </div> 
        </div>
    </div>
</template>
<script>
export default{
    name:'ToolsCard',
    props:{
        tool:Object,
    }
}
</script>
<style scoped>
.tool-card
{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    flex-direction: column;
    position: relative;
    margin-top:150px;
}
.tool-image
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
.tool-card h1
{
    color: #ffff;
    font-size: 20px;
    display: block;
}
.tool-card span
{
    display: block;
    color: #ffff;
}
.tool-card-text
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
<template>
    <div class="tools-container">
        <div class="tool-container">
            <div class="generated-card" v-for="(tool, index) in tools" :key="index">
                <ToolsCard :tool="tool"/>
            </div>
        </div>
    </div>
</template>
<script>
import ToolsCard from './ToolsCard.vue';
import tools from '../../stores/tools.js'
export default{
    name:'OurServices',
    components:{ToolsCard},
    data(){
        return{
            tools:tools,
        }
    },

}
</script>
<style scoped>
.tool-title
{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:23px;
}
.tools-container
{
    margin-top:50px;
    display:flex;

    flex-direction:column;
}
.tool-container
{
    width:90%;
    margin:auto;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    flex-direction: row-reverse;
}
.generated-card{
    width:25%;
}
@media screen and (max-width: 768px) {
    .tool-container
    {
        flex-direction:column;
        justify-content:center;
    }
    .generated-card{
        width:100%;
    }
}
</style>
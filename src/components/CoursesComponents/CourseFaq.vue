<template>
    <div class="crs-faq-container">
            <div v-for="(item, index) in items" :key="index">
                <div class="sec-title" 
                     @click="toggleDescription(index)">{{ item.title }}</div>
                <div 
                    class="sec-desc"
                    :class="selectedTitleIndices.includes(index)?'show':''">{{ item.description }}</div>
        </div>
    </div>
</template>
<script>
import coursesFaq from '@/stores/coursesFAQ';
export default{
    data() {
        return {
            selectedTitleIndices: [],
            items: coursesFaq
        };
    },
    methods: {
            toggleDescription(index) {
            if (this.selectedTitleIndices.includes(index)) {
                this.selectedTitleIndices = this.selectedTitleIndices.filter(i => i !== index);
            } else {
                this.selectedTitleIndices.push(index);
            }
        }
    }
}
</script>
<style scoped>
.crs-faq-container
{
    display: flex;
    flex-direction: column;
    background-color: #ffff;
    padding: 0px 20px;
}
.sec-title
{
    text-align: right;
    padding: 20px;
    border-bottom: 1px solid #adadad63;
    cursor: pointer;
    transition: all .1s ease;

}
.sec-desc
{
    border-bottom: 1px solid #adadad63;
    text-align: right;
    padding: 20px;
    font-size: 15px;
    font-weight: 200;
    visibility: hidden;
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
.show
{
    display: block;
    visibility: visible;
    opacity: 1;
}
</style>
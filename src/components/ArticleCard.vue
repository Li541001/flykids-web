<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
})

const linkToPage = (url) => {
    window.open(url,'_blank')
}

</script>

<template>
    <div class="articleCard-container" @click="linkToPage(props.url)">
        <img :src="props.imgPath" alt="文章縮圖">
        <div class="title">{{ props.title }}</div>
        <div class="content">{{ props.content }}</div>
    </div>
</template>

<style scoped>
.articleCard-container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border: 1px solid #cacaca;
    border-radius: 20px;
    gap: 10px;
    height: 100%;
    cursor: pointer;
}
img{
    width: 100%;
    border-radius: 20px 20px 0px 0px;
}
.title{
    padding: 15px;
    font-size: 24px;
    font-weight: 900;
    text-align: start;
}
.content{
    padding: 15px;
    font-weight: 900;
    text-align: start;
    color: #686868;
    margin-bottom: 50px;
}
</style>
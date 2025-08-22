<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    imgPath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    },
    isFontBlack: {
        type: Boolean,
        default: true
    },
    path: {
        type: String,
        required: true
    }
})

const router = useRouter()

const pushInfoPage = (path) => {
    router.push(path)
}
</script>

<template>
    <div class="moreIntro-container" @click="pushInfoPage(props.path)">
        <img :src="props.imgPath" alt="更多內容">
        <div class='title' :class="isFontBlack?'black':'white'">{{ title }}</div>
        <div class="button">{{ buttonText }}</div>
    </div>
</template>

<style scoped>
.moreIntro-container{
    position: relative;
    width: 100%;
    cursor: pointer;
}
img{
    width: 100%;
    border-radius: 30px;
    filter: blur(1px);
}
.black{
    color: black;
}
.white{
    color: #fff;
}
.title{
    position: absolute;
    font-weight: 600;
    font-size: 28px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%); 
}
.button{
    position: absolute;
    font-weight: 300;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%); 
    transition: 0.5s;
    background-color: #e4a131;
    width: 130px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 30px;
}
.button:hover{
    background-color: #b97705;
}
</style>
<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    imgPath: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    shadowColor1: {
        type: String,
        required: true,
    },
    shadowColor2: {
        type: String,
        required: true,
    }
})
const router = useRouter()
const pushCoursePage = (path) => {
    router.push(path)
}
</script>

<template>
    <div class="couresIntro-container" :style="{'--shadow-color1': props.shadowColor1, '--shadow-color2': props.shadowColor2}" @click="pushCoursePage(props.path)">
        <img :src="props.imgPath" alt="課程介紹">
        <div class="title">{{ props.title }}</div>
        <div v-if="props.content" class="content">{{ props.content }}</div>
    </div>
</template>

<style scoped>
.couresIntro-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    gap: 10px;
    cursor: pointer;
}
img{
    width: 95%;
    transform-origin: center;
    transition:
        transform .45s cubic-bezier(.22,.61,.36,1),
        filter .45s ease,
        box-shadow .45s ease;
}
.couresIntro-container:hover > img,
.couresIntro-container:focus-within > img{
    transform: scale(1.06) rotate(-1.2deg);
    filter: brightness(1.05) saturate(1.1) 
        drop-shadow(0 6px 18px var(--shadow-color1)) drop-shadow(0 0 28px var(--shadow-color2));
    box-shadow: 0 10px 28px rgba(0,0,0,.25);
}

.title{
    font-size: 24px;
    font-weight: 600;
}
.content{
    font-weight: 400;
}
</style>
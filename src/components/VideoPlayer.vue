<script setup>
const props = defineProps({
    videoPath:{
        type: String,
        required: true
    },
})
</script>

<template>
    <video class="videoPlayer-container" :src="props.videoPath" autoplay muted playsinline loop>
        您的瀏覽器不支援 HTML5 影片
    </video>
</template>

<style scoped>
.videoPlayer-container{
    width: 100%;
    height: auto;    
    display: block;
    background: #000;
}
</style>
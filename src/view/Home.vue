<script setup>
import VideoPlayer from '../components/VideoPlayer.vue';
import CourseIntroCard from '../components/CourseIntroCard.vue';
import MoreIntroCard from '../components/MoreIntroCard.vue';
import video from '../assets/demo.mp4'
import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import moreInfo1 from '../assets/moreinfo1.png'
import moreInfo2 from '../assets/moreinfo2.png'


</script>

<template>
    <div class="home-container">
        <div class="video-container">
            <video-player :video-path="video"/>
        </div>
        <div class="divider-container mb">
            <el-divider />
        </div>
        <div class="title">課程介紹</div>
        <el-row :gutter="40" justify='center' style="margin: 30px 10px 70px 10px;">
            <el-col :span="8">
                <course-intro-card :img-path="course1" title="動知覺課程" path="/flykid" shadowColor1='rgba(0, 200, 255, .45)' shadowColor2='rgba(0, 200, 255, .3)'/>
            </el-col>
            <el-col :span="8">
                <course-intro-card :img-path="course2" title="程式課程" path="/coding" shadowColor1='rgba(128, 22, 19, .45)' shadowColor2='rgba(128, 22, 19, .3)'/>
            </el-col>
            <el-col :span="8">
                <course-intro-card :img-path="course2" title="學業輔導" path="/study" shadowColor1='rgba(128, 22, 19, .45)' shadowColor2='rgba(128, 22, 19, .3)'/>
            </el-col>
        </el-row>
        
        <div class="title">更多內容</div>
        <el-row :gutter="20" style="margin: 30px 10px 50px 10px;">
            <el-col :span="12">
                <more-intro-card :img-path="moreInfo2" title="預約課程" button-text="前往預約" :is-font-black="false" path="/reserve"/>
            </el-col>
            <el-col :span="12">
                <more-intro-card :img-path="moreInfo1" title="飛童文章專欄" button-text="前往觀看" :is-font-black="true" path="/article"/>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.title{
    color: black;
    font-size: 24px;
    font-weight: bold;
}
.video-container{
    width: 100%;
}
.divider-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.el-divider--horizontal{
    border-top: 3px solid black;
    margin: 10px 0px;
    width: 90%;
}
.mb{
    margin-bottom: 10px;
}


</style>
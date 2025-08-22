<script setup>
import ArticleCard from '../components/ArticleCard.vue';
import ArticleImg from '../assets/articleimg.png'
import ArticleImg2 from '../assets/articleimg2.png'
import ArticleImg3 from '../assets/moreinfo1.png'

const articleDates = [
    {
        title: '晨跑提升專注力：從大腦生理看早晨跑步的奇妙效益',
        content: '在競爭激烈的職場和課堂上，擁有持久的專注力是一大優勢。然而，許多人早晨醒來時常感到腦霧沉沉，難以立即進入狀態。除了咖啡因外，有沒有更健康的方法喚醒大腦、提升專注？晨跑或許就是答案。',
        imgPath: ArticleImg,
        url: 'https://medium.com/@titec0223/%E6%99%A8%E8%B7%91%E6%8F%90%E5%8D%87%E5%B0%88%E6%B3%A8%E5%8A%9B-%E5%BE%9E%E5%A4%A7%E8%85%A6%E7%94%9F%E7%90%86%E7%9C%8B%E6%97%A9%E6%99%A8%E8%B7%91%E6%AD%A5%E7%9A%84%E5%A5%87%E5%A6%99%E6%95%88%E7%9B%8A-28010d173623'
    },
    {
        title: '【跑步讓孩子更聰明？】有氧運動對大腦的 8 大好處',
        content: '跑步真的能讓孩子變得更聰明嗎？乍聽之下這似乎像是鼓勵孩子多動的口號，但科學研究正逐漸證實其中的真實性。美國一項針對 9 至 10 歲兒童的研究發現，體適能較佳的孩子海馬體（掌管學習記憶的腦區）體積更大，記憶測驗表現也更出色。',
        imgPath: ArticleImg3,
        url: 'https://medium.com/@titec0223/%E8%B7%91%E6%AD%A5%E8%AE%93%E5%AD%A9%E5%AD%90%E6%9B%B4%E8%81%B0%E6%98%8E-%E6%9C%89%E6%B0%A7%E9%81%8B%E5%8B%95%E5%B0%8D%E5%A4%A7%E8%85%A6%E7%9A%84-8-%E5%A4%A7%E5%A5%BD%E8%99%95-ac182f2506d7'
    },
    {
        title: '為什麼我的生活總是沒效率？養成習慣的四個方法，讓習慣變得輕而易舉',
        content: '有一份研究調查數據顯示，人在每天的行為中，有百分之 40% 到 50% 是出於習慣，然而習慣是大腦根據經驗累積後自動化的結果，但卻在這短短幾秒內，會影響到後續幾分鐘甚至是幾小時的行為，因此一個好的習慣會幫助你正確地建立起良好的生活模式，而壞的習慣會讓你的生活沒有改變，甚至變得更糟糕。',
        imgPath: ArticleImg2,
        url: 'https://medium.com/@titec0223/%E7%82%BA%E4%BB%80%E9%BA%BC%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E7%B8%BD%E6%98%AF%E6%B2%92%E6%95%88%E7%8E%87-%E9%A4%8A%E6%88%90%E7%BF%92%E6%85%A3%E7%9A%84%E4%BA%94%E6%AD%A5%E9%A9%9F-%E8%AE%93%E7%BF%92%E6%85%A3%E8%AE%8A%E5%BE%97%E8%BC%95%E8%80%8C%E6%98%93%E8%88%89-ab1ae5f23820'
    },
    {
        title: '晨跑提升專注力：從大腦生理看早晨跑步的奇妙效益',
        content: '在競爭激烈的職場和課堂上，擁有持久的專注力是一大優勢。然而，許多人早晨醒來時常感到腦霧沉沉，難以立即進入狀態。除了咖啡因外，有沒有更健康的方法喚醒大腦、提升專注？晨跑或許就是答案。',
        imgPath: ArticleImg,
        url: 'https://medium.com/@titec0223/%E6%99%A8%E8%B7%91%E6%8F%90%E5%8D%87%E5%B0%88%E6%B3%A8%E5%8A%9B-%E5%BE%9E%E5%A4%A7%E8%85%A6%E7%94%9F%E7%90%86%E7%9C%8B%E6%97%A9%E6%99%A8%E8%B7%91%E6%AD%A5%E7%9A%84%E5%A5%87%E5%A6%99%E6%95%88%E7%9B%8A-28010d173623'
    },
    {
        title: '【跑步讓孩子更聰明？】有氧運動對大腦的 8 大好處',
        content: '跑步真的能讓孩子變得更聰明嗎？乍聽之下這似乎像是鼓勵孩子多動的口號，但科學研究正逐漸證實其中的真實性。美國一項針對 9 至 10 歲兒童的研究發現，體適能較佳的孩子海馬體（掌管學習記憶的腦區）體積更大，記憶測驗表現也更出色。',
        imgPath: ArticleImg3,
        url: 'https://medium.com/@titec0223/%E8%B7%91%E6%AD%A5%E8%AE%93%E5%AD%A9%E5%AD%90%E6%9B%B4%E8%81%B0%E6%98%8E-%E6%9C%89%E6%B0%A7%E9%81%8B%E5%8B%95%E5%B0%8D%E5%A4%A7%E8%85%A6%E7%9A%84-8-%E5%A4%A7%E5%A5%BD%E8%99%95-ac182f2506d7'
    },
    {
        title: '為什麼我的生活總是沒效率？養成習慣的四個方法，讓習慣變得輕而易舉',
        content: '有一份研究調查數據顯示，人在每天的行為中，有百分之 40% 到 50% 是出於習慣，然而習慣是大腦根據經驗累積後自動化的結果，但卻在這短短幾秒內，會影響到後續幾分鐘甚至是幾小時的行為，因此一個好的習慣會幫助你正確地建立起良好的生活模式，而壞的習慣會讓你的生活沒有改變，甚至變得更糟糕。',
        imgPath: ArticleImg2,
        url: 'https://medium.com/@titec0223/%E7%82%BA%E4%BB%80%E9%BA%BC%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%E7%B8%BD%E6%98%AF%E6%B2%92%E6%95%88%E7%8E%87-%E9%A4%8A%E6%88%90%E7%BF%92%E6%85%A3%E7%9A%84%E4%BA%94%E6%AD%A5%E9%A9%9F-%E8%AE%93%E7%BF%92%E6%85%A3%E8%AE%8A%E5%BE%97%E8%BC%95%E8%80%8C%E6%98%93%E8%88%89-ab1ae5f23820'
    },
]


</script>

<template>
    <div class="article-container">
        <div class="article-title">飛童知識專欄</div>
        <img src="../assets/article.png" alt="文章主圖">
        <el-row :gutter="70" justify=center >
            <el-col v-for="article in articleDates" :xs="20" :sm="11" :md="11" :lg="7" :xl="7" class="el-col">
                <article-card 
                    :title="article.title" 
                    :content="article.content"
                    :img-path="article.imgPath"
                    :url="article.url"
                />
            </el-col>
        </el-row>
        <div style="height: 100px;"></div>
    </div>
</template>

<style scoped>

.article-title{
    height: 300px;
    font-size: 36px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 90%;
    border-radius: 10px;
    margin-bottom: 50px;
}
@media(max-width:768px){
    img{
        width: 98%;
    }
}

.el-col{
    margin-bottom: 50px;
}

</style>
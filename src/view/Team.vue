<script setup>
import member1 from '../assets/member1.jpg'
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'
import member5 from '../assets/member5.jpg'
import member6 from '../assets/member6.jpg'

const memberData = [
    {
        name: '劉維誠',
        content1: '飛童動知覺運動教室發起人',
        content2: '執行長 課程指導教官',
        imgPath: member1,
        webPath: ''
    },
    {
        name: '徐喜傑',
        content1: '動知覺教育創始人',
        content2: '飛童教育首席教學顧問',
        imgPath: member2,
        webPath: ''
    },
    {
        name: '黎寶文',
        content1: '動知覺兒童動作發展',
        content2: '早期療育課程 指導教官',
        imgPath: member3,
        webPath: ''
    },
    {
        name: '郭皇孝',
        content1: '動知覺課程總教練',
        content2: '',
        imgPath: member4,
        webPath: ''
    },
    {
        name: '潘忠良',
        content1: '動知覺親師教育業務發展統籌',
        content2: '',
        imgPath: member5,
        webPath: ''
    },
    {
        name: '劉毅群',
        content1: '青年部共同創辦人',
        content2: '動知覺資深指導教練',
        imgPath: member6,
        webPath: 'https://portaly.cc/yiqun'
    },
    
]

const personalWeb = (url) => {
    window.open(url,'_blank')
}

</script>

<template>
    <div class="team-container">
        <div class="title1">Teaching Team</div>
        <div class="team-intro-box">
            <div class="team-intro-text">
                <div class="team-intro-title">資深教學團隊</div>
                <div class="team-intro-content">資深教學團隊人員具備豐富幼兒教育專業，擁有台灣與中國兩地超過三十年的教學經驗，透過幼兒體育活動執行、專業測評、各型親子活動辦理以及幼教老師培訓，指導超過百萬名不同發展程度的孩童與家長共同成長。</div>
                <div class="divider"></div>
            </div>
            <img class="team-intro-img" src="../assets/team1.jpg" alt="團隊照片">
        </div>
        <el-row>
            <el-col v-for="member in memberData" :span="12">
                <div class="intro-container" :class="member.webPath != ''? 'pointer': ''" @click="personalWeb(member.webPath)">
                    <div class="intro-detail-box">
                        <div class="intro-detail">{{ member.content1 }}</div>
                        <div v-if="member.content2" class="intro-detail">{{ member.content2 }}</div>
                        <div class="divider2"></div>
                    </div>
                    <div class="intro-box">
                        <img class="intor-img" :src="member.imgPath" alt="個人照片"></img>
                        <div class="intor-name">{{ member.name }}</div>
                    </div>
                </div>
                
            </el-col>
        </el-row>
        <div style="height: 50px;"></div>
    </div>
</template>

<style scoped>
.team-container{
    position: relative;
}
.title1{
    z-index: 10;
    position: absolute;
    top: 10px;
    left: 10px;
    color: #fff;
    font-size: 28px;
    font-weight: 900;
}
.team-intro-box{
    position: relative;
    background-color: black;
    display: flex;
    justify-content:end;
    align-items:center;
    height: 500px;
    padding: 20px;
}
.team-intro-img{
    width: 45%;
}
.team-intro-text{
    position: absolute;
    left: 30px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 40%;
}
.team-intro-title{
    color: #fff;
    text-align: start;
    font-weight: 800;
    font-size: 32px;

}
.team-intro-content{
    color: #989898;
    text-align: start;
    font-weight: 700;
    
}
.divider{
    margin-top: 20px;
    border-top: 2px solid white;
    width: 110%;
}
.divider2{
    margin-top: 5px;
    border-top: 1px solid rgb(108, 108, 108);
    width: 90%;
}

.intro-container{
    position: relative;
    margin-top: 20px;
    background-color: black;
    display: flex;
    align-items: end;
    width: 100%;
    height: 350px;
    padding: 20px;
}
.intro-box{
    position: relative;
}
.intor-img{
    width: 250px;
    border-radius: 50%;
}
.intor-name{
    color: #c78500;
    position: absolute;
    top: 35%;
    left: -15%;
    font-size: 24px;
    font-weight: 900;
}
.intro-detail-box{
    width: 60%;
}
.intro-detail{
    color: #989898;
    font-weight: 700;
    text-align: start;
}
.pointer{
    cursor: pointer;
}
</style>


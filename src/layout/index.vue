<script setup>
import { ref } from 'vue';
import { useRoute,useRouter  } from 'vue-router';
import { useBreakpoints } from '@vueuse/core';

const route = useRoute()
const router = useRouter()

const bp = useBreakpoints({ sm: 640, md: 768, lg: 1024, xl: 1280 })
const isMobile = bp.smaller('md')   

const drawer = ref(false)

const activeMenu = ref('1')
const handleSelect = () => {}
const nowPath = () => {
    return route.path
}
</script>

<template>
    <el-container class="layout-container">
        <el-header class="layout-header" height="5rem">
            <el-row justify="space-between" align="middle" class="header-row">
                <el-col :span="8">
                    <div class="header-logo" @click="() => {router.push('/')}">
                        <img src="../assets/logo.png" alt="飛童動知覺" class="header-img">
                        <span v-if="!isMobile" class="header-title">飛童動知覺</span>
                    </div>
                </el-col>
                <el-col :span="16">
                    <el-menu 
                        v-show="!isMobile"
                        :default-active="activeMenu"
                        :router="true"
                        mode="horizontal"
                        class="header-menu"
                        @select="handleSelect"
                    >
                        <el-menu-item index="/">
                            <span>首頁</span>
                        </el-menu-item>
                        <el-menu-item index="/team">
                            <span>團隊介紹</span>
                        </el-menu-item>
                        <el-menu-item :index="nowPath">
                            <a href="https://feitong-edu.com/elementor-2595/" target="_blank" rel="noopener noreferrer">
                                經營理念
                            </a>
                        </el-menu-item>
                        <el-menu-item :index="nowPath">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjyZ8X7VKIT4rid2ZpkjAsPpOeI10GSytSNQTR5fzE-tuNuQ/viewform" target="_blank" rel="noopener noreferrer">
                                立即報名
                            </a>
                        </el-menu-item>
                    </el-menu>
                    <div class="hamburger-container">
                        <el-button
                        v-show="isMobile"
                        class="hamburger"
                        text
                        @click="drawer = true"
                        aria-label="開啟導航選單"
                        >
                            <el-icon><Expand/></el-icon>
                        </el-button>
                    </div>
                    
                </el-col>
            </el-row>
        </el-header>
        <!-- 手機板抽屜導航 -->
        <el-drawer v-model="drawer" direction="rtl" size="60%" :with-header="false" class="drawer-container">
            <div class="drawer-header">
            <span>MENU</span>
                <el-button text @click="drawer = false" aria-label="關閉">
                    <el-icon><Close /></el-icon>
                </el-button>
            </div>

            <el-menu
                :default-active="activeMenu"
                :router="true"
                class="drawer-body"
                @select="handleSelect"
            >
            <el-menu-item index="/">
                <span>首頁</span>
                </el-menu-item>
                <el-menu-item index="/team">
                    <span>團隊介紹</span>
                </el-menu-item>
                <el-menu-item :index="nowPath">
                    <a href="https://feitong-edu.com/elementor-2595/" target="_blank" rel="noopener noreferrer">
                        經營理念
                    </a>
                </el-menu-item>
                <el-menu-item :index="nowPath">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjyZ8X7VKIT4rid2ZpkjAsPpOeI10GSytSNQTR5fzE-tuNuQ/viewform" target="_blank" rel="noopener noreferrer">
                        立即報名
                    </a>
                </el-menu-item>
            </el-menu>
        </el-drawer>
        <el-main class="layout-main">
            <router-view/>
        </el-main>
        <el-footer class="layout-footer">
            <span>Copyright © by 飛童動知覺團隊. All Rights Reserved.</span>
        </el-footer>
    </el-container>
</template>

<style scoped>
/* container */
.layout-container{
    background-color: #fff;
    width: 100%;
    min-height: 100vh;
}

/* header-logo*/
.layout-header{
    background-color: #1d292e;
}
.header-row{
    height: 100%;
}
.header-logo{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    cursor: pointer;
}
.header-img{
    height: 4rem;
}
.header-title{
    font-weight: bold;
    font-size: 22px;
    color: #fff;
    transition: 0.5s;
}

.header-logo:hover > .header-title{
    color: rgb(144, 144, 144);
}

/* header-menu*/
.header-menu{
    background-color: transparent;
    border: 0px;
    font-weight: bold;
    display: flex;
    justify-content: end;
    align-items: center;
}

.el-menu-item {
    font-size: 16px;
    color: #fff;
    border: 0px;
}
:deep(.el-menu--horizontal>.el-menu-item.is-active) {
    background-color: transparent;
    color: rgb(144, 144, 144) !important;
    border: 0px;
}

.el-menu--horizontal .el-menu-item:hover,
.el-menu--horizontal .el-menu-item:focus {
    background-color: transparent;
    color: rgb(144, 144, 144);
    border: 0px;
}

a{
    font-weight: bold;
    text-decoration: none;
    color: #fff;
}

/* mobile menu */
.hamburger-container{
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
}
.hamburger{ 
    color:#fff;
    font-size: 24px;
}

.el-button.is-text:hover {
    background-color: transparent;
    color: rgb(144, 144, 144);
}

:deep(.el-drawer__body){
    background-color: #1d292e;
}
.drawer-header{
    display:flex; 
    align-items:center; 
    justify-content:space-between;
    padding: 8px 4px 12px; 
    font-weight:800;
    font-size: 20px;
    color: #fff;

}

.drawer-body{
    background-color: #1d292e;
    border: 0px;
    font-weight: bold;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
}

.el-menu-item:hover,
.el-menu-item:hover > a{
    background-color: #1d292e;
    color: rgb(144, 144, 144);
}

.el-menu-item:hover{
    background-color: #1d292e;
    color: rgb(144, 144, 144);
}

.mobile-menu{ border-right:0 }

/* main */
.layout-main{
    padding: 0;
    overflow-x: hidden;
}

/* footer */
.layout-footer{
    background-color: #1d292e;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
</style>
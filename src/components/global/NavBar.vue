<template>
    <div>
        <div class="nav-menu"> 
            <div class="bars-button" @click="showMenu()">
                <i 
                class="fas fa-bars" 
                > 
                </i> 
            </div>
                <div
                class="nav-content"
                :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
                > 
                <div class="login-button">
                    <div class="button-wrapper">
                        <div>
                            <button>
                                <router-link class="router-link-style"
                                 to="/rigester">تسجيل الدخول</router-link>
                            </button>
                        </div>
                    <div>
                        <i style="padding-right: 10px;font-size: 20px;" 
                        class="fa-solid fa-user"></i>
                        <i style="padding-right: 10px;font-size: 20px;" 
                        class="fa-brands fa-youtube"></i>
                        <i style="padding-right: 10px;font-size: 20px;" 
                        class="fa-brands fa-twitter"></i>
                        <i style="padding-right: 10px;font-size: 20px;"
                        class="fa-brands fa-telegram"></i>
                        <i style="padding-right: 10px;font-size: 20px;" 
                        class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                </div>
                <ul class="nav-items">
                        <li>
                            <router-link to="/" 
                            class="router-link-style"
                            >الرئيسية</router-link>
                        </li>
                        <li>
                            <router-link to="/ourservices" 
                            class="router-link-style"
                            >خدماتنا</router-link>
                        </li>
                        <li>
                            <router-link to="/courses" 
                            class="router-link-style"
                            >الدورات</router-link>
                        </li>
                        <li>
                                <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                    class="drop-down"
                                    v-bind="props"
                                    outline="none"
                                    >
                                    <i style="padding-right: 10px;font-size: 20px;" 
                                    class="fa-solid fa-caret-down"></i>
                                    <router-link to="/tools" 
                                        class="router-link-style"
                                        >الأدوات</router-link>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                    v-for="(item, index) in items"
                                    :key="index"
                                    >
                                    <v-list-item-title color="#0000">
                                    {{ item.title }}
                                    </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                </v-menu>
                        </li>
                        <li>
                            
                            <router-link to="/trading" 
                                class="router-link-style"
                                >مناصات التداول</router-link>
                        </li>
                        <li>
                            <router-link to="/contactus" 
                                class="router-link-style"
                                >تواصل معانا</router-link>
                        </li>
                </ul>
                <div class="logo">
                    <div >
                        <div 
                            @click="showMenu()" 
                            class="close-button" >
                            <i 
                            class="fas fa-x" 
                        > 
                        </i>    
                        </div >
                            <div style="justify-content: center;display: flex;overflow: hidden;font-size: 30px;">
                                <i class="fa-solid fa-money-bill-trend-up"></i> 
                                <div style="font-weight: 700;">TraDing Corsa</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'NavBar',
        data() {
            return {
                showMobileMenu: false,
                items: [
                    {
                        title:'جلسات الفوركس'
                    },
                    {
                        title:'أله حاسبه'
                    },
                    {
                        title:'التقويم الاقتصادي'
                    }
                ] // Define an array of items
            };
        },
        methods: {
            showMenu() {
                this.showMobileMenu = !this.showMobileMenu;
                console.log('menu is clicked!')
            },
        }

    }
</script>
<style lang="scss" scoped>
    .nav-menu {
        background-color:#ffffff  ;
    }
    .nav-content
     {
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        align-items: center;
     }
    .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: row-reverse;
        li 
        {
        padding: 0 10px;
        cursor: pointer;
        }
        li:hover
        {
            color:var(--color-primary)
        }
}
.button-wrapper
{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
}
.nav-menu button
{
    background-color:var(--color-primary) ;
    padding: 10px 20px;
    color:#eef1f7 ;
    border: none;
    border-radius: var(--button-border-radius);
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-family: "Almarai", sans-serif;
}
.bars-button{
    display: none;

}
.close-button
{
    display: none;
}
.drop-down {
  box-shadow: none;
  background-color:#ffffff !important;
  color: #2c3e50 !important;
  font-weight: 400 !important;
}

// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
    .nav-menu {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    }
    .open-menu {
    opacity: 1;
    position: fixed;
    right: 0vw;
    top: 0;
    bottom: 0;
    z-index: 10;
    background-color: #ffffff;
    z-index: 90;
    }
    .closed-menu {
    opacity: 1;
    right: -100vw;
    }
    .nav-content-slide
    {
        display: flex;
    }
    .nav-content {
    flex-direction: column-reverse;
    z-index: 100;
    position: fixed;
    transition: all 0.2s ease-out;
    
    }
    .nav-items {
    flex-direction: column;
    }
    .bars-button
    {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
        cursor: pointer;
        
    }
    .close-button
    {
        display: block;
    }
    .nav-menu button
    {
        margin-bottom: 10px;
    }
    .button-wrapper
    {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

}
</style>
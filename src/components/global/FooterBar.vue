<template>
    <div class="footer-wrapper">
        <div class="upper-div">
            <div>
                <div style="justify-content: center;display: flex;overflow: hidden;font-size: 30px;">
                    <i class="fa-solid fa-money-bill-trend-up"></i> 
                    <div style="font-weight: 700;">TraDing Corsa</div>
                </div>
                <div>
                    إخلاء مسؤولية المخاطر
                </div>
                <div>
                   . تقدم تتضمن تجارة الفوركس مخاطر كبيرة للخسارة وقد لا تكون مناسبة لجميع المستثمرين.
                </div>
            </div>
            <div class="important-links">
                روابط مهمة
                <ul>
                    <li>دورات</li>
                    <li>حسابات المحاطرة</li>
                    <li>الشروط والاحكام</li>
                    <li> تواصل معانا</li>
                </ul>
            </div>
            <div class="important-links">
                تواصل معانا
                  <ul>
                    <li>
                        <a href="">support@tradingCorsa.com</a>
                    </li>
                    <li>
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
                     </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="lab-boy">
                <img width="200" src="https://sphinxtradingfx.com/wp-content/uploads/2023/05/Scenes-4.svg">
            </div>
            <a href="http://osolutions.digital/">
                        <img width="300" src="https://sphinxtradingfx.com/wp-content/uploads/2023/05/Group-107.png"  >	</a>
                    </div>
        </div>
</template>
<script>
 export default{
        name:'FooterBar'
    }
</script>
<style>
.footer-wrapper
{
    background-color:#efefef;
    display: flex;
    width: 100%;
    flex-direction: column;
    z-index: -5;
    position: relative;

}
.footer-wrapper .upper-div
{
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
    margin: auto;
    padding: 40px;
    text-align: right;
}
.footer-wrapper .upper-div .important-links
{
    padding: 10px;
    font-size: 25px;
    font-weight: 600;
}
.footer-wrapper .upper-div .important-links ul 
{
    list-style: none;
    margin:0 ;
    font-size: 17px;
    margin-right: 5px;
    cursor: pointer;
}
 .lab-boy
{
    position: absolute;
    left: 0;
    bottom:10px;
    z-index:1000;
}
@media screen and (max-width: 768px) {
    .lab-boy
    {
        position: relative;
        left: 0;
        bottom:10px;
    }
    .footer-wrapper .upper-div
    {
        flex-direction: column;
    }
}
</style>
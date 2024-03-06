<template>
    <div>
        <NavBar/>
            <div class="contact-form">
                <div class="right-container">
                   <div class="right-title">
                    تواصل معانا
                   </div>
                   <div class="btn-icon">
                        <i style="padding-right: 10px;font-size: 40px;" 
                        class="fa-solid fa-user"></i>
                        <i style="padding-right: 10px;font-size: 40px;" 
                        class="fa-brands fa-youtube"></i>
                        <i style="padding-right: 10px;font-size: 40px;" 
                        class="fa-brands fa-twitter"></i>
                        <i style="padding-right: 10px;font-size: 40px;"
                        class="fa-brands fa-telegram"></i>
                        <i style="padding-right: 10px;font-size: 40px;" 
                        class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div class="form-container">
                    <form>
                        <div class="inside-form">
                            <div>
                                <label>الاسم كامل</label>
                            </div>
                            <div>
                                <input type="text" placeholder="الاسم كامل" required/>
                            </div>
                            </div>
                            <div class="inside-form">
                                <div>
                                    <label>بريد إلكتروني</label>
                                </div>
                                <div>
                                    <input type="text" placeholder="بريد إلكتروني" required/>
                                </div>
                            </div>
                            <div class="inside-form">
                                <div>
                                    <label>الرسالة</label>
                                </div>
                                <div>
                                    <input type="text" placeholder="الرسالة" required/>
                                </div>
                            </div>
                            <div class="inside-form">
                                <div>
                                    <label>الاسم كامل</label>
                                </div>
                                <div>
                                    <textarea type="text" placeholder="الاسم كامل" required></textarea>
                                </div>
                            </div>
                            <div class="inside-button">
                                <button>ارسال الرسالة</button>
                            </div>
                        </form>
                </div>
            </div>
        <FooterBar/>
    </div>
</template>
<script>
import NavBar from '@/components/global/NavBar.vue';
import FooterBar from '@/components/global/FooterBar.vue';

export default{
    name:'ContactUsPage',
    components:{NavBar,FooterBar}
}
</script>
<style scoped>
.contact-form
{
    display: flex;
    width: 80%;
    margin:100px auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    background-color: var(--color-primary);
    padding: 20px;
    border-radius: 30px;
}
.form-container
{
    padding: 20px;
    border: 0.5px solid #a2a2a2bb;
    border-radius: var(--box-border-radius);
    width: 50%;
    background-color: #ffffff;
}
.inside-form
{
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
    font-weight: 200;
    font-size: 12px;
}
.inside-form label
{
    padding: 5px;
}
.inside-form input,textarea
{
    text-align: right;
    background-color:#f2f4f7;
    border-radius: var(--button-border-radius);
    font-size: 12px;
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
}
.inside-button
{
    display: flex;
    color: #f2f4f7;
    justify-content: end;
}
.inside-button button
{
    background-color: var(--color-primary);
    padding: 5px 10px;
    border-radius: var(--button-border-radius);
}
.right-container
{
    display: flex;
    padding: 30px;
    width: 50%;
    flex-direction: column;
}
.right-title
{
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    padding-bottom: 30px;
    border-bottom:3px solid #ffffff;
    text-align: right;
}
.btn-icon
{
    padding: 40px;
    color: #ffff;
    display: flex;
    justify-content: end;
}
@media screen and (max-width: 760px) {
    .contact-form
    {
        flex-direction: column;
        width: 100%;
    }
    .right-container , .form-container
    {
        width: 100%;
    }

}

</style>
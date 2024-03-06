
<template>
    <div class="wrapper-container">
        <form @submit.prevent="submitForm">
        <div style="flex:1;
              width:100%;
              text-align: right;
              padding: 10px 0px;
              font-size: 25px;
              ">تسجيل الدخول</div>
        <div class="rigister">
            <div class="form-group">
                <div class="form-input">
                    <lable class="label-name">اسم المستخدم</lable>
                    <input type="text"
                             placeholder="أدخل اسم المستخدم" 
                             v-model="name" 
                             required
                             />
                </div>
                <div class="form-input">     
                    <lable class="label-name">كلمة المرور</lable>
                    <input type="password" 
                            placeholder="أدخل كلمة المرور"
                            v-model="password" 
                            required
                            />
                </div>
                <div class="form-button">
                    <div>
                        <button type="submit">تسجيل الدخول</button>
                    </div>
                    <div class="rember-button">
                        <div style="padding-right:10px ;">
                            <a>كلمة المرور المفقوده</a>
                        </div>
                        <span>تذكرني</span>
                        <div>
                            <input type="checkbox" id="myCheckbox">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!formValid && formSubmitted"  class="err-msg">
             كلمة المرور أو أسم المستخدم غير صحيح
        </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'SignIn',
        data() {
        return {
            name: '',
            password: '',
            formSubmitted: false
        };
    },
    computed: {
        formValid() {
            return this.name.trim() !== '' && this.password.trim() !== '';
            }
    },
    methods: {
                submitForm() {
            this.formSubmitted = true;

            if (this.nameValid && this.passwordValid) {
                // Form submission logic here
                console.log('Form submitted successfully');
            }
        }
    } 
}
</script>
<style scoped>
.wrapper-container
{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.rigister{
    background-color: #3858e9;
    display: flex;
    justify-content: center;
    padding: 0px 50px;
    width: 100%;
    color:#eef1f7;
}
.wrapper-container .rigister input
{
    display: block;
    height: 45px;
    width: 200px;
    border: none;
    border-radius: var(--input-border-radius);
    text-align: right;
    width: 100%;
    font-family: "Almarai", sans-serif;
    padding-right:10px;
    font-size: 14px;
    background:#eef1f7;
}
.wrapper-container .rigister .label-name
{
    padding: 10px 0px;
    display: block;
    font-size: 12px;
    font-weight: 600;
}
.wrapper-container .rigister .form-group
{
    padding: 20px 20px;
    width: 100%;
}
.wrapper-container .rigister .form-input
{
    padding: 10px 0;
    text-align: right;
}
.wrapper-container .rigister .form-button
{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
}
.wrapper-container .rigister button
{
    padding: 10px 20px;
    background-color:var(--color-primary);
    border: none;
    color: #eef1f7;
    border-radius: var(--button-border-radius);
    font-size: 20px;
    font-family: "Almarai", sans-serif;
    cursor: pointer;
}
.wrapper-container .rigister .rember-button
{
    display: flex;
    align-items: center;
}
.wrapper-container .rigister .rember-button a
{
    text-decoration: none;
    flex: 1;
    font-size: 10;
    cursor: pointer;
}
.err-msg
{
    background-color: #fce5e5;
    height: 50px;
    width: 100%;
    margin-top: 10px;
    color: #e94b42;
    align-items: center;
    justify-content: end;
    display: flex;
    padding-right: 10px;
}
@media screen and (max-width: 600px) {

    .wrapper-container .rigister .form-button
    {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
   .wrapper-container
   {
    flex-direction: column;
   }
}
</style>
<template>
    <div class="wrapper-container">
        <form @submit.prevent="submitFormRig">
        <div style="flex:1;
              width:100%;
              text-align: right;
              padding: 10px 0px;
              font-size: 25px;
              ">قم بالتسجيل</div>
        <div class="rigister">
            <div class="form-group">
                <div class="form-input">
                    <lable class="label-name">البريد الالكتروني</lable>
                    <input type="text" 
                            name="email"
                            placeholder="أدخل البريد الالكتروني"
                            v-model="formData.email" 
                             />
                    <div v-if="erros_msg.email"  class="err-msg">
                        {{ erros_msg.email[0] }}
                    </div>
                </div>
                <div class="form-input">     
                    <lable class="label-name">كلمة المرور مرة أخرى</lable>
                    <input type="password" 
                            name="password_confirmation"
                            placeholder="تأكيد كلمة المرور"
                            v-model="formData.password_confirmation" 
                            />
                    <div v-if="erros_msg.password_confirmation"  class="err-msg">
                        {{ erros_msg.password_confirmation[0] }}
                    </div>
                </div>
                <div class="form-button">
                    <button>التسجيل</button>
                </div>
            </div>
            <div class="form-group">
                <div class="form-input">    
                    <lable class="label-name">إسم المستخدم</lable>
                    <input type="text" 
                            placeholder="أدخل أسم المستخدم"
                            name="user_name"
                            v-model="formData.user_name" 
                             />
                    <div v-if="erros_msg.user_name"  class="err-msg">
                        {{ erros_msg.user_name[0]}}
                    </div>
                </div>
                <div class="form-input">    
                    <lable class="label-name"> كلمة المرور</lable>
                    <input type="password" 
                            name="password"
                            placeholder="أدخل كلمة المرور"
                            v-model="formData.password" 
                            />
                        <div v-if="erros_msg.password"  class="err-msg">
                            {{ erros_msg.password[0] }}
                        </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'SignUp',
    data(){
        return {
            formData:{
                email:'',
                user_name: '',
                password:'',
                password_confirmation: '',
                },
                erros_msg:''
            };
    },
    computed: {
       
    },
    methods: {
         submitFormRig() {
            var formData = new FormData();
            formData.append('user_name' , this.formData.user_name);
            formData.append('email' , this.formData.email);
            formData.append('password' , this.formData.password);
            formData.append('password_confirmation' , this.formData.password_confirmation);
            
            axios.post('https://connectin.c1.is/api/createUser', formData)
                    .then(response => {
                        // Handle successful response
                        console.log(response.data);
                        this.erros_msg=response.data.errors
                    })
                    .catch(error => {
                        // Handle error
                        if (error.response) {
                        // The request was made and the server responded with a status code
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                        } else {
                        // Something else happened while setting up the request
                        console.log('Error', error.message);
                        }
                        console.log(error.config);
                    });
                        
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
    background-color: #eef1f7;
    display: flex;
    padding: 40px 50px;
    width: 100%;
    padding: 0px 50px;
}
.wrapper-container .rigister input
{
    display: block;
    height: 45px;
    border: none;
    width: 100%;
    text-align: right;
    padding-right:10px;
    border-radius: var(--input-border-radius);
    font-family: "Almarai", sans-serif;
    font-size: 14px;
    background-color:#ffffff;
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
    justify-content: left;
}
.wrapper-container .rigister button
{
    padding: 10px 20px;
    background-color: var(--color-primary);
    border: none;
    color: #eef1f7;
    border-radius: var(--button-border-radius);
    font-size: 20px;
    font-family: "Almarai", sans-serif;
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
    .wrapper-container .rigister .form-group
    {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    .rigister 
    {
        flex-direction: column-reverse;
    }
    .wrapper-container
   {
    flex-direction: column;
   }
}
</style>
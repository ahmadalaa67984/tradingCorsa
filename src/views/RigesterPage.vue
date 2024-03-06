<template>
  <NavBar></NavBar>
  <div class="wrapper-container">
    <SignUp class="register-element"/>
    <SignIn class="register-element"/>
  </div>
  <FooterBar/>
</template>
<script>
import SignUp from '../components/rigesterComponents/SignUp.vue';
import SignIn from '../components/rigesterComponents/SignIn.vue'
import NavBar from '../components/global/NavBar.vue';
import FooterBar from '../components/global/FooterBar.vue';

export default{
    name:'RigesterPage',
    components:{
    NavBar,
    SignUp,
    SignIn,
    FooterBar
}
}

</script>
<style>
.wrapper-container
{
  display: flex;
  width: 80%;
  margin: 60px auto;
}
.register-element
{
  flex: 1;
  margin: 0 10px;
}
@media screen and (max-width: 940px) {
  .wrapper-container
  {
    width: 90%;
    margin: 60px auto;
    flex-direction: column-reverse;
  }
  .register-element
  {
    flex: 1;
    margin: 0 5px;
  }
}
</style>
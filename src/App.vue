<template>
    <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components:{
  
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
:root {
  --color-primary: #3350A3;
  --color-secondary: #385bce;
  --button-border-radius:5px;
  --input-border-radius:3px;
  --box-border-radius:20px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Almarai", sans-serif;
}
.router-link-style
{
text-decoration: none; /* Remove underline */
  color: inherit; 
}
</style>

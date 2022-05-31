<template>
  <div id="app">
    <nav>
      <div class="mobileMenu" @click="addClickEvent">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
      </div>
      <ul class="navList">
        <li><h1 class="titleRoom">room</h1></li>
        <li><router-link :to="{name: 'home'}">home</router-link></li>
        <li><router-link :to="{name: 'shop'}">shop</router-link></li>
        <li><router-link :to="{name: 'about'}">about</router-link></li>
        <li><router-link :to="{name: 'contact'}">contact</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  
</script>


<style lang="scss">

@import './StylesSass/principal.scss';

</style>

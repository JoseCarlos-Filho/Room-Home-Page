<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <h1>room</h1>
        </li>
        <li>
          <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'shop'}">shop</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">about</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contact'}">contact</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>


<style lang="scss">
@import './StylesSass/principal.scss';
</style>

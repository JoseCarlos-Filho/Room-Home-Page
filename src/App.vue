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
@import url('https://fonts.googleapis.com/css2? family= Lato:wght@300;400;700 & family= League+Spartan:wght@500;600;700 & family= Manrope & family= Montserrat:wght@100 & family= Viaduto:wght@400;700 & display=swap');

#app {
  font-family: Spartan;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}



nav {
  padding: 30px;

  li {
    list-style: none;
    display: inline;
    margin: 10px 10px;
  }

  a {
    font-weight: 500;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

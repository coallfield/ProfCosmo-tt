<template>
    <header class="header">

        <div class="header__items">
            <div class="header__items__app-name">
                <span @click="$router.push('/')" class="header__items__app-name__name">TODO</span>
            </div>
            <nav class="header__items__navbar">
                <RouterLink class="header__items__navbar__link" to="/">Todos</RouterLink>
                <RouterLink class="header__items__navbar__link" to="/login">Login</RouterLink>
                <RouterLink class="header__items__navbar__link" to="/logout">Logout</RouterLink>
            </nav>
        </div>

    </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;

  .header__items {
   
    width: 100%;
    height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .header__items__app-name {
          .header__items__app-name__name {
            font-size: xx-large;
            font-weight: 600;
            cursor: pointer;
          }
      }
      .header__items__navbar {
        display: flex;
        flex-direction: row;
        grid-gap: 10px;
        .header__items__navbar__link {
          text-decoration: none;
          color: #d1d1d1;

          font-size: 20px;
        }
        .header__items__navbar__link:hover {
          text-decoration: underline;
        }
      }
  }

}
</style>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import { onMounted } from 'vue';
import { useUserStore } from './stores/useUserStore';
onMounted(async () => {
  if (localStorage.getItem('accessToken')) {
      useUserStore().checkAuth()
  }
})
</script>

<template class="app">
  <AppHeader></AppHeader>
  <RouterView />
</template>

<style scoped lang="scss">





</style>

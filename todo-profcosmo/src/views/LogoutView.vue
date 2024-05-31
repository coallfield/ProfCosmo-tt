<template>

    <section class="logout-button">
        <UIFormButton @click="userStore.logout" style="width: 300px; margin-top: 20px;">Logout</UIFormButton>
    </section>
</template>

<script lang="ts" setup>
import UIFormButton from '@/components/UI/form/UIFormButton.vue'
import {useUserStore} from '@/stores/useUserStore'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()
onMounted(() => {
    if(!localStorage.getItem('accessToken')) {
        router.push('/login')
    }
})
</script>


<style lang="scss" scoped>
    .logout-button {
        height: 100%;
    min-height: 94.8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
</style>

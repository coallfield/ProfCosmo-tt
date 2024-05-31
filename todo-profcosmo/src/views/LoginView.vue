<template>
    <div class="login-page">
        <div class="login-page__login-form-container">
            <UIForm @submit.prevent="login(userData.email, userData.password)" buttonText="Login" formTitle="Login">
                <UIFormInput :value="userData.email" @inputData="(value: string) => userData.email = value"
                    labelText="Email" id="email" type="email"></UIFormInput>
                <UIFormInput :value="userData.password" @inputData="(value: string) => userData.password = value"
                    labelText="Password" id="password" type="password"></UIFormInput>
                <UIAttentionMessage :isError="userStore.isError" :isWaiting="userStore.isWaiting"
                    :errorMessage="userStore.errorMessage"></UIAttentionMessage>
            </UIForm>
        </div>
        <footer class="footer"></footer>
    </div>


</template>


<script lang="ts" setup>
import UIFormInput from '@/components/UI/form/UIFormInput.vue'
import UIForm from '@/components/UI/form/UIForm.vue'
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
import { ApiInteraction } from '@/services/ApiInteraction';
import UIAttentionMessage from '@/components/UI/form/UIAttentionMessage.vue'
const userStore = useUserStore()
const {login} = ApiInteraction()
const userData = {
    email: '',
    password: ''
}
const router = useRouter()

onMounted(() => {
    if(localStorage.getItem('accessToken')) {
        router.push('/')
    }
})

</script>


<style lang="scss" scoped>
.login-page {
    height: 100%;
    min-height: 94.8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    
        .login-page__login-form-container {
            width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        }
    

}
</style>
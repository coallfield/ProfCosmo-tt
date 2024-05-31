<template>
    <div class="todos-page">
        <section>
            <div class="todos-creator">
                <UIForm @submit.prevent="createTodo(todoData.title, todoData.body, todoData.email)" formTitle="Create a task" buttonText="Create">
                    <UIFormInput :value="todoData.title" @inputData="(value: string) => todoData.title = value" labelText="Task title" id="title" type="text"></UIFormInput>
                    <UIFormInput :value="todoData.body" @inputData="(value: string) => todoData.body = value" labelText="Task body" id="body" type="text"></UIFormInput>
                    <UIFormInput :value="todoData.email" @inputData="(value: string) => todoData.email = value" labelText="User email" id="email" type="email"></UIFormInput>
                    <UIAttentionMessage :isError="todosStore.isError" :isWaiting="todosStore.isWaiting" :errorMessage="todosStore.errorMessage"></UIAttentionMessage>
                </UIForm>
            </div>
        </section>
        <section  class="todos-filter">
            <UISelect @change="sortKey = (($event.target as HTMLSelectElement).value) as SortKey"> </UISelect>
        </section>
        <section>
            <ToDoList :sortedTodos="sortedTodos"></ToDoList>
        </section>
        <section class="logout-button">
            <UIFormButton @click="userStore.logout"  style="width: 300px; margin-top: 20px;">Logout</UIFormButton>
        </section>
        

    </div>
</template>

<script lang="ts" setup>
import UIForm from '@/components/UI/form/UIForm.vue'
import UIFormButton from '@/components/UI/form/UIFormButton.vue';
import UIFormInput from '@/components/UI/form/UIFormInput.vue'
import ToDoList from '@/components/todos/ToDoList.vue'
import { onMounted, computed, ref } from 'vue';
import { useTodosStore } from '@/stores/useTodosStore';
import { useUserStore } from '@/stores/useUserStore';
import { ApiInteraction } from '@/services/ApiInteraction';
import UIAttentionMessage from '@/components/UI/form/UIAttentionMessage.vue'
import type { SortKey } from '@/types/SortKey';
import UISelect from '@/components/UI/UISelect.vue'
import router from '@/router';
const userStore = useUserStore()
const todosStore = useTodosStore()
const {createTodo} = ApiInteraction()

const sortKey = ref<SortKey>('')
const todoData = {
    title: '',
    body: '',
    email: ''
}

const sortedTodos = computed(() => {

        switch(sortKey.value) {
        case 'title':
            return todosStore.todos.slice().sort((a, b) => a.title.localeCompare(b.title))
        case 'body': 
            return todosStore.todos.slice().sort((a, b) => a.body.localeCompare(b.body))
        case 'email':
            return todosStore.todos.slice().sort((a, b) => a.email.localeCompare(b.email))
        case 'status':
            return todosStore.todos.slice().sort((a, b) => a.status === b.status ? 0 : a.status === 'complete' ? -1 : 1)
        case 'id':
            return todosStore.todos.slice().reverse()
        default: 
            return todosStore.todos;
    }
 
    
    
})

onMounted(() => {
    if(!localStorage.getItem('accessToken')) {
        router.push('/login')
    }
        todosStore.getTodos()
   
})
</script>



<style scoped lang="scss">
.todos-page {
    width: 100%;
    height: 100%;
    min-height: 94.8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .todos-creator {
        margin-top: 10px;
        width: 500px;
        height: auto;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0px;
        position: relative;
    }
    .todos-filter {
        margin-top: 60px;
    }

    
.logout-button {
    margin-top: auto;
    margin-bottom: 20px;
}


}

@media(max-width: 505px) {
    .todos-creator {
        width: 100% !important;
    }
}
</style>
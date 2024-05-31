<template>
<div class="todos-list__todo">
                <section class="todos-list__todo__header">
                    <span class="todos-list__todo__header__title">{{ props.todo.title }}</span>
                </section>
                <section class="todos-list__todo__body">
                    <textarea  
                        @change="emits('inputData', ($event.target as HTMLInputElement).value)"
                        v-if="isEditing"
                        v-bind:value="props.todo.body"
                        maxwidth="300"
                        :style="{ resize: isEditing ? 'vertical' : 'none', border: isEditing ? '1px solid #d1d1d1' : 'none'}" 
                        class="todos-list__todo__body__text">
                    </textarea>
                    <span class="todos-list__todo__body__text_static" v-else>{{ props.todo.body }}</span>
                </section>
                <section class="todos-list__todo__status">
                    <div class="todos-list__todo__status__info">
                        <span>Author: {{ props.todo.email }}</span>
                        <span>Status: 
                            <span v-if="!isEditing">{{ props.todo.status }}</span>
                            <input 
                                @change="changeStatus(($event.target as HTMLInputElement).checked)" 
                                :checked="isChecked" 
                                class="todos-list__todo__status__info__checkbox" 
                                v-else 
                                type="checkbox">
                        </span>
                    </div>
                   
                    <div v-if="userStore.userData.role === 'admin'">
                        <span @click="isEditing=true" v-if="!isEditing" class="todos-list__todo__status__edit-button">Edit</span>
                        <span @click="todosStore.editTodo(isChecked, props.todo.body, props.todo.id), isEditing=false" v-else class="todos-list__todo__status__edit-button">Save</span>
                    </div>
                </section>
                
            </div>
</template>

<script lang="ts" setup>
import type { ITodo } from '@/interfaces/ITodo';
import { useTodosStore } from '@/stores/useTodosStore';
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';
const props = defineProps<{todo: ITodo}>()
const userStore = useUserStore()
const todosStore = useTodosStore()
const isEditing = ref(false)
const isChecked = ref(props.todo.status === 'complete' ? true : false)
const emits = defineEmits(['inputData', 'changeData'])




function changeStatus(event: boolean) {
    emits('changeData', event)
    isChecked.value = event
}

</script>

<style lang="scss" scoped>
.todos-list__todo {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: auto;
    border: 1px solid #d1d1d1;
    overflow: hidden;


    .todos-list__todo__header {
        display: flex;
        flex-direction: row;
        align-items: center;

        height: 30px;
        padding: 5px 10px;

        .todos-list__todo__header__title {
            font-weight: bold;
            font-size: large;
            flex-grow: 1;
            text-align: center;
        }
    }

    .todos-list__todo__body {

        width: 100%;
        text-wrap: wrap;
        overflow-wrap: break-word;
        overflow: hidden;
        text-align: center;
        padding: 0px 10px;
        .todos-list__todo__body__text {
            height: auto;
            min-height: 50px;
            background: none;
            outline: none;
            padding: 10px 10px;
            overflow: hidden;
            font-size: 14px;
            color: #d1d1d1;
            text-align: center;
            width: 300px;


        }

        .todos-list__todo__body__text_static {
            height: auto;
            padding: 10px 10px;
            min-height: 50px;
            font-size: 14px;
        }
    }

    .todos-list__todo__status {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px 10px;
        grid-gap: 3px;

        .todos-list__todo__status__info {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            grid-gap: 20px;

            .todos-list__todo__status__info__checkbox {
                background-color: none;
                background: none;
            }
        }



        .todos-list__todo__status__edit-button:hover {
            text-decoration: underline;
            cursor: pointer;
        }




    }

}

@media(max-width: 455px) {
    .todos-list__todo {
        width: 280px;
        .todos-list__todo__body  {
            padding: 10px
        }
        .todos-list__todo__status__info {

            flex-direction: column;
            justify-content: center !important;
            align-items: center;
            grid-gap: 2px !important;
        }
        .todos-list__todo__body__text {
            
            width: 200px !important;


        }


    }
}
</style>
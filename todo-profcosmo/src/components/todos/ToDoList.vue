<template>
    <div class="pagination">
            <UIFormButton style="width: 150px;" @click="prevPage" :disabled="currentPage === 1">Previous</UIFormButton>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <UIFormButton style="width: 150px;" @click="nextPage" :disabled="currentPage === totalPages">Next</UIFormButton>
</div>
<div class="todos-list">
    <ToDo 
        @inputData="(value: string) => todo.body = value" 
        @changeData="(value: boolean) => value ? todo.status = 'complete' : todo.status =  'incomplete'"
        v-for="todo in paginatedTodos" 
        :key="todo.id" 
        :todo="todo"></ToDo>
</div>

</template>


<script lang="ts" setup>
import ToDo from '@/components/todos/ToDo.vue'
import { ref, computed } from 'vue';
import UIFormButton from '../UI/form/UIFormButton.vue';
import type { ITodo } from '@/interfaces/ITodo';


const props = defineProps<{
    sortedTodos: ITodo[]
}>()

const currentPage = ref(1);
const todosPerPage = 3;


const totalPages = computed(() => {
    return Math.ceil(props.sortedTodos.length / todosPerPage);
});

const paginatedTodos = computed(() => {
    const start = (currentPage.value - 1) * todosPerPage;
    const end = start + todosPerPage;
    return props.sortedTodos.slice(start, end);
});

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}
</script>


<style lang="scss" scoped>
.todos-list {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        grid-gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 0px 15px;
}

.pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    margin-top: 20px;

}

@media(max-width: 455px) {
    .pagination {
       flex-direction: column;
    }
}
</style>
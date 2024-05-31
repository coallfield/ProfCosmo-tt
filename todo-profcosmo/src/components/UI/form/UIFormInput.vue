<template>
    <div class="todos-creator__form__input-container">
        <label :for="props.id">{{props.labelText}}</label>
        <input 
            
            :value="props.value" 
            @input="emits('inputData', ($event.target as HTMLInputElement).value)" 
            class="todos-creator__form__input-container__input" 
            :id="props.id" 
            :type="props.type">
       
    </div>
</template>

<script lang="ts" setup>


const props = defineProps<{
    labelText: string, 
    id: string,
    type: string,
    value?: string,
   
}>()

const emits = defineEmits(['inputData'])

</script>

<style lang="scss" scoped>
.todos-creator__form__input-container {
    display: flex;
    flex-direction: column;
    grid-gap: 5px;

    .todos-creator__form__input-container__input {
        width: 400px;
        height: 50px;
        outline: none;
        background: none;
        border: 1px solid #d1d1d1;
        padding: 0px 10px;
        color: #d1d1d1;
   
    }

    .todos-creator__form__input-container__input:hover {
        border: 2px solid #d1d1d1;
    }
    .todos-creator__form__input-container__valid-error {
        color: red
    }
   
}

@media(max-width: 455px) {
    .todos-creator__form__input-container__input {
        width: 300px !important;
    }
}
</style>
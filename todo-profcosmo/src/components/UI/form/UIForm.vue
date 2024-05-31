<template>
    <form novalidate class="todos-creator__form">
        <h2 class="todos-creator__form__title">{{ props.formTitle }}</h2>
        <slot></slot>
        <UIFormButton style="width: 300px; margin-top: 20px;">{{ props.buttonText }}</UIFormButton>
    </form>
</template>

<script lang="ts" setup>

import UIFormButton from '@/components/UI/form/UIFormButton.vue'

const props = defineProps<{
  
    formTitle: string,
    buttonText: string

}>()
</script>

<style lang="scss" scoped>
.todos-creator__form {
    display: flex;
    flex-direction: column;

    align-items: center;
    grid-gap: 10px;

}

.todos-creator__form__title {
    cursor: default;
}
</style>
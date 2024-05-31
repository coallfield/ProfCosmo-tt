<template>
    <p v-if="props.isError" class="form__attention-message">{{ props.errorMessage }}</p>
    <p v-if="props.isWaiting" class="form__attention-message">Wait</p>
</template>

<script lang="ts" setup>
const props = defineProps<{

    isError: boolean,
    isWaiting: boolean,
    errorMessage: string

}>()

</script>

<style scoped lang="scss">
.form__attention-message {
    color: red;
   text-align: center;
}
</style>
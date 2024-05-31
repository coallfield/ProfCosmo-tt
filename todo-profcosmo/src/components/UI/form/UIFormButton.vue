<template>
    <button  type="submit" class="todos-creator__form__button">
          <slot></slot>
    </button>
</template>




<style lang="scss" scoped>

            .todos-creator__form__button {
                height: 50px;
                outline: none;
                background: none;
                border: 1px solid #d1d1d1;
                padding: 0px 10px;
                color:#d1d1d1;
                cursor: pointer;
            }
            .todos-creator__form__button:hover {
                border: 2px solid #d1d1d1;
            }
</style>
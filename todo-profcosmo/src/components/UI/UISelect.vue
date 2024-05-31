<template>
    <select  class="todos-filter__select">
        <option disabled selected class="todos-filter__select__option">Filter todos</option>
        <option value="title" class="todos-filter__select__option">Filter by title</option>
        <option value="body" class="todos-filter__select__option">Filter by text</option>
        <option value="email" class="todos-filter__select__option">Filter by email</option>
        <option value="status" class="todos-filter__select__option">Filter by status</option>
        <option value="id" class="todos-filter__select__option">Filter by id</option>
    </select>
</template>

<style scoped lang="scss">


            .todos-filter__select {
                height: 50px;
                width: 300px;
                outline: none;
                background: none;
                border: 1px solid #d1d1d1;
                padding: 0px 10px;
                color: #d1d1d1;
                cursor: pointer;
                .todos-filter__select__option {
                    background-color: #302b63;
                    border: 1px solid #d1d1d1;
                }
            }

        
</style>
<template>
    <div class="List">

        <ul v-if="listTodos.length">
            <li v-for="(todo, index) in listTodos" :key="index" :class="{
                'completed': todo.done,
            }">
                <span v-if="todo.done"> 👍</span>
                <label>

                    <input type="checkbox" :checked="todo.done" @input="toggleTodo(todo.id)" />
                    {{ todo.desc }}

                </label>

                <button class="responses" @click="deleteTodo(todo.id)">
                    🗑️
                </button>

            </li>
        </ul>

        <p class="empty" v-else>
            No Todos here yet!
        </p>
    </div>
</template>

<script>
import { useTodoStore } from './../Helpers/injector'

export default {
    setup() {
        const { listTodos, toggleTodo, deleteTodo } = useTodoStore()


        return {
            listTodos,
            toggleTodo,
            deleteTodo
        }
    },

}
</script>


<style lang="scss" scoped>
ul,
li {
    margin: 0;
    padding: 0;
}

li {
    border-top: rgb(112, 106, 106) solid 1px;
    display: flex;
    justify-content: space-between;

    &:first-child {
        border-top: none;
    }

    label {
        padding: 8px 4px;
        width: 100%;
        display: cursor;

        &:hover {
            background: rgb(219, 217, 218);
        }
    }
}

.completed {

    label {

        text-decoration: line-through;
        color: #aaa;
        margin-right: 1em;
    }
}

.empty {
    font-size: 14px;
    color: rgb(71, 70, 70);
}

button.responses {
    background-color: transparent;
    color: white;
    border: none;
}

input[type=checkbox] {
    display: none;
}
</style>

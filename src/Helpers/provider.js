import { FuncSign } from './symbol'
import { provide } from 'vue'
import useTodoStore from './todoStore'

export const TodoStoreProvider = {
    setup(props, context) {
        provide(FuncSign, useTodoStore)
        console.info({ context })
        return () => context.slots.default()
    },
}
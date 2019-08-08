import { ADD_TODO, DELETE_TODO, CHANGE_TEXT } from '../constants/action-type';

export const addTodo = (todo: any) => {
    return {
        type: ADD_TODO,
        payload: {
            todo: todo,
        }
    }
}

export const deleteTodo = (index: number) => {
    return {
        type: DELETE_TODO,
        payload: {
            index: index,
        }
    }
}

export const changeInput = (input: string) => {
    return {
        type: CHANGE_TEXT,
        payload: {
            input: input,
        }
    }
}
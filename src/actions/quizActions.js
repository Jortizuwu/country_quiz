import { types } from "../types/types"

export const incrementPointer = (pointer) => ({
    type: types.quiz_corect,
    payload: pointer + 1
})

export const resetPointerQuiz = () => ({
    type: types.quiz_reset,
})
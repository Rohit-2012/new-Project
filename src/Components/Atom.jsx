import { atom } from "recoil"
export const taskListAtom = atom({
    key: 'tasks',
    default: []
})
export const dataAtom = atom({
    key: 'input',
    default: ''
})
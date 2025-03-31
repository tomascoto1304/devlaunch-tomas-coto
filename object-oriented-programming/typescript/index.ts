import { Prompt } from './../../node_modules/@types/prompt-sync/index.d';
interface Account{
    id: string | number,
    name: string,
    balance: number
    
}

const createAccount = (id: number, name: string, balance: number): Account =>{
    return{
        id,
        name,
        balance
    }
}

const acc1 = createAccount(1,'', 0)

import * as PromptSync from 'prompt-sync';
const prompt = PromptSync();

const result = prompt('message: ')

console.log(result)
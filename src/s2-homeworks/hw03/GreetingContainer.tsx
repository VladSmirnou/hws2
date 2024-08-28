import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { Users } from './HW3'

type GreetingContainerPropsType = {
    users: Users // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

const nameIsInvalid = (name: string): boolean => {
    return name.trim() === '';
}

export const pureAddUser = (
    name: string,
    setError: (e: string) => void,
    setName: (n: string) => void,
    addUserCallback: (name:string) => void
) => {
    if (nameIsInvalid(name)) {
        setError("Ошибка! Введите имя!");
        return;
    }
    setError('');
    setName('');
    addUserCallback(name);
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (e: string) => void) => { // если имя пустое - показать ошибку
    if (nameIsInvalid(name)) {
        setError("Ошибка! Введите имя!");
        return;
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.at(-1)?.name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

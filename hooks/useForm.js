import  { useState } from 'react'

export const useForm = (initialState) => {


    const [formState, setformState] = useState(initialState)

    // const { name, email, password } = formState;

    const reset = () => {
        setformState(initialState);
    }

    const handledInputChanged = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return [
        formState,
        handledInputChanged,
        reset
    ]
}

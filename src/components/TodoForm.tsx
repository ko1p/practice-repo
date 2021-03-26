import React, { useRef } from 'react'

interface IProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<IProps> = ({onAdd}) => {
    const titleRef = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(titleRef.current!.value)
            titleRef.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input onKeyPress={keyPressHandler} ref={titleRef} type='text' id="title" placeholder="Введите название дела" />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}
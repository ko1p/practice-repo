import React, { useState } from 'react'

type PropTypes = {
    title?: string,
    children?: never // чтобы запретить передачу children
}

export const Header: React.FC<PropTypes> = ({ title }: PropTypes) => {
    const [counter, setCounter] = useState<number>(1)

    const increase = (): void => {
        setCounter((prev: number) => prev + 1)
    }

    const decrease = (): void => {
        setCounter((prev: number) => prev - 1)
    }

    return (
        <>
            <h1>{title}</h1>
            <h3>{counter.toFixed()}</h3>
        </>
    )
}

Header.defaultProps = {
    title: 'Заголовка ещё нет'
}
import React, { FormEventHandler } from 'react'

interface Props {
    children: React.ReactNode;
    submitEvent: FormEventHandler<HTMLFormElement>;
}

export const Form: React.FC<Props> = ({ children, submitEvent }) => {
    return (
        <form onSubmit={submitEvent}>
            {children}
            <button type="submit" >تم
            </button>
        </form>
    )
}

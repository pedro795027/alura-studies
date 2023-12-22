import React, { ReactNode } from 'react';
import style from './Button.module.scss';

interface propsButton {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children: ReactNode,  
} 

export const Button: React.FC<propsButton> = ({ type, onClick, children}) => {
    return (
        <button className={style.button} type={type} onClick={onClick}>
            {children}
        </button>
    )
}


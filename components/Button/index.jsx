import classNames from "classnames"
import styles from './button.module.scss'

export const Button = ({ 
    children,
    variant = 'contained',
    onClick,
    disabled,
    className 
}) => {
    const classes = classNames(styles.button,
        styles[variant],
        {
            [styles.disabled]: disabled,
        },
        className
        )
    
    return <button className={classes} onClick={onClick} disabled={disabled}>
        {children}
    </button>
}
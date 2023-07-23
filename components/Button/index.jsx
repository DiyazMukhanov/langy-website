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

        const handleClick = (event) => {
            if ( ! disabled && onClick !== undefined) {
                onClick(event)
            }
        }
    
    return <button className={classes} onClick={handleClick}>
        {children}
    </button>
}
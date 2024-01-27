import classNames from "classnames"
import styles from './button.module.scss'

type Props = {
    children: string
    variant: string
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({
    children,
    variant = 'contained',
    onClick,
    disabled,
    className
}: Props) => {
    const classes = classNames(styles.button,
        styles[variant],
        className
    )

    return <button className={classes} onClick={onClick} disabled={disabled}>
        {children}
    </button>
}
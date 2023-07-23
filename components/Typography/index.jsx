import classNames from 'classnames'
import styles from './typography.module.scss'

export const Typography = ({element, children, size, className }) => {
    const classes = classNames(
        className,
        styles[size]
    )

    const Component = element
    return (
        <Component className={classes}>{children}</Component>
    )
}
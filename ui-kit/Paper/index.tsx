import { ReactElement } from 'react';
import styles from './Paper.module.scss';
import classNames from 'classnames';

type Props = {
    children: ReactElement | string
    className?: string
    onClick?: () => void
}

export const Paper = ({ children, className, onClick }: Props) => {
    return (
        <div className={classNames(styles.paper, className)} onClick={onClick}>
            {children}
        </div>
    )
}
import { ReactElement } from 'react';
import styles from './Paper.module.scss';
import classNames from 'classnames';

type Props = {
    children: ReactElement | string
    className?: string
}

export const Paper = ({ children, className }: Props) => {
    return (
        <div className={classNames(styles.paper, className)}>
            {children}
        </div>
    )
}
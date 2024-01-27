import styles from './Card.module.scss';
import classNames from 'classnames';

export const Card = ({ children, className }) => {
    return (
        <div className={classNames(styles.card, className)}>
            {children}
        </div>
    )
}
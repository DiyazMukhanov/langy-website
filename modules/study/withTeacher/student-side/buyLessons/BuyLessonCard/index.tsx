import styles from './BuyLessonCard.module.scss';

type Props = {
    packageText: string
    priceText: string
}

export const BuyLessonCard = ({ packageText, priceText }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.packageBlock}>{packageText}</div>
            <p className={styles.priceBlock}>{priceText}</p>
        </div>
    )
}
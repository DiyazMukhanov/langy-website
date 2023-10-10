import Image from 'next/image'
import PC from '../../public/images/PC.svg'
import Tick from '../../public/images/Tick.svg'
import Clock from '../../public/images/Clock.svg'
import styles from './AdvantageCard.module.scss'

export default function AdvantageCard({ iconType, textLineOne, textLineTwo, textLineThree }) {
    const icon = {
        pc: PC,
        tick: Tick,
        clock: Clock
    }
    return (
        <div className={styles.card}>
            <Image
           priority
           src={icon[iconType]}
           width={40}
           />
           <div className={styles.text}>
            <div className={styles.textLineOne}>{textLineOne}</div>
            {/* <div className={styles.textLineTwo}>{textLineTwo}</div>
            <div className={styles.textLineThree}>{textLineThree}</div> */}
           </div>
        </div>
    )
}
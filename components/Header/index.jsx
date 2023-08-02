import LogoBlue from '../../public/images/Logo-blue.svg'
import LogoBlueBottom from '../../public/images/Logo-blue-bottom.svg'
import Logo from '../../public/images/Logo.svg'
import styles from './Header.module.scss'
import Image from 'next/image'
import ButtonClose from '../../public/images/Button-close.svg'

export default function Header({ variant }) {
    if(variant === 'blue') {
        return (
            <>
            <div className={styles.blueContainer}>
            <Image
            priority
            src={Logo}
            width={60}
            />
            <p>Выйти</p>
            </div>

            <div className={styles.blueContainerMobile}>
              <div className={styles.logo}>
                <Image
                    priority
                    src={LogoBlue}
                    width={60}
                />
                <Image
                    priority
                    src={LogoBlueBottom}
                    width={20}
                />
                </div>
                <Image
                    priority
                    src={ButtonClose}
                    width={20}
                />
           
            </div>
            </>
            )
    }

    if(variant === 'white') {
        return (
            <>
              <div className={styles.whiteContainer}>
              <div className={styles.logo}>
                <Image
                    priority
                    src={LogoBlue}
                    width={80}
                />
                <Image
                    priority
                    src={LogoBlueBottom}
                    width={20}
                />
                </div>
                <div className={styles.profile}>
                   <p>Выйти</p>
                   <div className={styles.circle}>
                      D
                   </div>
                </div>
                </div>
              
            </>
        )
    }
   
}
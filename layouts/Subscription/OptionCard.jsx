import styles from './OptionCard.module.scss'
import classNames from 'classnames'


export default function OptionCard({type, onClick}) {
   return (
      <div className={styles.container} onClick={onClick}>
        <div 
        className={classNames(
            {[styles.headerMonth]: type === 'month'}, //3 months now
            {[styles.headerYear]: type === 'year'} // 6 months now
            )}>
            {type === 'month' ? (<p className={styles.white}>3 месяца</p>) : (<p className={styles.white}>6 месяцев</p>)}    
        </div>
         <div className={classNames({[styles.middle]: type === 'month'}, {[styles.middleYear]: type === 'year'})}>
            <div className={styles.price}>
            <span className={classNames({[styles.blue]: type === 'month'}, {[styles.orange]: type === 'year'})}>
              {type === 'month' ? 4830 : 6970}    
            </span> 
            
            <span>
            {type === 'month' ? (<> тг/за 90 дней</>) : (<> тг/за 180 дней</>)} 
            </span>
            </div>

            {/* {type === 'year' && (
                // <div className={styles.discount}>
                //     <p>Экономия</p>
                //     <p className={styles.deleted}>5000 тг</p>
                // </div>
            )} */}
         </div>
      </div>
    )
}
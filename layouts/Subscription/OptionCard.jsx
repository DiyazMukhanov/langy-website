import styles from './OptionCard.module.scss'
import classNames from 'classnames'


export default function OptionCard({type, onClick}) {
   return (
      <div className={styles.container} onClick={onClick}>
        <div 
        className={classNames(
            {[styles.headerMonth]: type === 'month'},
            {[styles.headerYear]: type === 'year'}
            )}>
            {type === 'month' ? (<p className={styles.white}>Месячная</p>) : (<p className={styles.white}>Годовая</p>)}    
        </div>
         <div className={classNames({[styles.middle]: type === 'month'}, {[styles.middleYear]: type === 'year'})}>
            <div className={styles.price}>
            <span className={classNames({[styles.blue]: type === 'month'}, {[styles.orange]: type === 'year'})}>
              {type === 'month' ? 2500 : 25000}    
            </span> 
            
            <span>
            {type === 'month' ? (<> тг/месяц</>) : (<> тг/год</>)} 
            </span>
            </div>

            {type === 'year' && (
                <div className={styles.discount}>
                    <p>Экономия</p>
                    <p className={styles.deleted}>5000 тг</p>
                </div>
            )}
         </div>
      </div>
    )
}
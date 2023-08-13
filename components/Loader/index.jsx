import styles from "./Loader.module.scss";
import {ThreeDots} from "react-loader-spinner";
import classNames from "classnames";


const Loader = ({small}) => {
   
    return (
        <div className={classNames(
            {[styles.small]: small === true},
            {[styles.spinner]: small === undefined},
            )}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loader
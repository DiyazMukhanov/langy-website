import styles from './Pagination.module.scss';
import Image from 'next/image';
import ArrowLeft from '../../public/icons/arrow-left.svg';
import ArrowRight from '../../public/icons/arrow-right.svg';
import { usePagination } from './usePagination';
import classnames from 'classnames';

export const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div
            className={classnames(styles.container, { [className]: className })}
        >
            {/* Left navigation arrow */}
            <div
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <Image
                    priority
                    src={ArrowLeft}
                    alt='left'
                />
            </div>
            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === '...') {
                    return <div className="pagination-item dots">&#8230;</div>;
                }

                // Render our Page Pills
                return (
                    <div
                        className={classnames(styles.item, {
                            [styles.selected]: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                );
            })}
            {/*  Right Navigation arrow */}
            <div
                className={classnames({
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <Image
                    priority
                    src={ArrowRight}
                    alt='right'
                />
            </div>
        </div>
    );
};
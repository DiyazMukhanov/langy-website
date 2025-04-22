import styles from "./Pagination.module.scss";
import Image from "next/image";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import { usePagination } from "./usePagination";
import classnames from "classnames";

export const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  const onNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className={classnames(styles.container, { [className]: className })}>
      {/* Left navigation arrow */}
      <div
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <ArrowLeft />
      </div>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "...") {
          return <div className="pagination-item dots">&#8230;</div>;
        }

        // Render our Page Pills
        return (
          <div
            className={classnames(styles.item, {
              [styles.selected]: pageNumber === currentPage,
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
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

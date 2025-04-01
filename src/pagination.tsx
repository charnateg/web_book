import { PaginationProps } from "./types";

export default function Pagination({ page, pageSize, total, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(total / pageSize);
  
    return (
      <div className="pagination">
        <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
          &lt;-
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>
          -&gt;
        </button>
      </div>
    );
  }
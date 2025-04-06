import React from "react"
import { Pagination } from "../../types/table"

export const TablePagination: React.FC<Pagination> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return(
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    )
}
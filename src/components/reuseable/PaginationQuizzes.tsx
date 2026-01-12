import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import React from 'react'

const PaginationQuizzes = ({currentPage,setCurrentPage,totalPage}:any) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <span className="page-link" style={{ cursor: "pointer" }} aria-label="Previous" onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage((pre:any) => pre - 1)
                                // getAllDoubtDetails(`page=${currentPage-1}&items_per_page=10`)
                            }
                    }}>
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>
                <li className="page-item"><span className="page-link" >{currentPage}/{Math.ceil((totalPage) / 6)}</span></li>

                <li className="page-item">
                    <span className="page-link" style={{ cursor: "pointer" }} aria-label="Next" onClick={() => {
                            if (currentPage < Math.ceil((totalPage) / 6)) {
                                setCurrentPage((pre:any) => pre + 1)
                                // getAllDoubtDetails(`page=${currentPage+1}&items_per_page=10`)
                            }
                    }}>
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default PaginationQuizzes
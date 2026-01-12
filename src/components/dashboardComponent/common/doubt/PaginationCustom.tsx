import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import React from 'react'

const PaginationCustom = ({currentPage,setCurrentPage,totalPage,setTotalPage,getAllDoubtDetails,status}:any) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <span className="page-link" style={{ cursor: "pointer" }} aria-label="Previous" onClick={() => {
                        if(status=="My"){
                            if (currentPage > 1) {
                                setCurrentPage((pre:any) => pre - 1)
                                getAllDoubtDetails(`page=${currentPage-1}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                            }
                        }
                        else if(status=="All"){
                            if (currentPage > 1) {
                                setCurrentPage((pre:any) => pre - 1)
                                getAllDoubtDetails(`page=${currentPage-1}&items_per_page=10`)
                            }
                        }
                    }}>
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>
                <li className="page-item"><a className="page-link" href="#">{currentPage}/{totalPage}</a></li>

                <li className="page-item">
                    <span className="page-link" style={{ cursor: "pointer" }} aria-label="Next" onClick={() => {
                        if(status=="My"){
                            if (currentPage < totalPage) {
                                setCurrentPage((pre:any) => pre + 1)
                                getAllDoubtDetails(`page=${currentPage+1}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                            }
                        }
                        else if(status=="All"){
                            if (currentPage < totalPage) {
                                setCurrentPage((pre:any) => pre + 1)
                                getAllDoubtDetails(`page=${currentPage+1}&items_per_page=10`)
                            }
                        }
                    }}>
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default PaginationCustom
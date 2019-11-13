import React from 'react'

const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage == i ? 'active' : '';

        pageLinks.push(<li className={`waves-effect${active}`} key={i} onClick={() => props.nextPage(i)}><a className="page-link" href="#"> {i} </a></li>)
    }
    return (
        <div className ="container">
            <nav aria-label="Page navigation" className ="Page-navigation">
                <ul className="pagination pag-container">
                    {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage -1)}><a className="btn btn-dark" role="button" href="#">Prev</a></li> : ""}
                    
                    {props.currentPage < props.pages + 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}><a className="btn btn-dark" role="button" href="#">Next</a></li> : ""}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
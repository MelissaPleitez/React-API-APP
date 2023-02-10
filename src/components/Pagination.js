import React from 'react'
import '../App.css';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    //functions whiches contains the logic of the pagination

    const previousPage = () => {
        onPrevious()
    }

    const nextPage = () => {
        onNext()
    }

    return (

        <nav aria-label="...">
            <ul className="pagination pagination-lg justify-content-center">
                {
                    prev ?
                        (<li className="page-item"><a class="page-link button-color" href="#" onClick={previousPage}>Previous</a></li>
                        ) :
                        null
                }

                {
                    next ? (
                        <li className="page-item"><a class="page-link button-color" href="#" onClick={nextPage}>Next</a></li>
                    ) :
                        null
                }


            </ul>
        </nav>


    )
}


export default Pagination
import { useContext } from 'react'
import { Pagination } from "react-bootstrap"
import './PaginateComp.css'

export const PaginateComp = () => {

    

    return (
        <Pagination size="lg" className="paginate">
            {
                [...Array(5)].map((_, ind) => (
                    <Pagination.Item key={ind}>
                        {ind + 1}
                    </Pagination.Item>
                ))
            }
        </Pagination>
    )
}


//onClick={()=>setPage(ind+1)} active={page===ind+1}
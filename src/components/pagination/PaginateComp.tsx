import { useDispatch } from 'react-redux'
import { useSelector } from '../../store'
import { Pagination } from "react-bootstrap"
import './PaginateComp.css'
import { changePage } from '../../actions/actions'

export const PaginateComp = () => {

    const dispatch = useDispatch()
    const { pages, page } = useSelector(state => state.custom)

    return (
        <Pagination size="lg" className="paginate">
            {
                [...Array(pages)].map((_, ind) => (
                    <Pagination.Item key={ind} onClick={() => dispatch(changePage(ind + 1))} active={page === ind + 1}>
                        {ind + 1}
                    </Pagination.Item>
                ))
            }
        </Pagination>
    )
}


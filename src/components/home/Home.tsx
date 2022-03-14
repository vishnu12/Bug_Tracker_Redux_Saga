import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './Home.css'
import { CardComp } from '../card/Card'
import { ModalComp } from '../modals/ModalComp'
import { PaginateComp } from '../pagination/PaginateComp'
import { useSelector } from '../../store'
import { changePages, getBugsRequest } from '../../actions/actions'



export const Home = () => {

    const dispatch = useDispatch()
    const { bugs } = useSelector(state => state.getBugs)
    const { success: addSuccess, error } = useSelector(state => state.addBug)
    const { success: removeSuccess } = useSelector(state => state.removeBug)
    const { success: editSuccess } = useSelector(state => state.editBug)
    const { success: changeStatusSuccess } = useSelector(state => state.changeBugStatus)
    const { search, sort, pages, page } = useSelector(state => state.custom)


    useEffect(() => {
        dispatch(getBugsRequest())
    }, [addSuccess, removeSuccess, editSuccess, changeStatusSuccess, search, sort, pages, page])


    return (
        <Container fluid className='home-container'>
            <ModalComp />
            {bugs.length == 0 && <h1 className='text-center my-4'>No Items Found...</h1>}
            <Row className='my-4'>
                {
                    bugs?.map((itm, ind) => {
                        return (
                            <Col sm={6} md={3} key={ind}>
                                <CardComp id={itm.id!} description={itm.description!} resolved={itm.resolved!} />
                            </Col>
                        )
                    })
                }
            </Row>
            <PaginateComp />
        </Container>
    )
}
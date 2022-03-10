import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import './Card.css'
import { changeStatusRequest, changeStatusRestore, getBugByIdRequest, openModalEdit, removeBugRequest, removeBugRestore } from '../../actions/actions'


type Props = {
    id: string,
    description: string,
    resolved: boolean
}

export const CardComp: React.FC<Props> = ({ id, description, resolved }) => {

    const dispatch = useDispatch()

    function handleEdit() {
        dispatch(getBugByIdRequest({ id }))
        dispatch(openModalEdit())
    }

    function handleDelete() {
        if (window.confirm('Are you sure?')) {
            dispatch(removeBugRequest({ id }))
            dispatch(removeBugRestore())
        }
    }

    function handleClick() {
        dispatch(changeStatusRequest({id,resolved:!resolved}))
        dispatch(changeStatusRestore())
    }

    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Header style={{ fontWeight: 'bolder' }} className='card-header'>
                <div className='card-header-child1'>
                    <h5>Bug ID : <span className='text-success'>{id}</span></h5>
                </div>
                <div className='card-header-child2'>
                    <AiOutlineClose className='icon' onClick={handleDelete} />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Bug Description</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" style={{ marginRight: '5px' }} onClick={handleEdit}>Edit</Button>
                <Button variant="primary" onClick={handleClick} disabled={resolved} >{resolved ? 'Resolved' : 'Mark As Resolved'}</Button>
                {resolved && <Button variant="primary" style={{ marginLeft: '5px' }} onClick={handleClick} >Reopen</Button>}
            </Card.Body>
        </Card>
    )
}

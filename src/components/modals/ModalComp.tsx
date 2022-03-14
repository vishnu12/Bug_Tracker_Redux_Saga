import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Form, Modal } from 'react-bootstrap';
import { Data } from '../../actions/actionTypes';
import { useSelector } from '../../store';
import './ModalComp.css'
import { addBugRequest, addBugRestore, editBugRequest, editBugRestore, modalClose } from '../../actions/actions';



export type Istate = Omit<Data, "resolved">


export const ModalComp: React.FC = () => {

    const { show, mode } = useSelector(state => state.modal)
    const { bug } = useSelector(state => state.getBug)


    const dispatch = useDispatch()

    const [values, setValues] = useState<Istate>({ id: '', description: '' })

    useEffect(() => {
        setValues({ id: bug.id, description: bug.description })
    }, [bug])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    function handleClick(): void {
        if (mode === 'Add Bug') {
            dispatch(addBugRequest({ id: values.id, description: values.description, resolved: false }))
            setValues({
                ...values,
                id: '',
                description: ''
            })

            dispatch(modalClose())
            dispatch(addBugRestore())

        } else if (mode === 'Edit Bug') {
            dispatch(editBugRequest({ id: values.id!, description: values.description! }))
            setValues({
                ...values,
                id: '',
                description: ''
            })
            dispatch(modalClose())
            dispatch(editBugRestore())
        }
    }


    return (
        <Modal
            show={show}
            onHide={() => dispatch(modalClose())}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {mode}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='modal-form'>
                    {
                        mode === 'Add Bug' &&
                        <Form.Group className='modal-form-group'>
                            <Form.Control type='text' id='bugId' name='id' value={values.id} placeholder='Bug Id' onChange={handleChange} />
                        </Form.Group>
                    }
                    <Form.Group className='modal-form-group'>
                        {
                            mode === 'Edit Bug' &&
                            <Form.Label className='text-primary' htmlFor='desc'>Edit Bug Description</Form.Label>
                        }
                        <Form.Control as="textarea" id='desc' name='description' value={values.description} placeholder='Description' onChange={handleChange} />
                    </Form.Group>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClick}>{mode === 'Add Bug' ? 'ADD' : 'EDIT'}</Button>
            </Modal.Footer>
        </Modal>
    )
}




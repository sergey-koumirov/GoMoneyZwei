import React, { useState } from "react";
import {Table, Row, Col, Button, Modal} from "react-bootstrap"
import {deleteCurrency} from "../../api"

const List = ({records, setMode, setRecord, loadRecords}) => {

    const [show, setShow] = useState(false);
    const [toDelete, setToDelete] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (record) => {
        setToDelete(record)
        setShow(true)
    };

    const setNewMode = ()=>{
        setRecord({name: '', code: '', tag: 'curr'})
        setMode('new')
    }

    const setEditMode = (record) => {
        setRecord({...record})
        setMode('edit')
    }

    const handleDelete = () => {
        deleteCurrency(toDelete).then(({errors})=>{
            if (Object.keys(errors).length == 0) {
                loadRecords()
            }
        })
        setShow(false)
    }

    return (
        <Row>
            <Col>
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th><Button variant="outline-primary" size="sm" onClick={setNewMode}>New</Button></th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Tag</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record)=>{
                            return (
                                <tr key={record.id}>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record);e.preventDefault() } }>{record.id}</a></td>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record);e.preventDefault() } }>{record.name}</a></td>
                                    <td>{record.code}</td>
                                    <td>{record.tag}</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" onClick={()=>{handleShow(record)}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}                            
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sure?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>No</Button>
                        <Button variant="primary" onClick={handleDelete}>Yes, delete</Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Row>
    )
};

export default List;
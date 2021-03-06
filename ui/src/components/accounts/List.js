import React, { useState } from "react";
import {Table, Row, Col, Button, Modal, Badge} from "react-bootstrap"
import {deleteAccount} from "../../api"

const List = ({records, setRecord, setMode, loadRecords}) => {

    const [show, setShow] = useState(false);
    const [toDelete, setToDelete] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (record) => {
        setToDelete(record)
        setShow(true)
    };

    const setNewMode = ()=>{
        setRecord({name: '', tag: '', visible: true, currency: {}})
        setMode('new')
    }

    const setEditMode = (record) => {
        setRecord({...record})
        setMode('edit')
    }

    const handleDelete = () => {
        deleteAccount(toDelete).then(({errors})=>{
            if (Object.keys(errors).length == 0) {
                loadRecords()
            }
        })
        setShow(false)
    }

    return (
        <Row>
            <Col sm={6}>
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th><Button variant="outline-primary" size="sm" onClick={setNewMode}>New</Button></th>
                            <th>Name</th>
                            <th>Currency</th>
                            <th>Tag</th>
                            <th>Visible</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record)=>{
                            return (
                                <tr key={record.id}>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record);e.preventDefault() } }>{record.id}</a></td>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record);e.preventDefault() } }>{record.name}</a></td>
                                    <td>{record.currency.name}</td>
                                    <td>{record.tag}</td>
                                    <td>
                                        {record.visible ? <Badge variant="success">Yes</Badge> : <Badge variant="secondary">No</Badge>}
                                    </td>
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
import React, { useState } from "react";
import {Table, Row, Col, Button, Modal} from "react-bootstrap"
import {deleteTransaction} from "../../api"
import MoneyText from "./MoneyText"
import TransactionsPagination from "./TransactionsPagination"

const List = ({records, templates, setRecord, setMode, loadRecords, page, setPage, totalPages}) => {

    const [show, setShow] = useState(false);
    const [toDelete, setToDelete] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (record) => {
        setToDelete(record)
        setShow(true)
    };

    const setNewMode = (template)=>{
        const currDate = new Date()    
        const has = !!template && template.id!=0
        setRecord({
            dt: `${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDate()}`, 
            description: '', 
            account_from: has ? template.account_from : {}, 
            account_to: has ? template.account_to : {}, 
            amount_from: has ? template.amount_from : {}, 
            amount_to: has ? template.amount_to : {}
        })
        setMode('new')
    }

    const setEditMode = (record) => {
        setRecord({...record})
        setMode('edit')
    }

    const handleDelete = () => {
        deleteTransaction(toDelete).then(({errors})=>{
            if (Object.keys(errors).length == 0) {
                loadRecords(1)
            }
        })
        setShow(false)
    }

    return (
        <Row>
            <Col>
                <Table bordered size="sm">
                    <thead>
                        <tr>
                            <th colSpan="7" className="buttons">
                                <Button variant="outline-primary" size="sm" onClick={ ()=>{setNewMode()} }>New</Button>
                                {
                                    templates.map((el,i)=>(
                                        <Button key={i} variant="outline-primary" size="sm" onClick={ ()=>{setNewMode(el)} }>{el.description}</Button>
                                    ))
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record)=>{
                            return (
                                <tr key={record.id}>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record);e.preventDefault() } }>{record.id}</a></td>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record);e.preventDefault() } }>{record.dt}</a></td>
                                    <td>{record.account_from.name}</td>
                                    <td className="text-right">
                                        <MoneyText record={record}/>
                                    </td>
                                    <td>{record.account_to.name}</td>
                                    <td>{record.description}</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" onClick={()=>{handleShow(record)}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}                            
                    </tbody>
                </Table>

                <TransactionsPagination loadRecords={loadRecords} page={page} setPage={setPage} totalPages={totalPages}/>

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
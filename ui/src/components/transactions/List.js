import React, { useState } from "react";
import {Table, Row, Col, Button, Modal} from "react-bootstrap"
import {deleteTransaction} from "../../api"
import MoneyText from "./MoneyText"
import TransactionsPagination from "./TransactionsPagination"

const List = ({records, templates, setRecord, setMode, loadRecords, page, setPage, totalPages, today}) => {

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
            amount_from: has ? template.amount_from : 0, 
            amount_to: has ? template.amount_to : 0
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

    const getDayClass = (record)=> {
        if(record.dt == today){
            return 'day-current'
        }
        if(record.odd_even == 0){
            return 'day-even'
        }
        if(record.odd_even == 1){
            return 'day-odd'
        }
        return ""
    }

    return (
        <Row>
            <Col>
                <Table bordered size="sm">
                    <thead>
                        <tr>
                            <th colSpan="6" className="buttons">
                                <Button variant="outline-primary" size="sm" onClick={ ()=>{setNewMode()} }>New</Button>
                                {
                                    templates.map((el,i)=>(
                                        <Button key={i} variant="outline-primary" size="sm" onClick={ ()=>{setNewMode(el)} }>{el.description}</Button>
                                    ))
                                }
                            </th>
                            <th>
                                <Button variant="outline-primary" size="sm" onClick={ ()=>{loadRecords(1, null, null)} }>Reset</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record)=>{
                            return (
                                <tr key={record.id} className={getDayClass(record)}>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record); e.preventDefault() } }>{record.id}</a></td>
                                    <td><a href="#" onClick={ (e)=>{ setEditMode(record); e.preventDefault() } }>{record.dt}</a></td>
                                    <td>                                        
                                        <a href="#" onClick={ (e)=>{ loadRecords(1, record.account_from.id, null); e.preventDefault() } }>{record.account_from.name}</a>
                                    </td>
                                    <td className="text-right mono">
                                        <MoneyText record={record}/>
                                    </td>
                                    <td>
                                        <a href="#" onClick={ (e)=>{ loadRecords(1, null, record.account_to.id); e.preventDefault() } }>{record.account_to.name}</a>
                                    </td>
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
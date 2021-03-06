import React, { useState } from "react";
import {Row, Col, Button, Form, ButtonGroup} from "react-bootstrap"
import {createTransaction, updateTransaction} from "../../api"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Editor = ({record, setMode, setRecord, loadRecords, accountsI, accountsE}) => {
    const [errors, setErrors] = useState({})
    const [dt, setDt] = useState(new Date(record.dt));

    const handleAccountFromChange = (e)=>{
        const newID = parseInt(e.target.value)
        const newAccount = accountsI.find((el)=>{
          return el.id === newID
        })

        setRecord({...record, account_from: newAccount})
    }

    const handleAccountToChange = (e)=>{
        const newID = parseInt(e.target.value)
        const newAccount = accountsE.find((el)=>{
          return el.id === newID
        })

        setRecord({...record, account_to: newAccount})
    }

    const handleAmountFromChange = (e)=>{
        setRecord({...record, amount_from: e.target.value})
    }

    const handleAmountToChange = (e)=>{
        setRecord({...record, amount_to: e.target.value})
    }

    const handleDescriptionChange = (e)=>{
        setRecord({...record, description: e.target.value})
    }

    const handleSubmit = ()=>{
        const f = !!record.id ? updateTransaction : createTransaction,
              amount_from = typeof record.amount_from == "string" ? parseFloat( record.amount_from.replace(',','.') ) : record.amount_from,
              amount_to = typeof record.amount_to == "string" ? parseFloat( record.amount_to.replace(',','.') ) : record.amount_to

        const payload = {
            id: record.id,
            description: record.description,
            dt: `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`,
            account_from_id: record.account_from.id,
            account_to_id: record.account_to.id,
            amount_from: amount_from,
            amount_to: amount_to,
        }

        f(payload).then(({transaction, errors})=>{
            if (Object.keys(errors).length == 0) {
                loadRecords(1)
            }else{
                setErrors(errors)                
            }
        })
    }

    const handleBack = ()=>{
        setMode('list')
    }

    const handleFocus = (event) => event.target.select();

    return (
        <>
            <Row>
                <Col sm={2}>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <div className={!!errors.dt ? 'is-invalid' : ''}>
                            <DatePicker 
                                dateFormat="yyyy-MM-dd"
                                selected={dt} 
                                onChange={date => setDt(date)} 
                                className="form-control form-control-sm"/>
                        </div>    
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.dt && errors.dt.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>   
                <Col sm={3}>
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control as="select" size="sm" value={record.account_from.id} onChange={handleAccountFromChange} isInvalid={!!errors.account_from}>
                            <option value="">---</option>
                            {accountsI.map(el=>(
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.account_from && errors.account_from.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control 
                          size="sm" 
                          value={record.amount_from} 
                          onChange={handleAmountFromChange} 
                          isInvalid={!!errors.amount_from}
                          autoFocus
                          onFocus={handleFocus}/>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.amount_from && errors.amount_from.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group>
                        <Form.Label>To</Form.Label>
                        <Form.Control as="select" size="sm" value={record.account_to.id} onChange={handleAccountToChange} isInvalid={!!errors.account_to}>
                            <option value="">---</option>
                            {accountsE.map(el=>(
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.account_to && errors.account_to.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control 
                          size="sm" 
                          value={record.amount_to} 
                          onChange={handleAmountToChange} 
                          isInvalid={!!errors.amount_to}
                          onFocus={handleFocus}/>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.amount_to && errors.amount_to.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>    
            <Row>   
                <Col sm={6}>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control size="sm" value={record.description} onChange={handleDescriptionChange} isInvalid={!!errors.description}/>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.description && errors.description.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <ButtonGroup>
                        <Button variant="secondary" type="button" onClick={handleBack}>Cancel</Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    )
};

export default Editor;
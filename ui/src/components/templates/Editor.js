import React, { useState } from "react";
import {Row, Col, Button, Form, ButtonGroup} from "react-bootstrap"
import {createTemplate, updateTemplate} from "../../api"

const Editor = ({record, setMode, setRecord, loadRecords, accounts}) => {
    const [errors, setErrors] = useState({})

    const handleAccountFromChange = (e)=>{
        const newID = parseInt(e.target.value)
        const newAccount = accounts.find((el)=>{
          return el.id === newID
        })

        setRecord({...record, account_from: newAccount})
    }

    const handleAccountToChange = (e)=>{
        const newID = parseInt(e.target.value)
        const newAccount = accounts.find((el)=>{
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
        const f = !!record.id ? updateTemplate : createTemplate
        const payload = {
            id: record.id,
            description: record.description,
            account_from_id: record.account_from.id,
            account_to_id: record.account_to.id,
            amount_from: parseFloat(record.amount_from),
            amount_to: parseFloat(record.amount_to),
        }

        f(payload).then(({template, errors})=>{
            if (Object.keys(errors).length == 0) {
                loadRecords()
            }else{
                setErrors(errors)                
            }
        })
    }

    const handleBack = ()=>{
        setMode('list')
    }

    return (
        <>
            <Row>   
                <Col sm={3}>
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control as="select" size="sm" value={record.account_from.id} onChange={handleAccountFromChange} isInvalid={!!errors.account_from}>
                            <option value="">---</option>
                            {accounts.map(el=>(
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.account_from && errors.account_from.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control size="sm" value={record.amount_from} onChange={handleAmountFromChange} isInvalid={!!errors.amount_from}/>
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
                            {accounts.map(el=>(
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.account_to && errors.account_to.join('; ')}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control size="sm" value={record.amount_to} onChange={handleAmountToChange} isInvalid={!!errors.amount_to}/>
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
                        <Button variant="primary" type="button" onClick={handleSubmit}>Submit</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    )
};

export default Editor;
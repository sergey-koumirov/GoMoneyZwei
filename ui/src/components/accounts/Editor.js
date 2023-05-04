import React, { useState } from "react";
import {Row, Col, Button, Form, ButtonGroup} from "react-bootstrap"
import {createAccount, updateAccount} from "../../api"

const Editor = ({record, setMode, setRecord, loadRecords, currencies}) => {
    const [errors, setErrors] = useState({})

    const handleTagChange = (e)=>{
        setRecord({...record, tag: e.target.value})
    }

    const handleCurrencyChange = (e)=>{
        const newID = parseInt(e.target.value)
        const newCurrency = currencies.find((el)=>{
          return el.id === newID
        })

        setRecord({...record, currency: newCurrency})
    }

    const handleVisibleChange = (e)=>{
        setRecord({...record, visible: !record.visible})
    }

    const handleNameChange = (e)=>{
        setRecord({...record, name: e.target.value})
    }

    const handleSubmit = ()=>{
        const f = !!record.id ? updateAccount : createAccount
        const payload = {
            id: record.id,
            name: record.name,
            tag: record.tag,
            currency_id: record.currency.id,
            visible: record.visible,
        }

        f(payload).then(({account, errors})=>{
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
        <Row>
            <Col sm={6}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" value={record.name} onChange={handleNameChange} isInvalid={!!errors.name}/>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.name && errors.name.join('; ')}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Currency</Form.Label>
                    <Form.Control as="select" size="sm" value={record.currency.id} onChange={handleCurrencyChange} isInvalid={!!errors.currency}>
                        <option value="">---</option>
                        {currencies.map(el=>(
                            <option key={el.id} value={el.id}>{el.name}</option>
                        ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.currency && errors.currency.join('; ')}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tag</Form.Label>
                    <Form.Control as="select" size="sm" value={record.tag} onChange={handleTagChange} isInvalid={!!errors.tag}>
                        <option value="">---</option>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                        <option value="balance">Balance</option>
                        <option value="stocks">Stocks Balance</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.tag && errors.tag.join('; ')}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={"Visible"}
                        isInvalid={!!errors.visible}
                        checked={record.visible}
                        onChange={handleVisibleChange}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.visible && errors.visible.join('; ')}
                    </Form.Control.Feedback>
                </Form.Group>

                <ButtonGroup>
                    <Button variant="secondary" type="button" onClick={handleBack}>Cancel</Button>
                    <Button variant="primary" type="button" onClick={handleSubmit}>Submit</Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
};

export default Editor;
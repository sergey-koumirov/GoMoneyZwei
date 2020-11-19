import React, { useState } from "react";
import {Row, Col, Button, Form, ButtonGroup} from "react-bootstrap"
import {createCurrency, updateCurrency} from "../../api"

const Editor = ({record, setMode, setRecord, loadRecords}) => {

    const [errors, setErrors] = useState({})

    const handleTagChange = (e)=>{
        setRecord({...record, tag: e.target.value})
    }

    const handleCodeChange = (e)=>{
        setRecord({...record, code: e.target.value})
    }

    const handleNameChange = (e)=>{
        setRecord({...record, name: e.target.value})
    }

    const handleSubmit = ()=>{
        const f = !!record.id ? updateCurrency : createCurrency
        
        f(record).then(({currency, errors})=>{
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
                    <Form.Label>Code</Form.Label>
                    <Form.Control size="sm" value={record.code} onChange={handleCodeChange} isInvalid={!!errors.code}/>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.code && errors.code.join('; ')}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tag</Form.Label>
                    <Form.Control as="select" size="sm" value={record.tag} onChange={handleTagChange} isInvalid={!!errors.tag}>
                        <option value="curr">Currency</option>
                        <option value="stock">Stock</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.tag && errors.tag.join('; ')}
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
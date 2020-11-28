import React, { useEffect, useState} from "react";
import {Table, Row, Col} from "react-bootstrap"
import {listReports} from '../../api'
import Balances from './Balances'
import Stocks from './Stocks'
import Stats from './Stats'

const Index = () => {

    const [records, setRecords] = useState({})

    useEffect(() => {        
        listReports().then(({reports})=>{            
            setRecords(reports)
        })
    }, []);


    return (
        <Row>
            <Col sm={8}>
                <h5>{records.CurrentMonth} ({records.CurrentDate})</h5>
                <Row>
                    <Col sm={5}>
                        <Balances records={records.CurrentIncome}/>                    
                    </Col>
                    <Col sm={7}>
                        <Stats records={records.CurrentExpense}/>
                    </Col>
                </Row>                
                <h5>{records.PreviousMonth}</h5>
                <Row>
                    <Col sm={5}>
                        <Balances records={records.PreviousIncome}/>                    
                    </Col>
                    <Col sm={7}>
                        <Stats records={records.PreviousExpense}/>
                    </Col>
                </Row>                
                <h5>Last 12 month</h5>
                <Row>
                    <Col sm={5}>
                        <Balances records={records.YearIncome}/>                    
                    </Col>
                    <Col sm={7}>
                        <Stats records={records.YearExpense}/>
                    </Col>
                </Row>                
            </Col>
            <Col sm={1}></Col>
            <Col sm={3}>
                <h5>Balances</h5>
                <Balances records={records.MoneyRests}/>
                <h5>Stocks</h5>
                <Stocks records={records.StocksRests}/>                
            </Col>
        </Row>
    );
}

export default Index;
import React, { useEffect, useState } from "react";
import {listTransactions} from '../../api'
import List from './List'
import Editor from './Editor'

const Page = () => {

    const [records, setRecords] = useState([])
    const [accounts, setAccounts] = useState([])
    const [mode, setMode] = useState('')
    const [record, setRecord] = useState({})

    const loadRecords = () =>{
        listTransactions(1).then(({transactions, accounts})=>{ 
            setRecords(transactions)
            setAccounts(accounts)
            setMode('list')
        })
    }

    useEffect(() => {        
        loadRecords()
    }, []);

    if(mode == 'list'){
        return (<List records={records} setMode={setMode} setRecord={setRecord} loadRecords={loadRecords}/>)
    }else if(mode == 'new' || mode == 'edit'){
        return (<Editor record={ record } setMode={setMode} setRecord={setRecord} loadRecords={loadRecords} accounts={accounts}/>)
    }else{
        return (null)
    }
    
};

export default Page;
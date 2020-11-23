import React, { useEffect, useState } from "react";
import {listAccounts} from '../../api'
import List from './List'
import Editor from './Editor'

const Page = ({mode, setMode}) => {

    const [records, setRecords] = useState([])
    const [currencies, setCurrencies] = useState([])
    const [record, setRecord] = useState({})

    const loadRecords = () =>{
        listAccounts().then(({accounts, currencies})=>{ 
            setRecords(accounts)
            setCurrencies(currencies)
            setMode('list')
        })
    }

    useEffect(() => {        
        loadRecords()
    }, []);

    if(mode == 'list'){
        return (<List records={records} setMode={setMode} setRecord={setRecord} loadRecords={loadRecords}/>)
    }else if(mode == 'new' || mode == 'edit'){
        return (<Editor record={ record } setMode={setMode} setRecord={setRecord} loadRecords={loadRecords} currencies={currencies}/>)
    }else{
        return (null)
    }
    
};

export default Page;
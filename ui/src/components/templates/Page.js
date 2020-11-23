import React, { useEffect, useState } from "react";
import {listTemplates} from '../../api'
import List from './List'
import Editor from './Editor'

const Page = ({mode, setMode}) => {

    const [records, setRecords] = useState([])
    const [accounts, setAccounts] = useState([])
    const [record, setRecord] = useState({})

    const loadRecords = () =>{
        listTemplates().then(({templates, accounts})=>{ 
            setRecords(templates)
            setAccounts(accounts)
            setMode('list')
        })
    }

    useEffect(() => {        
        loadRecords(1)
    }, []);

    if(mode == 'list'){
        return (
            <List records={records} 
                  setMode={setMode} 
                  setRecord={setRecord} 
                  loadRecords={loadRecords}/>
        )
    }else if(mode == 'new' || mode == 'edit'){
        return (<Editor record={ record } setMode={setMode} setRecord={setRecord} loadRecords={loadRecords} accounts={accounts}/>)
    }else{
        return (null)
    }
    
};

export default Page;
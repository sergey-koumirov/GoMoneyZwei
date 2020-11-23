import React, { useEffect, useState } from "react";
import {listTransactions} from '../../api'
import List from './List'
import Editor from './Editor'

const Page = ({mode, setMode}) => {

    const [records, setRecords] = useState([])
    const [accounts, setAccounts] = useState([])
    const [templates, setTemplates] = useState([])
    const [record, setRecord] = useState({})
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const loadRecords = (page) =>{
        listTransactions(page).then(({transactions, accounts, templates, page, total_pages})=>{ 
            setRecords(transactions)
            setAccounts(accounts)
            setTemplates(templates)
            setMode('list')
            setPage(page)
            setTotalPages(total_pages)
        })
    }

    useEffect(() => {        
        loadRecords(1)
    }, []);

    if(mode == 'list'){
        return (
            <List records={records} 
                  templates={templates}
                  setMode={setMode} 
                  setRecord={setRecord} 
                  loadRecords={loadRecords}
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}/>
        )
    }else if(mode == 'new' || mode == 'edit'){
        return (<Editor record={ record } setMode={setMode} setRecord={setRecord} loadRecords={loadRecords} accounts={accounts}/>)
    }else{
        return (null)
    }
    
};

export default Page;
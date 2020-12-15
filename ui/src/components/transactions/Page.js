import React, { useEffect, useState } from "react";
import {listTransactions} from '../../api'
import List from './List'
import Editor from './Editor'

const Page = ({mode, setMode}) => {

    const [records, setRecords] = useState([])
    const [accountsI, setAccountsI] = useState([])
    const [accountsE, setAccountsE] = useState([])
    const [templates, setTemplates] = useState([])
    const [record, setRecord] = useState({})
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [today, setToday] = useState("")

    const loadRecords = (page, accFromID, accToID) =>{
        listTransactions(page, accFromID, accToID).then(({transactions, accounts_i, accounts_e, templates, page, total_pages, current_date})=>{ 
            setRecords(transactions)
            setAccountsI(accounts_i)
            setAccountsE(accounts_e)
            setTemplates(templates)
            setMode('list')
            setPage(page)
            setTotalPages(total_pages)
            setToday(current_date)
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
                  totalPages={totalPages}
                  today={today}/>
        )
    }else if(mode == 'new' || mode == 'edit'){
        return (<Editor record={ record } 
                        setMode={setMode} 
                        setRecord={setRecord} 
                        loadRecords={loadRecords} 
                        accountsI={accountsI}
                        accountsE={accountsE}/>)
    }else{
        return (null)
    }
    
};

export default Page;
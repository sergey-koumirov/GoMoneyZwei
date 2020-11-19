import React, { useEffect, useState } from "react";
import {listTransactions} from '../../api'
import List from './List'
// import Editor from './Editor'

const Page = () => {

    const [records, setRecords] = useState([])
    const [mode, setMode] = useState('')
    const [record, setRecord] = useState({})

    const loadRecords = () =>{
        listTransactions().then((data)=>{ 

            console.log(data)

            setRecords(data.transactions)
            setMode('list')
        })
    }

    useEffect(() => {        
        loadRecords()
    }, []);

    if(mode == 'list'){
        return (<List records={records} setMode={setMode} setRecord={setRecord} loadRecords={loadRecords}/>)
    }else{
        return (null)
    }
    
};

export default Page;
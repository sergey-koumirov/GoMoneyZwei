import React from "react";
import {Badge} from "react-bootstrap"


const MoneyText = ({record}) => {
    
    if(record.account_from.currency.id === record.account_to.currency.id){
        return (
            <>
                {record.amount_from.toLocaleString()}
                <div className="currency">{record.account_from.currency.code}</div>
            </>
        )          
    }else{
        return (
            <>
                {record.amount_from.toLocaleString()}
                <div className="currency">{record.account_from.currency.code}</div>
                &nbsp;
                <span className="gray">-&gt;</span>
                &nbsp;
                {record.amount_to.toLocaleString()}
                <div className="currency">{record.account_to.currency.code}</div>
            </>
        )
    }

};

export default MoneyText;
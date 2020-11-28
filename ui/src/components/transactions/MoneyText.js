import React from "react";
import {f} from "../../utils"


const MoneyText = ({record}) => {
    
    if(record.account_from.currency.id === record.account_to.currency.id){
        return (
            <>
                {f(record.amount_from)}
                <div className="currency">{record.account_from.currency.code}</div>
            </>
        )          
    }else{
        return (
            <>
                {f(record.amount_from)}
                <div className="currency">{record.account_from.currency.code}</div>
                &nbsp;
                <span className="gray">-&gt;</span>
                &nbsp;
                {f(record.amount_to)}
                <div className="currency">{record.account_to.currency.code}</div>
            </>
        )
    }

};

export default MoneyText;
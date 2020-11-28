import React from "react";
import {f} from "../../utils"

const MoneyText = ({record}) => {

    if(record.account_from.currency.id === record.account_to.currency.id){
        return (
            <>
                <span className={`${record.account_from.tag}-${record.account_to.tag}`}>{f(record.amount_from)}</span>
                <div className={`currency`}>{record.account_from.currency.code}</div>
            </>
        )          
    }else{
        return (
            <>
                <span className={record.account_from.tag}>{f(record.amount_from)}</span>
                <div className={`currency`}>{record.account_from.currency.code}</div>
                &nbsp;
                <span className="gray">-&gt;</span>
                &nbsp;
                <span className={record.account_to.tag}>{f(record.amount_to)}</span>
                <div className={`currency`}>{record.account_to.currency.code}</div>
            </>
        )
    }

};

export default MoneyText;
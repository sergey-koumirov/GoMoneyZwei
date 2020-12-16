import React from "react";
import {Table} from "react-bootstrap"
import {i, f} from "../../utils"
import { Link } from "@reach/router";

const Stocks = ({records, rests}) => {

    return (
        <Table bordered size="sm">
            <thead>
                <tr>
                    <th className="text-center">In</th>
                    <th></th>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Out</th>
                </tr>
            </thead>
            <tbody>
                {(records||[]).map( (el)=>(
                    <React.Fragment key={el.AccountID}>
                        <tr>
                            <td className="text-right">
                                {el.Incoming.map((inEl)=>(
                                    <React.Fragment key={inEl.CurrencyCode}>
                                        <span>{f(inEl.Amount)}</span>
                                        <div className="currency">{inEl.CurrencyCode}</div>
                                        <br/>
                                    </React.Fragment>
                                ))}
                            </td>
                            <td>                                
                                <Link to={`/transactions?acc_from_id=${el.AccountID}&acc_to_id=${el.AccountID}`}>{el.AccountName}</Link>
                            </td>
                            <td className="text-right">
                                { i(rests[el.CurrencyCode].Total) }
                            </td>                        
                            <td className="text-right">
                                {el.Outcoming.map((outEl)=>(
                                    <React.Fragment key={outEl.CurrencyCode}>
                                        <span>{f(outEl.Amount)}</span>
                                        <div className="currency">{outEl.CurrencyCode}</div>
                                        <br/>
                                    </React.Fragment>
                                ))}
                            </td>                        
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    )
}

export default Stocks;
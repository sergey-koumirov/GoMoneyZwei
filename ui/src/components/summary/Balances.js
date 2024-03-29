import React from "react";
import {Table} from "react-bootstrap"
import {f, toSortedArray} from "../../utils"
import { Link } from "@reach/router";

const Balances = ({records, tableClass}) => {

    const DataRows = ({records})=>(
        <React.Fragment>
            {records.map((el)=>(
                <tr key={el.AccountName}>
                    <td>
                        <Link to={`/transactions?acc_from_id=${el.AccountID}&acc_to_id=${el.AccountID}`}>{el.AccountName}</Link>
                    </td>
                    <td className="text-right mono">{f(el.Amount)}</td>
                </tr>
            ))}
        </React.Fragment>
    )

    return (
        <Table bordered size="sm" className={tableClass}>
            <tbody>
                {toSortedArray(records).map( (el, i)=>(
                    <React.Fragment key={el.key}>
                        {i>0 ? (
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                            </tr>
                        ) : (null)}
                        <tr>
                            <td><b>{el.key}</b></td>
                            <td className="text-right mono"><b>{f(el.Total)}</b></td>
                        </tr>
                        <DataRows records={el.Records}/>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    )
}

export default Balances;
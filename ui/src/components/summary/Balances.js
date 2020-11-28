import React from "react";
import {Table} from "react-bootstrap"
import {f, toSortedArray} from "../../utils"

const Balances = ({records}) => {

    const DataRows = ({records})=>(
        <React.Fragment>
            {records.map((el)=>(
                <tr key={el.AccountName}>
                    <td></td>
                    <td>{el.AccountName}</td>
                    <td className="text-right">{f(el.Amount)}</td>
                </tr>
            ))}
        </React.Fragment>
    )

    return (
        <Table bordered size="sm">
            <tbody>
                {toSortedArray(records).map( (el, i)=>(
                    <React.Fragment key={el.key}>
                        {i>0 ? (
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ) : (null)}
                        <tr>
                            <td>{el.key}</td>
                            <td></td>
                            <td className="text-right"><b>{f(el.Total)}</b></td>
                        </tr>
                        <DataRows records={el.Records}/>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    )
}

export default Balances;
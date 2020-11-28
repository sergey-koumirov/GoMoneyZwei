import React from "react";
import {Table} from "react-bootstrap"
import {f, toSortedArray} from "../../utils"

const Stats = ({records}) => {

    const DataRows = ({records})=>(
        <React.Fragment>
            {records.map((el)=>(
                <tr key={el.AccountName}>
                    <td>{el.AccountName}</td>
                    <td className="text-right mono">{f(el.Amount)}</td>
                    <td className="text-right mono">{f(el.Percent)}</td>
                    <td className="text-right mono">{f(el.SumPercent)}</td>
                </tr>
            ))}
        </React.Fragment>
    )

    return (
        <Table bordered size="sm">
            <tbody>
                {toSortedArray(records).map( (el,i)=>(
                    <React.Fragment key={el.key}>
                        {i>0 ? (
                            <tr>
                                <td>&nbsp;</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ) : (null)}
                        <tr>
                            <td><b>{el.key}</b></td>
                            <td className="text-right mono"><b>{f(el.Total)}</b></td>
                            <td className="text-right">%</td>
                            <td className="text-right">++%</td>
                        </tr>
                        <DataRows records={el.Records}/>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    )
}

export default Stats;
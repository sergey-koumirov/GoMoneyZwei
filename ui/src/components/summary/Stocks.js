import React from "react";
import {Table} from "react-bootstrap"
import {i, toSortedArray} from "../../utils"

const Stocks = ({records}) => {

    return (
        <Table bordered size="sm">
            <tbody>
                {toSortedArray(records).map( (el)=>(
                    <React.Fragment key={el.key}>
                        <tr>
                            <td>{el.key}</td>
                            <td className="text-right"><b>{i(el.Total)}</b></td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    )
}

export default Stocks;
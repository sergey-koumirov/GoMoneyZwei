import React from "react";
import {Pagination} from "react-bootstrap"

const TransactionsPagination = ({loadRecords, page, setPage, totalPages}) => {
    
    const pages = Array.from(Array(totalPages > 20 ? 20 : totalPages))



    const handleClick = (newPage)=> {
        setPage(newPage)
        loadRecords(newPage)
    }

    return (
        <Pagination size="sm">
            {
                pages.map((el, i)=>{
                    if( i+1 == page ){
                        return(
                            <Pagination.Item key={i} active={true}>{i+1}</Pagination.Item>                                
                        )
                    }else{
                        return(
                            <Pagination.Item key={i} active={false}>
                                <span onClick={()=>{handleClick(i+1)}}>{i+1}</span>
                            </Pagination.Item>
                        )
                    }
                })
            }
            { totalPages > 20 ? "..." : "" }
        </Pagination>
    )

};

export default TransactionsPagination;
import React from "react";
import { Link } from "@reach/router";

const NavLink = (props) => {
    return (
        <Link
            {...props}
            getProps={({ isCurrent }) => {
                if(isCurrent){
                    return {className: 'nav-link active'}
                } else {
                    return {className: 'nav-link'}
                }
            }}
        />
    )
};

export default NavLink;  
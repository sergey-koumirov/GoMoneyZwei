import React from "react";
import { Router } from "@reach/router";
import Summary from "./components/Summary"
import TransactionsPage from "./components/transactions/Page"
import AccountsPage from "./components/accounts/Page"
import CurrenciesPage from "./components/currencies/Page"
import {Nav, Container} from "react-bootstrap"
import NavLink from "./components/NavLink"

const App = () => {
    return (
        <Container>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/">Summary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/transactions">Transactions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/accounts">Accounts</Nav.Link>
                </Nav.Item>                
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/currencies">Currencies</Nav.Link>
                </Nav.Item>                
            </Nav>    
            <Router>
                <Summary path="/" />
                <TransactionsPage path="/transactions" />
                <AccountsPage path="/accounts" />
                <CurrenciesPage path="/currencies" />
            </Router>
        </Container>
    )
};

export default App;
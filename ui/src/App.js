import React, { useState } from "react";
import { Router } from "@reach/router";
import Summary from "./components/Summary"
import TransactionsPage from "./components/transactions/Page"
import AccountsPage from "./components/accounts/Page"
import CurrenciesPage from "./components/currencies/Page"
import TemplatesPage from "./components/templates/Page"
import {Nav, Container} from "react-bootstrap"
import NavLink from "./components/NavLink"

const App = () => {
    const [mode, setMode] = useState('')
    const setModeList = ()=>{ setMode('list') }

    return (
        <Container>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/">Summary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/transactions" onClick={setModeList}>Transactions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/templates" onClick={setModeList}>Templates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/accounts" onClick={setModeList}>Accounts</Nav.Link>
                </Nav.Item>                
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/currencies" onClick={setModeList}>Currencies</Nav.Link>
                </Nav.Item>                
            </Nav>    
            <Router>
                <Summary path="/" />
                <TransactionsPage path="/transactions" mode={mode} setMode={setMode}/>
                <TemplatesPage path="/templates" mode={mode} setMode={setMode}/>
                <AccountsPage path="/accounts" mode={mode} setMode={setMode}/>
                <CurrenciesPage path="/currencies" mode={mode} setMode={setMode}/>
            </Router>
        </Container>
    )
};

export default App;
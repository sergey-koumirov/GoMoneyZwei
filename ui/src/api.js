import axios from "axios"

const apiClient = axios.create({
  timeout: 4000,
  headers: {
    "Context-Type": "application/json",
  },
})

// -------------------CURRENCIES--------------------------
export const listCurrencies = async () =>{
    return await apiClient.get(`/api/currencies`)
        .then(({data: {currencies}}) => {
            return currencies;
        })
}

export const createCurrency = async (payload) =>{
    return await apiClient.post(`/api/currencies`, payload)
        .then(({data: {currency, errors}}) => {
            return {currency, errors};
        })
}

export const updateCurrency = async (payload) =>{
    return await apiClient.put(`/api/currencies/${payload.id}`, payload)
        .then(({data: {currency, errors}}) => {
            return {currency, errors};
        })
}

export const deleteCurrency = async (payload) =>{
    return await apiClient.delete(`/api/currencies/${payload.id}`)
        .then(({data: {errors}}) => {
            return {errors};
        })
}

// -------------------ACCOUNTS--------------------------
export const listAccounts = async () =>{
    return await apiClient.get(`/api/accounts`)
        .then(({data: {accounts, currencies}}) => {
            return {accounts, currencies};
        })
}

export const createAccount = async (payload) =>{
    return await apiClient.post(`/api/accounts`, payload)
        .then(({data: {account, errors}}) => {
            return {account, errors};
        })
}

export const updateAccount = async (payload) =>{
    return await apiClient.put(`/api/accounts/${payload.id}`, payload)
        .then(({data: {account, errors}}) => {
            return {account, errors};
        })
}

export const deleteAccount = async (payload) =>{
    return await apiClient.delete(`/api/accounts/${payload.id}`)
        .then(({data: {errors}}) => {
            return {errors};
        })
}


// -------------------TRANSACTIONS--------------------------
export const listTransactions = async (page) =>{
    return await apiClient.get(`/api/transactions?page=${page}`)
        .then(({data: {transactions, page, total_pages, accounts}}) => {
            return {transactions, page, total_pages, accounts};
        })
}

export const createTransaction = async (payload) =>{
    return await apiClient.post(`/api/transactions`, payload)
        .then(({data: {transaction, errors}}) => {
            return {transaction, errors};
        })
}

export const updateTransaction = async (payload) =>{
    return await apiClient.put(`/api/transactions/${payload.id}`, payload)
        .then(({data: {transaction, errors}}) => {
            return {transaction, errors};
        })
}

export const deleteTransaction = async (payload) =>{
    return await apiClient.delete(`/api/transactions/${payload.id}`)
        .then(({data: {errors}}) => {
            return {errors};
        })
}


// -------------------TEMPLATES--------------------------
export const listTemplates = async () =>{
    return await apiClient.get(`/api/templates`)
        .then(({data: {templates, accounts}}) => {
            return {templates, accounts};
        })
}

export const createTemplate = async (payload) =>{
    return await apiClient.post(`/api/templates`, payload)
        .then(({data: {template, errors}}) => {
            return {template, errors};
        })
}

export const updateTemplate = async (payload) =>{
    return await apiClient.put(`/api/templates/${payload.id}`, payload)
        .then(({data: {template, errors}}) => {
            return {template, errors};
        })
}

export const deleteTemplate = async (payload) =>{
    return await apiClient.delete(`/api/templates/${payload.id}`)
        .then(({data: {errors}}) => {
            return {errors};
        })
}

export default apiClient
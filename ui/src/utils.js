export const f = (num) => {
    return String(num.toFixed(2)).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')
}

export const i = (num) => {
    return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')
}

export const toSortedArray = (obj) => {
    if(!obj){
        return []
    }
    const keys = Object.keys(obj).sort()
    const values = keys.map((k)=>{
        return {...obj[k], key: k}
    })
    return values
}

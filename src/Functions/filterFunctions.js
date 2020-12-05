


export const filterByName =(arr, searchTerm)=>{
    let filtered = arr.filter((f)=>{
        return f.itemName === searchTerm
    })
    console.log('filtered', filtered)
    return filtered
}
const filterByStatus = (arr, status)=>{
    return arr
}

export const filterByCost =(arr, cost1, cost2)=>{
    let filtered = arr.filter((f)=>{
        return f.itemCost === searchTerm
    })
    console.log('filtered', filtered)
    return filtered
}
const filterByDateRange = (arr, date1, date2)=>{
    return arr
}


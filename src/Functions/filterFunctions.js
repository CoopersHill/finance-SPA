


export const filterByName =(arr, searchTerm)=>{
    let regexPattern = new RegExp(searchTerm)

    
    let filtered = arr.filter((f)=>{
        return regexPattern.test(f.itemName) === true
    })
    console.log('filtered', filtered)
    return filtered
}
export const filterByStatus = (arr, status)=>{
    let array = arr.filter((f)=>{
        return f.recStatus === status
    })
    
    console.log('status filters', array)
    return array
}

export const filterByCost =(arr, cost1)=>{
    let filtered = arr.map((m)=>{
        return m.itemCost === cost1
    })
    console.log('filtered', filtered)
    return filtered
}
export const filterByDateRange = (arr, date1, date2)=>{
    return arr
}


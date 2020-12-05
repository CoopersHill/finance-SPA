// input a string representing the search type
// input an array to search

export const searchByName =(arr, searchTerm)=>{
    let filtered = arr.filter((f)=>{
        return f.itemName.includes(searchTerm)
    })
    console.log('filtered', filtered)
    return filtered
}

export const searchByCost =(arr, searchTerm)=>{
    let filtered = arr.filter((f)=>{
        return f.itemCost.includes(searchTerm)
    })
    console.log('filtered', filtered)
    return filtered
}
const searchBydate = (arr, searchDate)=>{
    return arr
}
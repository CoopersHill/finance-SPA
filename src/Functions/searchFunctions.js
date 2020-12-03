// input a string representing the search type
// input an array to search

export const searchByName =(arr, searchTerm)=>{
    let filtered = arr.filter((f)=>{
        return f.itemName.includes(searchTerm)
    })
    console.log('filtered', filtered)
    return filtered
}
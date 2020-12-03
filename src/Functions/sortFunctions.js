// input a string representing the sort type
// input an array to sort

export const sortByNameA = (arr)=>{
let alpha = arr.sort((a, b)=>{
    var nameA = a.itemName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.itemName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  })


return alpha
}

export const sortByNameZ = (arr)=>{
 let omega = arr.sort((a, b)=>{
    var nameA = a.itemName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.itemName.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  })

    return omega
}
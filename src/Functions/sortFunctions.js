// input a string representing the sort type
// input an array to sort

import moment from 'moment'

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


export const sortByCostLowest = (arr)=>{
    let alpha = arr.sort((a, b)=>{
       return a.itemCost - b.itemCost
     })
   
       return alpha
   }

   export const sortByCostHighest = (arr)=>{
    let omega = arr.sort((a, b)=>{
       return b.itemCost - a.itemCost
     })
   
       return omega
   }


   export const sortByStatusTrue = (arr)=>{
    let alpha = arr.sort((a, b)=>{

      if (a.recStatus > b.recStatus) {
        return -1;
      }
      if (a.recStatus < b.recStatus) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
  
  console.log('false first',alpha)
  return alpha
   }


   export const sortByStatusFalse = (arr)=>{
    let alpha = arr.sort((a, b)=>{

      if (a.recStatus < b.recStatus) {
        return -1;
      }
      if (a.recStatus > b.recStatus) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
  
    console.log('true first', alpha)

  return alpha
   }


   // sort date high and low
   export const sortByDateNewest = (arr)=>{
    let alpha = arr.sort((a, b)=>{

      if (a.transactionDate < b.transactionDate) {
        return -1;
      }
      if (a.transactionDate > b.transactionDate) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
  
    console.log('newest date', alpha)

  return alpha
   }
   export const sortByDateOldest = (arr)=>{
    let alpha = arr.sort((a, b)=>{
      if (a.transactionDate > b.transactionDate) {
        return -1;
      }
      if (a.transactionDate < b.transactionDate) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
  
    console.log('oldest date', alpha)

  return alpha
   }
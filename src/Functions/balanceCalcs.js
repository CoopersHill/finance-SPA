// actual balance total every item with rec status true
// pending balance total every item with rec status false
// projected balnce total every item regardles of rec status



// projected balance
export const allTransactionsTotal = (arr)=>{
    let projectedCosts = arr.map((m)=>{
      return   Number(m.itemCost.toFixed(2))

}).reduce((a, b)=>{
  return a + b
})
    
 
    
    return projectedCosts.toFixed(2)
     }
     


// pending balance
export const pendingTransactionsCalc = (arr)=>{
   
    
let array = arr.map((m)=>{
    if(m.recStatus===false){
return Number(m.itemCost)
    } else {
      return 0
    } 


})
let ddw = array.reduce((a, b)=>{
  return a + b
})

return ddw.toFixed(2)


  }


  
// completed balance
  export const completedTransactionsTotal = (arr)=>{
    let actualTransactions =[0]
    
    let array = arr.filter((f)=>{
        return f.recStatus === true
    })


    array.map((m)=>{
      if(m.recStatus === true){
     return   actualTransactions.push(m.itemCost)
      }    
        
      })
  
    let actualTransactionsReduced = actualTransactions.reduce((a, b)=>{
      return  a + b
      })

   
      return actualTransactionsReduced.toFixed(2)
  }

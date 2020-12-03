// actual balance total every item with rec status true
// pending balance total every item with rec status false
// projected balnce total every item regardles of rec status



// projected balance
export const projectedBalanceCalc = (arr)=>{
    let projectedCosts = []
    
    arr.map((m)=>{
   projectedCosts.push(m.itemCost)
    
      return m.itemCost
    })
    
    let projectedBalanceReduced =   projectedCosts.reduce((a, b)=>{
    return  a+b
    })
    
    console.log('actual balance', projectedBalanceReduced/100)
    
    return projectedBalanceReduced
     }
     


// pending balance
export const pendingTransactionsCalc = (arr)=>{
    let pendingTransactions =[]
    
let array = arr.filter((f)=>{
    return f.recStatus === false
})


    array.map((m)=>{
      if(m.recStatus === false){
       pendingTransactions.push(m.itemCost)
      }    
        return m
      })
  
    let pendingTransactionsReduced = pendingTransactions.reduce((a, b)=>{
      return  a+b
      })

      
      console.log('pending transactions', pendingTransactionsReduced /100) 
      console.log('filtered false', array)
            return pendingTransactionsReduced


  }


  
// actual balance
  export const actualTransactionsCalc = (arr)=>{
    let actualTransactions =[]
    
    let array = arr.filter((f)=>{
        return f.recStatus === true
    })


    array.map((m)=>{
      if(m.recStatus === true){
     return   actualTransactions.push(m.itemCost)
      }    
        
      })
  
    let actualTransactionsReduced = actualTransactions.reduce((a, b)=>{
      return  a+b
      })

      
      console.log('finished transactions', actualTransactionsReduced /100) 
      console.log('filtered true', array)

      return actualTransactionsReduced
  }

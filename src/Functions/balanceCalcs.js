// actual balance total every item with rec status true
// pending balance total every item with rec status false
// projected balnce total every item regardles of rec status



// projected balance
export const projectedBalanceCalc = (arr)=>{
    let projectedCosts = [0]
    
    arr.map((m)=>{
   projectedCosts.push(m.itemCost.toFixed(2))
    
      return m.itemCost.toFixed(2)
    })
    
    let projectedBalanceReduced =   projectedCosts.reduce((a, b)=>{
    return  Number(a)+Number(b)
    })
    
    
    return projectedBalanceReduced
     }
     


// pending balance
export const pendingTransactionsCalc = (arr)=>{
    let pendingTransactions =[0]
    
let array = arr.filter((f)=>{
    return f.recStatus === false
})


    array.map((m)=>{
      if(m.recStatus === false){
       pendingTransactions.push(m.itemCost.toFixed(2))
      }    
        return m
      })
  
      let pendingTransactionsReduced
if(pendingTransactions.length > 0){
return pendingTransactionsReduced =  pendingTransactions.reduce((a, b)=>{
    return  Number(a) + Number(b)
    })
}else if(pendingTransactions.length < 1){
return pendingTransactionsReduced = 0
}

    

      

            return pendingTransactionsReduced


  }


  
// actual balance
  export const actualTransactionsCalc = (arr)=>{
    let actualTransactions =[0]
    
    let array = arr.filter((f)=>{
        return f.recStatus === true
    })


    array.map((m)=>{
      if(m.recStatus === true){
     return   actualTransactions.push(m.itemCost.toFixed(2))
      }    
        return 0
      })
  
    let actualTransactionsReduced = actualTransactions.reduce((a, b)=>{
      return  Number(a)+Number(b)
      })

   
      return actualTransactionsReduced
  }

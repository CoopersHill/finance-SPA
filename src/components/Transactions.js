import React, { Fragment } from 'react';
import moment from 'moment'
import CreateTransactionForm from '../components/crudForm'

import { Grid, Badge, Card, CardContent } from '@material-ui/core';

import {sortByNameA, sortByNameZ, sortByCostHighest, sortByCostLowest, sortByStatusFalse, sortByStatusTrue} from '../Functions/sortFunctions'
import {searchByName} from '../Functions/searchFunctions'
import {projectedBalanceCalc, pendingTransactionsCalc, actualTransactionsCalc} from '../Functions/balanceCalcs'



class Transactions extends React.Component {
constructor(props){
super(props)
    this.state = {
      projectedBalanceTotal: null,
       pendingTransactionsTotal: null, 
       actualTransactionsTotal: null,
        accountBalance: 1000000000,  
        searchTerm: '',
        items: []
    }
    
    this.sortbyproperty = this.sortbyproperty.bind(this)
    this.performSearch = this.performSearch.bind(this)
}



componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://hwfinanceapp20201201223059.azurewebsites.net/api/transactions')
    .then(response => response.json())
    .then((data) =>{
       
      sortByStatusFalse(data)
      sortByStatusTrue(data)

      this.setState({
            items: data,
            projectedBalanceTotal: projectedBalanceCalc(data) / 100, 
            pendingTransactionsTotal: pendingTransactionsCalc(data) /100, 
            actualTransactionsTotal: actualTransactionsCalc(data) /100
        })
        console.log(data)
    })
}

sortbyproperty=(sortType)=>{
  let items
if(sortType === 'nameHighest'){
items = sortByNameA(this.state.items)
console.log('sortAlpha', sortByNameA(this.state.items))
}else if (sortType === 'nameLowest'){
  items = sortByNameZ(this.state.items)
  console.log('sortBeta', sortByNameZ(this.state.items))

}else if(sortType === 'costHighest'){
  items = sortByCostHighest(this.state.items)
  console.log('sortAlpha', sortByCostHighest(this.state.items))
  }else if (sortType === 'costLowest'){
    items = sortByCostLowest(this.state.items)
    console.log('sortBeta', sortByCostLowest(this.state.items))
  
  }

this.setState({
  items: items
})
}

handleSearch = (e)=>{
  this.setState({
    searchTerm: e.target.value 
  })
}
performSearch = ()=>{
searchByName(this.state.items, this.state.searchTerm)
this.setState({
  items: searchByName(this.state.items, this.state.searchTerm)

})
}
searchbyproperty=(searchbyProp)=>{
  if(searchbyProp === 'name'){
  // sort function
  }else if (searchbyProp === 'amount'){
  // sort function
  }
  
  
  }


render(){

    return(
        <div>
        <Badge className=' badge badge-pill bg-dark text-success p-2 m-2'>      
             ${this.state.projectedBalanceTotal} projected  Total
        </Badge>
        <Badge className=' badge badge-pill bg-dark text-success p-2 m-2'>
         ${this.state.pendingTransactionsTotal} pending Transactions
        
        </Badge>          
        
        <Badge className=' badge badge-pill bg-dark text-success p-2 m-2'>
         ${this.state.actualTransactionsTotal} actual Total
        
        </Badge>
    
        <Grid container >

    
        <Grid item className='text-center' >
        
  
<div  style={{
  border: '2px solid red ',
width: '100vw',
  display: 'flex', 
flexDirection: 'column', 
flexWrap: 'wrap', 
alignItems: 'center', 
alignContent: 'center',
 justifyContent: 'center',
justifyItems: 'center' }}>

{this.state.items.map((m)=>{
  return(
   
    <Card  key={m.id} style={{borderLeft: '5px dashed red ', width: '300px'}} className="card-box mb-4 p-3">
    <h6 className='text-uppercase'>{m.itemName}</h6> 
    <div className="d-flex align-items-center pb-2 justify-content-between">
      <div>

      </div>
      <p className="ml-2  text-primary">
     ${m.itemCost}

      </p>
    </div>
    <div>
      
      <h6 style={{width:'50%'}}  className={m.recStatus ? "badge text-left badge-success ": "badge text-left badge-danger"} >
      {m.recStatus ? 'Complete' : 'Pending'}

      </h6>
      <p style={{width:'50%'}} className='text-right'> {moment(m.transactionDate).format('DD/MM/YY')}</p>

      </div>
  </Card>



   
  )
})}

</div>

        </Grid>
       </Grid>
      

        </div>
    )
}

}

export default Transactions
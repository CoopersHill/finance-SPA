import React, { Fragment } from 'react';
import moment from 'moment'
import CreateTransactionForm from '../components/crudForm'

import { Grid, Badge, Card, Button, Divider} from '@material-ui/core';

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
        Projected Balance: <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525', color: 'green'}}>      
            ${this.state.projectedBalanceTotal} 
        </Badge>
        Pending Transactions Total : <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525',color: 'green'}}>
         ${this.state.pendingTransactionsTotal} 
        
        </Badge>          
        
        Actual Balance:   <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525',color: 'green'}}>
   ${this.state.actualTransactionsTotal} 
        
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
   
    <Card  key={m.id} style={m.recStatus ? {borderLeft: '5px dashed green ', width: '300px'} : {borderLeft: '5px dashed yellow ', width: '300px'} } className="card-box m-2 p-3">
    <h6 className='text-uppercase'>{m.itemName}</h6> 

    <Grid container>
    
    <Grid style={{height:'1.5rem', width:'50%',borderBottom: '1px dashed black'}} className='text-left' item >
  <p>  Cost</p>
    </Grid>
    <Grid style={{height:'1.5rem', width:'50%', borderBottom: '1px dashed black'}} className='text-right'  item >
    <p className="text-right text-primary">
     ${m.itemCost}

      </p>
    </Grid>
    <Grid style={{height:'1.5rem', width:'50%', borderBottom: '1px dashed black'}} className='text-left' item >
    Date
    </Grid>
    <Grid style={{height:'1.5rem', width:'50%', borderBottom: '1px dashed #212121'}} className='text-right' item >
    <p className='text-right'> {moment(m.transactionDate).format('DD/MM/YY')}</p>

    </Grid>
   <Grid style={{height:'1.5rem', width:'50%',borderBottom: '1px dashed #212121'}} className='text-left' item >
    Status
    </Grid>
    <Grid style={{height:'1.5rem', width:'50%', borderBottom: '1px dashed #212121'}} className='text-right' item >
    <h6  className={m.recStatus ? "badge  badge-success ": "badge badge-warning"} >
    {m.recStatus ? 'Complete' : 'Pending'}

    </h6>

    </Grid>
    
   </Grid> 

<div className='mt-2'>
<Button variant="outlined" color="primary">update</Button><Button variant="outlined" color="secondary">delete</Button>  

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
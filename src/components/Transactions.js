import React, { Fragment } from 'react';
import moment from 'moment'
import CreateTransactionForm from '../components/crudForm'
import FilterCard from '../components/FilterCard'
import SortCard from '../components/SortCard'
import { Grid, Badge, Card, Button, Divider} from '@material-ui/core';

import {sortByNameA, 
  sortByNameZ, sortByCostHighest, 
  sortByCostLowest, sortByStatusFalse, sortByStatusTrue} from '../Functions/sortFunctions'
import {searchByName} from '../Functions/searchFunctions'
import {allTransactionsTotal, pendingTransactionsCalc, completedTransactionsTotal} from '../Functions/balanceCalcs'



class Transactions extends React.Component {
constructor(props){
super(props)
    this.state = {
      itemName: '',
      itemCost: '',
      recStatus: '',
      transactionDate: '',
      allTransactions: 0,
       pendingTransactionsTotal: 0, 
       completedTransactions: 0,
        searchTerm: '',
        status: '',
        alpha: '',
        omega: '',
        items: [],
        staticItems: []
    }
    
    this.handleItemsChange = this.handleItemsChange.bind(this)

 
}



componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://hwfinanceapp20201201223059.azurewebsites.net/api/transactions')
    .then(response => response.json())
    .then((data) =>{
       
      let realData = (data) ? data : [{itemName: 'testItem', itemCost: 10}]
let ddw = allTransactionsTotal(realData)  

      this.setState({
            items: data,
            staticItems: data,
            allTransactions: allTransactionsTotal(realData) , 
            pendingTransactionsTotal: pendingTransactionsCalc(realData), 
            completedTransactions: completedTransactionsTotal(realData)
        })
        console.log('real data', realData)
        console.log('ddw', ddw)
    })
}

handleItemsChange=(value)=>{
this.setState({
  items: value
})

console.log('new items', value)
}


render(){

    return(
        <div>

        Projected Balance: <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525', color: 'white'}}>      
            ${this.state.allTransactions} 
        </Badge>
        Pending Transactions Total : <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525',color: 'white'}}>
         ${this.state.pendingTransactionsTotal} 
        
        </Badge>          
        
        Completed Transactions Total:   <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525',color: 'white'}}>
   ${this.state.completedTransactions} 
        
        </Badge>  
   
        <Grid container >
        <Grid item className='text-center' style={{color: 'white', width: '35vw'}} >
        filters, create and sort will go here
        </Grid>
    
        <Grid item className='text-center' >
        
  
<div  style={{


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
    <p className='text-right'> {moment(m.transactionDate).format(' MMM Do, YYYY')}</p>

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
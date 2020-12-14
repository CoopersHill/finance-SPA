import React from 'react';
import moment from 'moment'


import {objectServer, corsUrl, transactionsUrl, bankAccountsUrl } from '../Functions/objectServer'
import { Grid, Badge, Card, Button} from '@material-ui/core';
import {projectedBalanceCalc, pendingTransactionsCalc, actualTransactionsCalc} from '../Functions/balanceCalcs'
import {searchByIDTransaction} from '../Functions/searchFunctions'
// grab transactions through account id parameter, instead of all transactions general via api call file
// extract corsanywhere intp a variable
// refactor fetch call to use url variables as params

class Transactions extends React.Component {
constructor(props){
super(props)
    this.state = {
      itemName: '',
      itemCost: '',
      recStatus: '',
      transactionDate: '',
      projectedBalanceTotal: null,
       pendingTransactionsTotal: null, 
       actualTransactionsTotal: null,
        accountBalance: 1000000000,  
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
let id = this.props.match.params.id

  Promise.resolve(objectServer(bankAccountsUrl, id))
  .then((data) =>{
    
    let realData = (data.transactions) ? data.transactions : [{itemName: 'testItem', itemCost: 10}]

    this.setState({
          items: realData,
          staticItems: realData,
          projectedBalanceTotal: projectedBalanceCalc(realData)  , 
          pendingTransactionsTotal: pendingTransactionsCalc(realData), 
          actualTransactionsTotal: actualTransactionsCalc(realData)
      })
      console.log('real data', realData)
    

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
            ${this.state.projectedBalanceTotal} 
        </Badge>
        Pending Transactions Total : <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525',color: 'white'}}>
         ${this.state.pendingTransactionsTotal} 
        
        </Badge>          
        
        Completed Transactions Total:   <Badge className=' badge badge-pill bg-secondary p-2 m-2' style={{backgroundColor: '#252525',color: 'white'}}>
   ${this.state.actualTransactionsTotal} 
        
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
     ${m.itemCost.toFixed(2)}

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
<Button 
onClick={()=>{
  searchByIDTransaction(m.id)
}}
variant="outlined" color="primary">update</Button>

<Button variant="outlined" color="secondary">delete</Button>  

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
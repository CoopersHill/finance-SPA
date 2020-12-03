import React, { Fragment } from 'react';


import { Grid, Badge, Card, CardContent } from '@material-ui/core';

import {sortByNameA, sortByNameZ, sortByCostHighest, sortByCostLowest} from '../Functions/sortFunctions'
import {searchByName} from '../Functions/searchFunctions'


class Transactions extends React.Component {
constructor(props){
super(props)
    this.state = {
        actualBalance: null,
        reconciledBalance: null,
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

        
        this.setState({
            items: data,
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
 getActualBalance=()=>{
let allCosts = []
let reconciledCosts =[]
this.state.items.map((m)=>{
allCosts.push(m.itemCost)
if(m.recStatus === true){
  reconciledCosts.push(m.itemCost)
}
  return m.itemCost
})

let actualBalance = allCosts.reduce((a, b)=>{
return  a+b
})
let reconciledBalance = reconciledCosts.reduce((a, b)=>{
  return  a+b
  })
console.log('actual balance', actualBalance)
console.log('reconciled balance', reconciledBalance)

 }

 getReconciledBalance=()=>{
   
}

render(){

    return(
        <div>
        <button
        onClick={()=>{
          this.getActualBalance()
        }}
        >TEST</button>
        <Grid container spacing={4}>
        <Grid item>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-first" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
               crud goes here
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="badge badge-primary px-3">On Hold</div>
                <div className="font-size-sm text-danger px-2">
                  create update delete
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-box mb-4">
          <div className="card-indicator bg-first" />
          <CardContent className="px-4 py-3">
            <div className="pb-3 d-flex justify-content-between">
            filters 
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <div className="badge badge-primary px-3">On Hold</div>
              <div className="font-size-sm text-danger px-2">
                filters go here

             <form >
             <input type='text' onChange={(e)=>{
               this.handleSearch(e)
             }} />
             <button
             onClick={(e)=>{
               e.preventDefault()
this.performSearch()
            console.log('clicked')
             }}
             >search for {this.state.searchTerm}</button>
            
             </form>
               
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
        <Grid item >
        {this.state.items.map((m)=>{
            return(
             
              <Card key={m.id} style={{borderLeft: '5px dashed red '}} className="card-box mb-4">
              <div className="card-indicator bg-first" />
              {m.itemName}
              <CardContent className="px-4 py-3">
                <div className="pb-3 d-flex justify-content-between">
                 {m.id}
                 {m.itemName}
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="badge badge-primary px-3">On Hold</div>
                  <div className="font-size-sm text-danger px-2">
                   {m.itemCost}
                  </div>
                </div>
              </CardContent>
            </Card>
         
            )
          })}
     
        </Grid>
       </Grid>
      

        </div>
    )
}

}

export default Transactions
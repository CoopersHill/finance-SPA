import React, { Fragment } from 'react';


import { Grid, Badge, Card, CardContent } from '@material-ui/core';

import {sortByNameA, sortByNameZ} from '../Functions/sortFunctions'


class Transactions extends React.Component {
constructor(props){
super(props)
    this.state = {
        error: null,
        isLoaded: false,
        transactions: [],
        items: []
    }
    this.sortbyproperty = this.sortbyproperty.bind(this)
}

componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://hwfinanceapp20201201223059.azurewebsites.net/api/transactions')
    .then(response => response.json())
    .then((data) =>{

        
        this.setState({
            items: data,
            transactions: data
        })
        console.log(data)
    })
}

sortbyproperty=(sortType)=>{
if(sortType === 'nameHighest'){
console.log(sortByNameA(this.state.transactions))
}else if (sortType === 'nameLowest'){
  console.log(sortByNameZ(this.state.transactions))

}


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

                <button
                onClick={()=>{
                  this.sortbyproperty('nameHighest')
                }}
                >sort button alpha</button>
                <button
                onClick={()=>{
                  this.sortbyproperty('nameLowest')
                }}
                >sort button omega</button>
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
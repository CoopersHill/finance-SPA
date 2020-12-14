import React from 'react'
import {sortByNameA, 
    sortByNameZ, sortByCostHighest, 
    sortByCostLowest, sortByStatusFalse, sortByStatusTrue, sortByDateNewest, sortByDateOldest} from '../Functions/sortFunctions'

    import { Grid, Badge, Card, Button, Divider} from '@material-ui/core';


const SortCard =(props)=>{
let items = props.items
    return (

        <div>
        
        <Card>
        <Grid>

        <Grid >
       
 <button
 onClick={()=>{
    props.handleItemsChange(sortByCostLowest(props.items))
}}
 > sort cost low</button>
 <button
 onClick={()=>{
    props.handleItemsChange(sortByCostHighest(props.items))
}}
 > sort cost high</button>

        </Grid>
      
        <Grid >
 <button
 onClick={()=>{
    props.handleItemsChange(sortByNameA(props.items))
}}
 > sort sort name alpha
 </button>
 <button
        onClick={()=>{
            props.handleItemsChange(sortByNameZ(props.items))
           
       }}
        > sort sort name omega</button>
        </Grid>
        
        <Grid >
        <button
        onClick={()=>{
           props.handleItemsChange(sortByStatusTrue(props.items))
       }}
        > sort status true first</button>
        <button
        onClick={()=>{
           props.handleItemsChange(sortByStatusFalse(props.items))
       }}
        > sort status false</button>
        </Grid>
   
        <Grid >
 <button
 onClick={()=>{
    props.handleItemsChange(sortByDateNewest(props.items))
}}
 > sort date newest</button>
 <button
 onClick={()=>{
    props.handleItemsChange(sortByDateOldest(props.items))
}}
 > sort date oldest</button>
        </Grid>
        <Grid >
       
               
        </Grid>
        </Grid>
        </Card>
        



        </div>
    )
}
 

export default SortCard
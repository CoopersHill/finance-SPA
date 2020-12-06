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

        <Grid style={{width: '50%'}}>
       
 <button
 onClick={()=>{
    props.handleItemsChange(sortByCostLowest(props.items))
}}
 > sort cost low</button>


        </Grid>
        <Grid style={{width: '50%'}}>
        <button
        onClick={()=>{
           props.handleItemsChange(sortByCostHighest(props.items))
       }}
        > sort cost high</button>
        </Grid>
        <Grid style={{width: '50%'}}>
 <button
 onClick={()=>{
    props.handleItemsChange(sortByNameA(props.items))
}}
 > sort sort name alpha
 </button>

        </Grid>
        <Grid style={{width: '50%'}}>

        <button
        onClick={()=>{
            props.handleItemsChange(sortByNameZ(props.items))
           
       }}
        > sort sort name omega</button>
                
        </Grid>
        <Grid style={{width: '50%'}}>
        <button
        onClick={()=>{
           props.handleItemsChange(sortByStatusTrue(props.items))
       }}
        > sort status true first</button>
        
        </Grid>
        <Grid style={{width: '50%'}}>
        <button
        onClick={()=>{
           props.handleItemsChange(sortByStatusFalse(props.items))
       }}
        > sort status true last</button>
        
        </Grid>
        <Grid style={{width: '50%'}}>
 <button
 onClick={()=>{
    props.handleItemsChange(sortByDateNewest(props.items))
}}
 > sort date newest</button>
 
        </Grid>
        <Grid style={{width: '50%'}}>
        <button
        onClick={()=>{
           props.handleItemsChange(sortByDateOldest(props.items))
       }}
        > sort date oldest</button>
               
        </Grid>
        </Grid>
        </Card>
        



        </div>
    )
}
 

export default SortCard
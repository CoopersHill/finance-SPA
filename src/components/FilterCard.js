import React, {useState} from 'react'

import { Grid, Badge, Card,FormControl, TextField, Button, Divider} from '@material-ui/core';



const FilterCard =(props)=>{

const [searchTerm, setSearchTerm] = useState('')
const [recStatus, setRecStatus] = useState('false')
const [alpha, setAlpha] = useState('')
const [omega, setOmega] = useState('')


    return(
<div>

<Card>

<ItemNameForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleFilter={props.handleFilter}  performNameFilter={props.performNameFilter} />
<CostRangeForms/>





</Card>

</div>

    )
}


 const ItemNameForm =(props)=>{
    
    
    return(
<div>
form
<form onSubmit={(e)=>{
e.preventDefault()
props.handleFilter(props.searchTerm)
props.performNameFilter()
}}>

<TextField
variant='outlined'

onChange={(e)=>{
    e.preventDefault()
   props.setSearchTerm(e.target.value)
}}

/>
<button
name='itemName'
onClick={(e)=>{
    e.preventDefault()
    props.handleFilter(props.searchTerm)
props.performNameFilter()
}}
>
search
</button>



</form>
</div>
    )
 }

 const CostRangeForms =()=>{
    
    
    return(
        <div>
form
<form>

<TextField/>
<TextField/>


<button
name='itemCost'
onClick={(e)=>{
    
    e.preventDefault()
    
    console.log(e.target.name)
}}
>
cost range
</button>

</form>
</div>
    )
 }


 const RecStatusForm =()=>{
    
    
    return(
        <div>
        form
        <form>

<TextField/>
<button
name='recStatus'
onClick={(e)=>{
    e.preventDefault()
    
    console.log(e.target.name)
}}

>
status
</button>


</form>
        </div> 
    )
 }

 const DateRangeForms =()=>{
    
    
    return(
        <div>
form
<form>

<TextField/>
<TextField/>



<button
name='recDate'
onClick={(e)=>{
    e.preventDefault()
    
    console.log(e.target.name)
}}
>
date range
</button>


</form>
</div>
    )
 }



export default FilterCard
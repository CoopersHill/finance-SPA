import React, { Fragment } from 'react';


import { Grid, Badge, Card, CardContent } from '@material-ui/core';

const testItems = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
    }
]


class Transactions extends React.Component {
constructor(props){
super(props)
    this.state = {
        error: null,
        isLoaded: false,
        items: []
    }
}

componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then((data) =>{

        
        this.setState({
            items: data
        })
        console.log(data)
    })
}

render(){

    return(
        <div>
        <Grid container spacing={4}>
        <Grid item xs={6} sm={6} lg={3}>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-first" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={e => e.preventDefault()}>
                  Presentation site UX
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="badge badge-primary px-3">On Hold</div>
                <div className="font-size-sm text-danger px-2">
                  14:22
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
        {testItems.map((m)=>{
            return(
             
              <Card key={m.id} style={{borderLeft: '5px dashed red '}} className="card-box mb-4 w-25">
              <div className="card-indicator bg-first" />
              <CardContent className="px-4 py-3">
                <div className="pb-3 d-flex justify-content-between">
                 {m.id}
                 {m.email}
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="badge badge-primary px-3">On Hold</div>
                  <div className="font-size-sm text-danger px-2">
                   {m.itemName}
                  </div>
                </div>
              </CardContent>
            </Card>
         
            )
          })}
     
        </Grid>
      
        <Grid item xs={6} sm={6} lg={3}>
          <Card className="card-box mb-4">
            <div className="card-indicator bg-warning" />
            <CardContent className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={e => e.preventDefault()}>
                  UX research
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <span className="px-3 badge badge-warning">Scheduled</span>
                <div className="font-size-sm text-danger px-2">
                  11:35
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      

        </div>
    )
}

}

export default Transactions
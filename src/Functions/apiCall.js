


let allTransactions =()=>{
    fetch('https://cors-anywhere.herokuapp.com/https://hwfinanceapp20201201223059.azurewebsites.net/api/transactions')
    .then(response => response.json())
    .then((data)=>{
        console.log(data)
    })
    

}

export default allTransactions
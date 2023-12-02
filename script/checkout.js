let purchased =JSON.parse(localStorage.getItem('purchased'))
let table = document.querySelector('main')
table.innerHTML=purchased.map((item,index)=>{
    return `
    <tr>
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td>${item.price}</td>
    </tr>
      
    `
}).join('')

//for the calculation of total price use reduce method and the purchased array to calcualte all the cost and display it in the bottom of the table.
let object1 ={ //Object created manually
    name:'Nike shoe',
    description: "This is better than the original",
    price:800,
    url:'httpsmdjdmdemm'
}
//constructor function
function Constructor(name,description,price,url){ //function to  create objects
    this.description=description,
    this.price=price,
    this.name=name,
    this.url=url
    
}


//second item created using constructor
let item2 =new Constructor('Another nike','This is better than the fake',700,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png')

//this an empty array where all products will be stored
let items=[]
items.push(object1,item2) //pushing items into array,can add more items

localStorage.setItem('items',JSON.stringify(items)) //blue items is the name of the array ,items you use to refer to it
//sets the array from local
items = JSON.parse(localStorage.getItem('items')) 
//use queryselctor to select item
//use mapmethod to write info
let table =document.querySelector('table')
function siya(){
        let products =items.map(function(item,index){ //use a parameter name you parsed to get value and dot notation
            console.log(item);
            console.log(index)
            return `
            <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>R ${item.price}</td>
            <td>${item.description}</td>
            <td><img src='${item.url}' width='200' height='200'></td>
            <td><button>Edit</button></td>
            <td><button class='delete' value='${index}'>Delete</button></td>
            </tr>
            `
    })
    table.innerHTML=products.join('')
}
siya()
        function favourite(){
                localStorage.setItem('items',JSON.stringify(items)) //blue items is the name of the array ,items you use to refer to it
                    //sets the array from local
            items = JSON.parse(localStorage.getItem('items')) 
    }
    function remove(position){
        items.splice(position,1)
        favourite()
        siya()
    }


let deletebutton=document.querySelector('.delete')
table.addEventListener('click',function(){
 if(event.target.classList.contains('delete')){
    remove(event.target.value)
 }
})
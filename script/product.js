let main =document.querySelector('main')
let purchased =[]
let items =JSON.parse(localStorage.getItem(('items')))

main.innerHTML=items.map(function(item,index){
    return `
     <div>

     <h2>${item.name}</h2>
     </div>
    <p>${item.description}</p>
    <p>${item.price}</p>
    <button data-add value='${index}'>add to cart</button>
    `
}).join('')

function add(index){
    purchased.push(items[index])
    localStorage.setItem('purchased',JSON.stringify(purchased))
}

main.addEventListener('click',function(){
    if(event.target.hasAttribute('data-add')){
        //alert('button pressed')
        add(event.target.value)
    }
})
//search
let a = items.filter(item =>{
return item.name == 'Nike Shoe'
})
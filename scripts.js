const productEl = document.querySelectorAll('.product')
const cartEl = document.querySelector('.cart table')
const btnEl = document.querySelectorAll('.add')

function addToCart(e){
    let product = (e.target.parentNode);
    let removebtn = button()
    let addedItem = document.createElement('tr');
    let items = document.createElement('td');
    let prices = document.createElement('td');
 
    
    let details = product.querySelector('p');
    let productPrice = details.nextElementSibling;
    items.textContent = details.textContent;
    prices.textContent = productPrice.textContent;
    
    addedItem.append(items, prices,removebtn );
    cartEl.append(addedItem);


    removebtn.addEventListener('click',removeItem)

}

function button(){
    let removebtn = document.createElement('button');
    removebtn.innerText = 'remove';
    removebtn.style.color = 'white';
    removebtn.style.backgroundColor = 'red';
    removebtn.style.border = 'none';
    removebtn.style.borderRadius = '2px';
    removebtn.style.margin = '3px';
    removebtn.style.padding = '5px'; 

    return removebtn

}

function removeItem(e){
    let choice = prompt(`Are you sure to remove the item? \na. yes \nb. no`);
    if (choice == 'a'){
        e.target.parentNode.remove()
    }
    
}

for(let i = 0;i<btnEl.length;++i){
    btnEl[i].addEventListener('click',addToCart)
}

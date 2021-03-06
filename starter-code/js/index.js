function deleteItem(e){
  e.currentTarget.parentElement.parentElement.remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(cartTotal){
  let productWrapper = document.getElementsByClassName('wrapper')[0];


  for(var i =0; i<2; i++){
    let items = productWrapper.getElementsByClassName('item-wrapper')[i];
    let item = items[0]
    let price = parseFloat(items.getElementsByClassName('text-center')[1].innerHTML);
    let qnty = items.getElementsByClassName('qnty-info')[0].getElementsByClassName('qnty-input')[0].value;
    let total = (price * parseInt(qnty))
    let priceDiv = items.getElementsByClassName('item-price')[0].innerHTML = total

    cartTotal+=total

  }
  return cartTotal
}

function getTotalPrice() {
  let cartTotal = 0;
  cartTotal = updatePriceByProduct(cartTotal)
  console.log(cartTotal)
  document.getElementsByClassName('form')[0].getElementById('cart-total-h').innerHTML = cartTotal
}

function createQuantityInput(){

}

function createDeleteButton(itemContainer){
  let div = document.createElement('div');
  let btn = document.createElement('button')
  btn.innerHTML = 'Delete'
  btn.setAttribute('class', 'btn btn-delete')
  div.appendChild(btn)
  itemContainer.appendChild(div)
  return itemContainer
}

function createQuantityNode(itemContainer){
  let newInput = document.createElement('input');
  let div = document.createElement('div');
  let label = document.createElement('label')
  newInput.setAttribute('class', 'qnty-input');
  newInput.setAttribute('id', 'qnty');
  newInput.setAttribute('type', 'number');

  label.innerHTML = 'Quantity'

  div.appendChild(label);
  div.appendChild(newInput);
  itemContainer.appendChild(div)
  return itemContainer

}

function createItemNode(div){
  let priceDiv = document.createElement('div');
  priceDiv.setAttribute('class', 'text-center');
  let itemPrice =  document.getElementById('new-item-price').value;

  priceDiv.innerHTML = '$'+itemPrice
  div.appendChild(priceDiv)
  return div
}
function createQuantityPrice(itemContainer){
  let div = document.createElement('div');
  div.setAttribute('class', 'item-price')
  div.innerHTML = '0.00'
  itemContainer.appendChild(div)
  return itemContainer
}

function createNewItemRow(itemDiv){
  let productNameDiv = document.createElement('div');
  let span = document.createElement('span');
  let itemName = document.getElementById('new-item-name').value;

  span.textContent = itemName

  productNameDiv.setAttribute('class', 'product-name text-center')
  productNameDiv.appendChild(span)
  itemDiv.appendChild(productNameDiv)

  return itemDiv

}

function createNewItem(e){
  e.preventDefault()
  let itemDiv = document.createElement('div')
  itemDiv.setAttribute('class', 'item-wrapper')

  itemDiv = createNewItemRow(itemDiv)
  itemDiv = createItemNode(itemDiv)
  itemDiv = createQuantityNode(itemDiv)
  itemDiv = createQuantityPrice(itemDiv)
  itemDiv = createDeleteButton(itemDiv)
  let newItemContainer = document.getElementsByClassName('wrapper')[0]
  newItemContainer.appendChild(itemDiv)
  deleteButtons  = document.getElementsByClassName('btn-delete');
  updateDeltes()
}
function updateDeltes(){
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}
var deleteButtons = document.getElementsByClassName('btn-delete');
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

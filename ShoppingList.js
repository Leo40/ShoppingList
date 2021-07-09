const shoppingList = [
  { name: "Bacon", unitPrice: 10.99, quantity: 1, store: "Woolworths" },
  { name: "Eggs", unitPrice: 3.99, quantity: 1, store: "Woolworths" },
  { name: "Cheese", unitPrice: 6.99, quantity: 1, store: "Woolworths" },
  { name: "Chives", unitPrice: 1.0, quantity: 2, store: "Costco" },
  { name: "Wine", unitPrice: 11.99, quantity: 6, store: "Danmurpys" },
  { name: "Brandy", unitPrice: 17.55, quantity: 6, store: "Danmurpys" },
  { name: "Bananas", unitPrice: 0.69, quantity: 3, store: "Costco" },
  { name: "Ham", unitPrice: 2.69, quantity: 3, store: "Costco" },
  { name: "Tomatoes", unitPrice: 3.26, quantity: 3, store: "Costco" },
  { name: "Tissue", unitPrice: 8.45, quantity: 5, store: "Costco" },
];

//Compute per-line sub total
console.log(`Per-Line Sub Total: \n-----------------------`);
const subTotal = shoppingList.map(listItem => listItem.unitPrice * listItem.quantity);

subTotal.forEach(currSubTotal => {
  console.log(currSubTotal);
});
console.log();

//Compute grand total
console.log('Grand Total: \n-----------------------');
const grandTotal = shoppingList.reduce((total, curr) => {
  return total += curr.unitPrice * curr.quantity;
}, 0);
console.log(grandTotal);
console.log();

//Filter out items in all but Woolworths
console.log('Woolworths Items: \n-----------------------');
const WoolworthsItems = shoppingList.filter(listItem => listItem.store === "Woolworths");

WoolworthsItems.sort((a, b) => {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}); 
WoolworthsItems.forEach(item => {    
  console.log(item.name);
});
console.log();

//Display items costing more than $10
console.log('Items Over $10: \n-----------------------');
const sortItemsByCost = shoppingList.reduce((itemsArr, curr) => {  
  if(curr.unitPrice > 10){
    itemsArr.push(curr);
  }
  return itemsArr;
}, []);

// const sortItemsByCost = shoppingList.filter(item => item.unitPrice > 10);
sortItemsByCost.forEach(item => {
  console.log(`${item.name}: ${item.unitPrice}`);
})
console.log();

//Organize shopping list by store
console.log('Shopping List by Store: \n-----------------------');
const listByStore = shoppingList.reduce((storesObj, currListItem) => {
  if (currListItem.store === 'Woolworths') {
    storesObj.Woolworths.push(` ${currListItem.name}`);
  }

  if (currListItem.store === 'Costco') {
    storesObj.Costco.push(` ${currListItem.name}`);
  }

  if (currListItem.store === 'Danmurpys') {
    storesObj.Danmurpys.push(` ${currListItem.name}`);
  }

  return storesObj;
}, {
  Woolworths: [],
  Costco: [],
  Danmurpys: []
});

Object.keys(listByStore).forEach(key => {
  console.log(`${key}:${listByStore[key]}`);
});
console.log();

//Sort list by store
console.log('Shopping List by Store Name: \n----------------------------');
const sortedByStore = shoppingList.sort((a, b) => {
  let x = a.store.toLowerCase();
  let y = b.store.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}); 

sortedByStore.forEach(store => {    
  console.log(store);
});
console.log();

//Sort list by item name
console.log('Shopping List by Item Name: \n----------------------------');
const sortedByItemName = shoppingList.sort((a, b) => {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}); 

sortedByItemName.forEach(storeByName => {    
  console.log(storeByName);
});
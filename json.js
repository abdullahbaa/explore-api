const user ={id:2, name :'Raihan',MStatus: 'Unmarried',job:'actor'};
// JavaScript Object Notation(JSON)
// Json JavaScript er je kono file ke string file e convert kore.
const stringified=JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop ={
    owner : 'Alia',
    address:{
        street:'Kochukhet bhoot er goli',
        city:'Ranveer',
        counstry: 'BD'
    },
    products:['Laptop','mic','monitor','keyboard'],
    revenue:450000,
    isOpen: true,
    isNew:false
}
console.log(shop);
const newShop = JSON.stringify(shop); //kono object file ke string e convert kore 
console.log(newShop);

const newJson = JSON.parse(newShop); //kono json file ke js e convert korar jonno use kora hoy
console.log(newJson);
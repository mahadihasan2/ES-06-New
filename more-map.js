const friends = ['Rakib', 'Robin', 'Mahadi Hasan', 'Mohamod Hasan Korim']
const flenth = friends.map(friend => friend.length)
console.log(flenth)

// Array of object 
const product = [{
        name: 'Mobile-Phone',
        Price: 35000,
        color: 'Black'
    },
    {
        name: 'Smart-Watch',
        Price: 5000,
        color: 'Yellow'
    },
    {
        name: 'Bolpin',
        Price: 300,
        color: 'White'
    },
    {
        name: 'Bat',
        Price: 6000,
        color: 'Red'
    },
    {
        name: 'Balti-toilet',
        Price: 200,
        color: 'gray'
    }
]
const NameProduct = product.map(productname => productname.name)
const NameProductPrice = product.map(productname => productname.Price)
const NameProductPriceColor = product.map(productname => productname.color)
product.map(allProduct => console.log(allProduct))
product.forEach(allProducts => console.log(allProducts))
console.log(NameProduct, NameProductPrice, NameProductPriceColor)
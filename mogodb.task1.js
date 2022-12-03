

SampleData = [
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price": 26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    }
]


//  1.Find all the information about each products

db.query.find({}, { _id: 0 }).toArray()

//  2.Find the product price which are between 400 to 800
db.query.find({ $and: [{ product_price: { $gte: 400 } }, { product_price: { $lte: 800 } }] }).toArray();

// 3.Find the product price which are not between 400 to 600

db.query.find({ $or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }], }).toArray();

// 4.List the four product which are grater than 500 in price 

db.query.find({ product_price: { $gt: 500 } }, { _id: 0 }).toArray();

// 5.Find the product name and product material of each products

db.query.find({}, { _id: 0, product_name: 1, product_material: 1 }).toArray();

// 6.Find the product with a row id of 10

db.query.find({ id: "10" }, { _id: 0 }).toArray();

// 7.Find only the product name and product material

db.query.find({ id: "10" }, { _id: 0, product_name: 1, product_material: 1 }).toArray();

// 8.Find all products which contain the value of soft in product material 

db.query.find({ product_material: "Soft" }).toArray();


// 9.Find products which contain product color indigo  and product price 492.00


db.query.find({ product_price: 492, product_color: "indigo" }).toArray();


// 10.Delete the products which product price value are same

db.query.deleteOne({ product_price: { $eq: 36 } })


const Products = require("./models/productschema");
const productsdata = require('./constant/productsdata')


const DefaultData = async () => {
    try {
        await Products.deleteMany({});
        const storedata = await Products.insertMany(productsdata)
        // console.log(storedata);
    } catch (error) {
        console.log("Error" + error.message);
    }
}

module.exports = DefaultData
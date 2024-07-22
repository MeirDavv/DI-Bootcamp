const {db} = require("../config/db.js");

const _getAllProducts = () => {
    return db('products').select("id", "name", "price").orderBy("id");
}

module.exports = {
    _getAllProducts,
}
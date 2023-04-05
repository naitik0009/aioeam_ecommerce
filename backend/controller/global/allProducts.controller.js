const getAllproducts = (request,response,next)=>{
    response.send("welcome to the products page");
}

const getProduct = (request,response,next)=>{
    response.send("welcome to the product page");
}

module.exports = {getAllproducts,getProduct};
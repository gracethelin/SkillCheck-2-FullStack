const products = []

let id = 1

module.exports = {

    
    showProducts:(req, res) => {
        // const db = req.app.get('db');

        // let products = await db.get_products().catch(err => res.status(500).send(err))

        // products.forEach((e, i) => products[i].t_date = e.t_date.toDateString())

        res.status(200).send(products)
    },

    createProduct:(req, res) => {
        const {product_name, product_price} = req.body
        console.log(product_price, product_name)
            const obj = {
                product_name: product_name,
                product_price: product_price,
                id: id
            }
            id++

            products.push(obj)

            res.status(200).send(products)

        // const db = req.app.get('db');
    }
}
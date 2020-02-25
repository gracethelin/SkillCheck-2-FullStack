


module.exports = {

    
    showProducts: async (req, res) => {
        const db = req.app.get('db');

         await db.get_inventory().then(products =>{
            res.status(200).send(products)
        }).catch(err => res.status(500).send(err))

       
    },

    createProduct:(req, res) => {
        console.log('hit this', res)
        const dbInstance = req.app.get('db')
        const {productName, productPrice, imgUrl}= req.body
        dbInstance.add_products([productName, productPrice, imgUrl]).then((products) => {
            res.status(200).send(products)
        }) 
    },

    updateProduct:(req, res) => {
        const dbInstance = req.app.get('db')
        const {productName, productPrice, imgUrl}= req.body
        const {id} = req.params
        dbInstance.update_product([productName, productPrice, imgUrl, id]).then((products) => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },

    deleteProduct:(req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_product(id).then((products) => {
            res.status(200).send(products)
        })
    }
}
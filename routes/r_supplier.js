const router = require('express').Router()
const userController = require('../controller/c_supplier')

router.post('/add_supplier', (req, res) => {
    userController.insertSupplier(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// router.post('/login', (req, res) => {
//     userController.login(req.body)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })
router.get('/view_supplier', (req, res) => {
    userController.getAllSupplier()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
const router = require("express").Router();
const userController = require("../controller/c_asset");

router.post("/add_asset", (req, res) => {
  console.log(req.body);
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// router.post('/login', (req, res) => {
//     userController.login(req.body)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

router.delete("/delete_asset/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_asset", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

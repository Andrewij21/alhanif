const router = require("express").Router();
const userController = require("../../controller/PP/c_pp_pembayaran");

router.post("/add_pembayaran", (req, res) => {
  console.log(req.body);
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_pembayaran/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_pembayaran", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_pembayaran/:id", (req, res) => {
  userController
    .getPembelianById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/update_pembayaran/:id_pembayaran", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_pembayaran, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

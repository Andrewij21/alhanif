const router = require("express").Router();
const userController = require("../../controller/PP/c_pp_pengeluaran");

router.post("/add_pengeluaran", (req, res) => {
  console.log(req.body);
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_pengeluaran/:id", (req, res) => {
  userController
    .deletePembelian(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view_pengeluaran", (req, res) => {
  userController
    .getAllCustomer()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_pengeluaran/:id", (req, res) => {
  userController
    .getPembelianById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/update_pengeluaran/:id_pengeluaran", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_pengeluaran, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;

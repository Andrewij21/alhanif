const router = require("express").Router();
const userController = require("../../controller/MTI/c_pembayaran");

router.post("/add_pengeluaran", (req, res) => {
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

router.get("/view_pengeluaran_id/:id", (req, res) => {
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

router.get("/searchData/:startDate/:endDate", (req, res) => {
  console.log(req.params.startDate);
  console.log(req.params.endDate);
  userController
    .searchDate(req.params.startDate, req.params.endDate)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
module.exports = router;

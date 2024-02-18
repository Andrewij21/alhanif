const router = require("express").Router();
const userController = require("../../controller/TK/c_tk_kalendar");

router.post("/add_asset", (req, res) => {
  console.log(req.body);
  userController
    .insertCustomer(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

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

router.put("/update_asset/:id_asset", (req, res) => {
  console.log(req.body);
  userController
    .updatePembelian(req.params.id_asset, req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/view_asset_id/:id_asset", (req, res) => {
  console.log(req.params.id_asset);
  userController
    .getPembelianById(req.params.id_asset)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;

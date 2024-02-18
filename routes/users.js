"use strict";
const auth = require("basic-auth");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const userController = require("../controller/user_controller");
var config = require("../config/config.json");
const fs = require("fs");
const uploadUtil = require("../config/uploadImg");
const fotoUser = uploadUtil.upload.single("fotoProfile");

module.exports = (router) => {
  router.get("/", (req, res) => res.end("Al-hanif"));

  router.post("/users/signin", (req, res) => {
    try {
      userController
        .loginUser(req.body.username, req.body.password)
        .then((result) => {
          let username = result.message;
          userController
            .getProfile(username)
            .then((result) => {
              res.json(result);
            })
            .catch((err) => res.json(err));
        })
        .catch((err) => res.json(err));
    } catch (err) {
      console.log(err);
    }
  });

  router.post("/users/signup", fotoUser, (req, res) => {
    let data = req.body;
    console.log(data);
    if (data.role == "Admin TK") {
      data.role = 3;
    } else if (data.role == "Admin MTI") {
      data.role = 2;
    } else if (data.role == "Admin Pondok Pesantren") {
      data.role = 4;
    } else if (data.role == "Admin Yayasan") {
      data.role = 1;
    } else {
      data.role = 0;
    }
    userController
      .registerUser(data)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/users/getall", (req, res) => {
    userController
      .getAll()
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });

  router.delete("/users/:id", (req, res) => {
    userController
      .deleteUser(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/update_user/:id_asset", (req, res) => {
    console.log(req.body);
    userController
      .updatePembelian(req.params.id_asset, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });

  router.get("/user_id/:id_asset", (req, res) => {
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
};

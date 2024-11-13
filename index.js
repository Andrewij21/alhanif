const express = require("express");
const app = express();
const logger = require("morgan");
const router = express.Router({ mergeParams: true });
const port = process.env.PORT || 5050;
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const setUp = require("./setup");
const moment = require("moment-timezone");
const cors = require("cors");
require("./routes/users")(router);
require("./routes/r_kategori_jenis")(router);
require("./routes/r_product")(router);
require("./routes/r_penjualan")(router);
require("./routes/r_pembelian")(router);
// require("./routes/r_pengeluaran")(router);
app.use(express.static("statics"));
app.use("/statics", express(path.join(__dirname, "statics")));
app.use(cors());
app.options("*", cors());
app.use(
  express.urlencoded({
    enableTypes: ["json", "form"],
    extended: true,
  })
);
app.use(
  express.json({
    extended: true,
  })
);
app.use(logger("dev"));
app.use("/", router);
app.use("/pemasukan", require("./routes/r_pemasukan"));
app.use("/supplier", require("./routes/r_supplier"));
app.use("/jamaah", require("./routes/r_jamaah"));
app.use("/asset", require("./routes/r_asset"));
app.use("/pengeluaran", require("./routes/r_pengeluaran"));

//routes MTI
app.use("/asset_mti", require("./routes/MTI/r_asset_mti"));
app.use("/kelas_mti", require("./routes/MTI/r_kelas"));
app.use("/kalendar_mti", require("./routes/MTI/r_kalendar"));
app.use("/jamaah_mti", require("./routes/MTI/r_jamaah"));
app.use("/pembayaran_mti", require("./routes/MTI/r_pembayaran"));
app.use("/pengeluaran_mti", require("./routes/MTI/r_pengeluaran"));

//routes TK
app.use("/siswa_tk", require("./routes/TK/r_tk_siswa"));
app.use("/asset_tk", require("./routes/TK/r_tk_asset"));
app.use("/kalendar_tk", require("./routes/TK/r_tk_kalendar"));
app.use("/guru_tk", require("./routes/TK/r_tk_guru"));
app.use("/pembayaran_tkk", require("./routes/TK/r_tk_pembayaran"));
app.use("/pengeluaran_tkk", require("./routes/TK/r_tk_pengeluaran"));
app.use("/jabatan_tkk", require("./routes/TK/r_tk_jabatan"));
app.use("/kelas_tkk", require("./routes/TK/r_tk_kelas"));

//routes PP
app.use("/santri_pp", require("./routes/PP/r_pp_santri"));
app.use("/absensi_pp", require("./routes/PP/r_pp_absensi"));
app.use("/asset_pp", require("./routes/PP/r_pp_asset"));
app.use("/kalendar_pp", require("./routes/PP/r_pp_kalendar"));
app.use("/asatidz_pp", require("./routes/PP/r_pp_asatidz"));
app.use("/pembayaran_pp", require("./routes/PP/r_pp_pembayaran"));
app.use("/pengeluaran_pp", require("./routes/PP/r_pp_pengeluaran"));
app.use("/kelas_pp", require("./routes/PP/r_pp_kelas"));
app.use("/jabatan_pp", require("./routes/PP/r_pp_jabatan"));
app.use("/jabatan_tp_pp", require("./routes/PP/r_pp_jabatan_tp"));
app.use("/tp_pp", require("./routes/PP/r_pp_tp"));

server.on("listening", onListening);
server.listen(port);

async function onListening() {
  try {
    console.log("try to listen...");
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    await setUp.dbConnect();
    console.log("Listening on http://localhost:" + addr.port);
  } catch (error) {
    console.log(error);
    console.log("listen failed, try to reconnect in 5 secs...");
    setTimeout(function() {
      onListening();
    }, 5000);
  }
}

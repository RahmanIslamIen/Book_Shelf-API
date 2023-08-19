// import handler
const {
  handlerTambahBuku,
  handlerTampilSemuaBuku,
  handlerDetailBuku,
  handlerUbahBuku,
  handlerHapusBuku,
} = require("./handler");

// sermua route yang menggunakan handler untuk menjalankan fungsi
const semuaRoute = [
  {
    method: "POST",
    path: "/books",
    handler: handlerTambahBuku,
  },
  {
    method: "GET",
    path: "/books",
    handler: handlerTampilSemuaBuku,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: handlerDetailBuku,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: handlerUbahBuku,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: handlerHapusBuku,
  },
];

module.exports = semuaRoute;
